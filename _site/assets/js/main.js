// Main JavaScript file for the site
(function () {
    "use strict";

    // Initialize the site when DOM is ready
    document.addEventListener("DOMContentLoaded", function () {
        const nav = document.querySelector('.site-nav');
        const toggleNavState = () => {
            if (!nav) return;
            if (window.scrollY > 12) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };

        toggleNavState();
        window.addEventListener('scroll', toggleNavState, { passive: true });
    });

    // Handle external link accessibility
    function handleExternalLinks() {
        const externalLinks = document.querySelectorAll('a[href^="http"]');
        externalLinks.forEach((link) => {
            if (link.hostname !== window.location.hostname) {
                link.setAttribute("rel", "noopener noreferrer");
                link.setAttribute("target", "_blank");
            }
        });
    }

    // Call functions
    handleExternalLinks();
})();
