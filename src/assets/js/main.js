// Main JavaScript file for the site
(function () {
    "use strict";

    // Initialize the site when DOM is ready
    document.addEventListener("DOMContentLoaded", function () {
        // Add any interactive functionality here
        // eslint-disable-next-line no-console
        console.log("Site loaded successfully");
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
