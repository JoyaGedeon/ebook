/**
 * Multi-language support
 * Languages: English, Russian, Uzbek
 */

const translations = {
    en: {
        // Common
        appName: 'Ebook Library',
        homeName: "Source of Knowledge",
        logout: 'Logout',

        // Index page
        welcome: 'Welcome to Ebook Library',
        tagline: 'Your digital reading destination',
        getStarted: 'Get Started',

        // Login page
        loginTitle: 'Login / Sign Up',
        loginSubtitle: 'Enter your phone number to get the PIN code',
        phoneLabel: 'Phone Number',
        phonePrefix: '+1',
        phonePlaceholder: '234 567 8900',
        sendOtp: 'Continue',
        authInfoWelcome: 'Welcome to "E-Book"',
        authInfoTrial: 'First 3 days free trial for new users, then subscription',
        authInfoCancel: 'You can cancel your subscription at any time',

        // OTP page
        otpTitle: 'Verify OTP',
        otpSubtitle: 'Enter the PIN code',
        otpLabel: 'OTP Code',
        otpPlaceholder: '123456',
        verify: 'Continue',
        didntReceive: "Didn't receive code?",
        resendOtp: 'Resend OTP',
        changePhone: 'Change phone number',
        otpSentAgain: 'OTP sent again!',
        resendFailed: 'Failed to resend OTP.',
        invalidOtp: 'Invalid OTP. Please try again.',

        // Home page
        welcomeBack: 'Welcome back!',
        browseCollection: 'Browse our collection of ebooks',
        newsTitle: 'News',
        booksTitle: 'Books',
        libraryTitle: 'Library',
        recommendedTitle: 'Recommended for You',
        seeAll: 'See All',
        showLess: 'Show Less',
        filterAll: 'All',
        filterFiction: 'Fiction',
        filterNonFiction: 'Non-Fiction',
        filterScience: 'Science',
        filterHistory: 'History',
        noBooks: 'No books available.',
        loadFailed: 'Failed to load. Please try again later.',
        readerComingSoon: 'Book reader coming soon!',

        // Errors
        otpFailed: 'Failed to send OTP. Please try again.',
        phoneInvalid: 'Phone number must be {n} digits',

        // Footer
        copyright: '© Copyright 2026 E-Book',
        termsOfUse: 'Terms of Use',
        privacyPolicy: 'Privacy Policy',
        cookiePolicy: 'Cookie Policy',
    },

    ru: {
        // Common
        appName: 'Библиотека электронных книг',
        homeName: "Источник Знаний",
        logout: 'Выйти',

        // Index page
        welcome: 'Добро пожаловать в библиотеку',
        tagline: 'Ваш цифровой мир чтения',
        getStarted: 'Начать',

        // Login page
        loginTitle: 'Вход / Регистрация',
        loginSubtitle: 'Введите номер телефона для получения PIN-кода',
        phoneLabel: 'Номер телефона',
        phonePrefix: '+7',
        phonePlaceholder: '999 123 4567',
        sendOtp: 'Продолжить',
        authInfoWelcome: 'Добро пожаловать в "E-Book"',
        authInfoTrial: 'Первые 3 дня бесплатная пробная версия для новых пользователей, затем подписка',
        authInfoCancel: 'Вы можете отменить подписку в любое время',

        // OTP page
        otpTitle: 'Подтверждение',
        otpSubtitle: 'Введите PIN-код',
        otpLabel: 'Код подтверждения',
        otpPlaceholder: '123456',
        verify: 'Продолжить',
        didntReceive: 'Не получили код?',
        resendOtp: 'Отправить повторно',
        changePhone: 'Изменить номер телефона',
        otpSentAgain: 'Код отправлен повторно!',
        resendFailed: 'Не удалось отправить код.',
        invalidOtp: 'Неверный код. Попробуйте снова.',

        // Home page
        welcomeBack: 'С возвращением!',
        browseCollection: 'Просмотрите нашу коллекцию книг',
        newsTitle: 'Новости',
        booksTitle: 'Книги',
        libraryTitle: 'Библиотека',
        recommendedTitle: 'Рекомендуем вам',
        seeAll: 'Показать все',
        showLess: 'Свернуть',
        filterAll: 'Все',
        filterFiction: 'Художественные',
        filterNonFiction: 'Научно-популярные',
        filterScience: 'Наука',
        filterHistory: 'История',
        noBooks: 'Книги не найдены.',
        loadFailed: 'Не удалось загрузить. Попробуйте позже.',
        readerComingSoon: 'Читалка скоро будет доступна!',

        // Errors
        otpFailed: 'Не удалось отправить код. Попробуйте снова.',
        phoneInvalid: 'Номер телефона должен содержать {n} цифр',

        // Footer
        copyright: '© Copyright 2026 E-Book',
        termsOfUse: 'Условия использования',
        privacyPolicy: 'Политика конфиденциальности',
        cookiePolicy: 'Политика cookies',
    },

    uz: {
        // Common
        appName: 'Elektron kutubxona',
        homeName: "Bilim Manbai",
        logout: 'Chiqish',

        // Index page
        welcome: 'Elektron kutubxonaga xush kelibsiz',
        tagline: 'Sizning raqamli kitoblar dunyoingiz',
        getStarted: 'Boshlash',

        // Login page
        loginTitle: 'Kirish / Roʻyxatdan oʻtish',
        loginSubtitle: 'PIN-kod olish uchun telefon raqamingizni kiriting',
        phoneLabel: 'Telefon raqami',
        phonePrefix: '+998',
        phonePlaceholder: '90 123 4567',
        sendOtp: 'Davom etish',
        authInfoWelcome: '"E-Book"ga xush kelibsiz',
        authInfoTrial: 'Dastlabki 3 kun yangi foydalanuvchilar uchun bepul sinov versiyasi, keyin obuna',
        authInfoCancel: 'Obunani istalgan vaqtda bekor qilishingiz mumkin',

        // OTP page
        otpTitle: 'Tasdiqlash',
        otpSubtitle: 'PIN-kodni kiriting',
        otpLabel: 'Tasdiqlash kodi',
        otpPlaceholder: '123456',
        verify: 'Davom etish',
        didntReceive: 'Kod kelmadimi?',
        resendOtp: 'Qayta yuborish',
        changePhone: 'Telefon raqamini oʻzgartirish',
        otpSentAgain: 'Kod qayta yuborildi!',
        resendFailed: 'Kodni yuborib boʻlmadi.',
        invalidOtp: 'Notoʻgʻri kod. Qaytadan urinib koʻring.',

        // Home page
        welcomeBack: 'Xush kelibsiz!',
        browseCollection: 'Kitoblar toʻplamimizni koʻring',
        newsTitle: 'Yangiliklar',
        booksTitle: 'Kitoblar',
        libraryTitle: 'Kutubxona',
        recommendedTitle: 'Siz uchun tavsiyalar',
        seeAll: 'Hammasini koʻrish',
        showLess: 'Kamroq koʻrsatish',
        filterAll: 'Hammasi',
        filterFiction: 'Badiiy',
        filterNonFiction: 'Ilmiy-ommabop',
        filterScience: 'Fan',
        filterHistory: 'Tarix',
        noBooks: 'Kitoblar topilmadi.',
        loadFailed: 'Yuklab boʻlmadi. Keyinroq urinib koʻring.',
        readerComingSoon: 'Kitob oʻqish tez orada!',

        // Errors
        otpFailed: 'Kod yuborib boʻlmadi. Qaytadan urinib koʻring.',
        phoneInvalid: 'Telefon raqami {n} ta raqamdan iborat boʻlishi kerak',

        // Footer
        copyright: '© Copyright 2026 E-Book',
        termsOfUse: 'Foydalanish shartlari',
        privacyPolicy: 'Maxfiylik siyosati',
        cookiePolicy: 'Cookie siyosati',
    }
};

/**
 * Get current language (default: English)
 */
function getCurrentLang() {
    return localStorage.getItem('lang') || 'ru';
}

/**
 * Set language
 */
function setLang(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations();
    if (typeof refreshAllSections === 'function') refreshAllSections();
}

/**
 * Get translation by key
 */
function t(key) {
    const lang = getCurrentLang();
    return translations[lang][key] || translations['ru'][key] || key;
}

/**
 * Apply translations to all elements with data-i18n attribute
 */
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // Handle placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Update phone prefix
    const prefixEl = document.getElementById('phonePrefix');
    if (prefixEl) prefixEl.textContent = t('phonePrefix');

    // Update language toggle
    document.querySelectorAll('.lang-toggle').forEach(el => {
        const label = el.querySelector('.lang-toggle-label');
        const isRu = getCurrentLang() === 'ru';
        el.classList.toggle('active', isRu);
        if (label) label.textContent = isRu ? 'RU' : 'UZ';
    });

    // Update page title
    document.title = t('appName');
}

/**
 * Create language selector HTML
 */
function createLangSelector() {
    // return `
    //     <select id="langSelect" class="lang-select" onchange="setLang(this.value)">
    //         <option value="en">English</option>
    //         <option value="ru">Русский</option>
    //         <option value="uz">O'zbek</option>
    //     </select>
    // `;
    const isRu = getCurrentLang() === 'ru';
    return `
        <div class="lang-toggle${isRu ? ' active' : ''}" onclick="toggleLang()">
            <span class="lang-toggle-knob"></span>
            <span class="lang-toggle-label">${isRu ? 'RU' : 'UZ'}</span>
        </div>
    `;
}

/**
 * Toggle between the two languages
 */
function toggleLang() {
    const current = getCurrentLang();
    setLang(current === 'ru' ? 'uz' : 'ru');
}

// Apply translations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
});
