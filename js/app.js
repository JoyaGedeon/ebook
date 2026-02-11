/**
 * Main application logic for the homepage
 * All sections use Swiper carousels with a shared card template.
 */

let libraryBooks = [];
let allData = null;
let libraryExpanded = false;
let newsExpanded = false;

// Swiper instances
let booksSwiper = null;
let newsSwiper = null;
let librarySwiper = null;
let recommendedSwiper = null;

function localized(obj) {
    if (!obj || typeof obj === 'string') return obj || '';
    const lang = getCurrentLang();
    return obj[lang] || obj['en'] || '';
}

async function loadAllData() {
    try {
        const response = await fetch('data/books.json');
        allData = await response.json();
    } catch (error) {
        console.error('Error loading data:', error);
        allData = { books: [], news: [], library: [], recommended: [] };
    }
}

// ============================================
// SHARED CARD TEMPLATE
// ============================================
            //    <div class="carousel-img" style="background: url(${item.cover || item.image || './assets/images/placeholder.png'})"
            //         title="${localized(item.title)}"
            //         ></div>

function renderCard(item, onclick) {
    const needsSubscribe = item.subscribe && !isLoggedIn();
    const cardOnclick = needsSubscribe ? `navigateTo('login.html')` : onclick;
    const subscribeOverlay = needsSubscribe
        ?   `<div class="subscribe-overlay">
                <img class="subscribe-lock" src='assets/lock.png'/>
                <span class="subscribe-badge">
                    ${t('subscribe')}
                </span>
            </div>`
        : '';

    return `
        <div class="swiper-slide">
            <div class="carousel-card anim" onclick="${cardOnclick}">
                <div class="carousel-img-wrapper">
                    <img class="carousel-img" src="${item.cover || item.image || 'assets/images/placeholder.png'}"
                        alt="${localized(item.title)}"
                        onerror="this.style.backgroundColor='#ddd'; this.alt='No cover'">
                    ${subscribeOverlay}
                </div>
                <div class="carousel-content">
                    <span class="card-title">${localized(item.title)}</span>
                    <span class="card-author">${item.date || localized(item.author || item.description)}</span>
                </div>
            </div>
        </div>
    `;
}

function initSwiper(selector, container, config) {
    if (container) container.destroy(true, true);
    return new Swiper(selector, config);
}

// ============================================
// 1. BOOKS
// ============================================

function loadBooks() {
    const el = document.getElementById('booksCarousel');
    if (!allData) return;
    el.innerHTML = allData.books.map(b => renderCard(b, `openBook(${b.id})`)).join('');
    booksSwiper = initSwiper('.books-swiper', booksSwiper, {
        spaceBetween: 20,
        grabCursor: true,
        navigation: { nextEl: '.books-swiper .swiper-button-next', prevEl: '.books-swiper .swiper-button-prev' },
        breakpoints: {
            0:    { slidesPerView: 2, spaceBetween: 12 },
            480:  { slidesPerView: 3, spaceBetween: 16 },
            769:  { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
        }
    });
}

// ============================================
// 2. NEWS
// ============================================

function loadNews() {
    if (!allData) return;
    displayNews(allData.news);
}

function displayNews(news) {
    const el = document.getElementById('newsCarousel');
    if (news.length === 0) {
        el.innerHTML = `<div class="swiper-slide"><p class="no-results">${t('noBooks')}</p></div>`;
        return;
    }
    el.innerHTML = news.map(n => renderCard(n, `openNews(${n.id})`)).join('');
    const rows = newsExpanded ? 2 : 1;
    newsSwiper = initSwiper('.news-swiper', newsSwiper, {
        spaceBetween: 20,
        grabCursor: true,
        grid: { rows: rows, fill: 'row' },
        navigation: { nextEl: '.news-swiper .swiper-button-next', prevEl: '.news-swiper .swiper-button-prev' },
        breakpoints: {
            0:    { slidesPerView: 2, spaceBetween: 12, grid: { rows: rows, fill: 'row' } },
            480:  { slidesPerView: 3, spaceBetween: 16, grid: { rows: rows, fill: 'row' } },
            769:  { slidesPerView: 5, spaceBetween: 20, grid: { rows: rows, fill: 'row' } },
        }
    });
}

function openNews(id) {
    if (!allData) return;
    const news = allData.news.find(n => n.id === id);
    if (!news || !news.pdf) return;
    document.getElementById('readerTitle').textContent = localized(news.title);
    document.getElementById('readerAuthor').textContent = news.date || '';
    showReaderLoader();
    document.getElementById('readerFrame').src = news.pdf + '#toolbar=0';
    readerZoom = 100;
    applyZoom();
    document.getElementById('readerOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

// ============================================
// 3. LIBRARY
// ============================================

function loadLibrary() {
    if (!allData) return;
    libraryBooks = allData.library;
    displayLibrary(libraryBooks);
}

function displayLibrary(books) {
    const el = document.getElementById('libraryCarousel');
    if (books.length === 0) {
        el.innerHTML = `<div class="swiper-slide"><p class="no-results">${t('noBooks')}</p></div>`;
        return;
    }
    el.innerHTML = books.map(b => renderCard(b, `openBook(${b.id})`)).join('');
    const rows = libraryExpanded ? 3 : 1;
    librarySwiper = initSwiper('.library-swiper', librarySwiper, {
        spaceBetween: 20,
        grabCursor: true,
        grid: { rows: rows, fill: 'row' },
        navigation: { nextEl: '.library-swiper .swiper-button-next', prevEl: '.library-swiper .swiper-button-prev' },
        breakpoints: {
            0:    { slidesPerView: 2, spaceBetween: 12, grid: { rows: rows, fill: 'row' } },
            480:  { slidesPerView: 3, spaceBetween: 16, grid: { rows: rows, fill: 'row' } },
            769:  { slidesPerView: 5, spaceBetween: 20, grid: { rows: rows, fill: 'row' } },
        }
    });
}

function filterLibrary(category) {
    if (category === 'all') {
        displayLibrary(libraryBooks);
    } else {
        displayLibrary(libraryBooks.filter(b => b.category === category));
    }
}

// ============================================
// 4. RECOMMENDED
// ============================================

function loadRecommended() {
    const el = document.getElementById('recommendedCarousel');
    if (!allData) return;
    el.innerHTML = allData.recommended.map(b => renderCard(b, `openBook(${b.id})`)).join('');
    recommendedSwiper = initSwiper('.recommended-swiper', recommendedSwiper, {
        spaceBetween: 20,
        grabCursor: true,
        navigation: { nextEl: '.recommended-swiper .swiper-button-next', prevEl: '.recommended-swiper .swiper-button-prev' },
        breakpoints: {
            0:    { slidesPerView: 2, spaceBetween: 12 },
            480:  { slidesPerView: 3, spaceBetween: 16 },
            769:  { slidesPerView: 5, spaceBetween: 20 },
        }
    });
}

// ============================================
// READER
// ============================================

function findBookById(id) {
    if (!allData) return null;
    const all = [...allData.books, ...allData.library, ...allData.recommended];
    return all.find(b => b.id === id) || null;
}

let readerZoom = 100;

function showReaderLoader() {
    const loader = document.getElementById('readerLoader');
    loader.classList.remove('hidden');
    const frame = document.getElementById('readerFrame');
    frame.onload = function() { loader.classList.add('hidden'); };
}

function openBook(bookId) {
    const book = findBookById(bookId);
    if (!book || !book.pdf) return;
    document.getElementById('readerTitle').textContent = localized(book.title);
    document.getElementById('readerAuthor').textContent = localized(book.author);
    showReaderLoader();
    document.getElementById('readerFrame').src = book.pdf + '#toolbar=0';
    readerZoom = 100;
    applyZoom();
    document.getElementById('readerOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeReader() {
    document.getElementById('readerOverlay').classList.remove('open');
    document.getElementById('readerFrame').src = '';
    document.body.style.overflow = '';
}

function applyZoom() {
    const frame = document.getElementById('readerFrame');
    const scale = readerZoom / 100;
    frame.style.transform = `scale(${scale})`;
    frame.style.transformOrigin = 'top left';
    frame.style.width = (100 / scale) + '%';
    frame.style.height = (100 / scale) + '%';
    document.getElementById('zoomLevel').textContent = readerZoom + '%';
}

function zoomIn() {
    if (readerZoom >= 200) return;
    readerZoom += 10;
    applyZoom();
}

function zoomOut() {
    if (readerZoom <= 50) return;
    readerZoom -= 10;
    applyZoom();
}

function refreshAllSections() {
    if (!allData) return;
    loadBooks();
    loadNews();
    loadLibrary();
    loadRecommended();
}
