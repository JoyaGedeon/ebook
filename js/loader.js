/**
 * Page transition loader
 * Shows a spinner on page load, fades out once ready.
 * Fades back in before navigating to a new page.
 */

(function () {
    const loader = document.getElementById('pageLoader');

    // Fade out loader when page is ready
    window.addEventListener('load', () => {
        loader.classList.add('fade-out');
    });

    // Show loader before navigating away
    function navigateTo(url) {
        loader.classList.remove('fade-out');
        setTimeout(() => {
            window.location.href = url;
        }, 250);
    }

    // Expose globally so inline scripts can use it
    window.navigateTo = navigateTo;
})();
