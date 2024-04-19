// ==UserScript==
// @name         Block Background Image
// @namespace    https://www.faceit.com/
// @version      0.1
// @description  Blocks a specific background image on a website
// @author       Bronix
// @match        *://www.faceit.com/*
// @grant        none
// @run-at       document-end
// @icon         https://www.google.com/s2/favicons?sz=64&domain=faceit.com
// @homepageURL  https://github.com/Maksim-Nikolaev/faceit-block-ad
// ==/UserScript== 

(function() {
    'use strict';

    // Define the CSS selector for the element with the background image
    const targetSelector = '.bHBSNk';

    // Function to remove the background image
    function removeBackgroundImage() {
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
            targetElement.style.background = 'none';
        }
    }

    // Run the script when the page loads
    window.addEventListener('load', () => {
        setTimeout(removeBackgroundImage, 3500); // Wait 3500ms before removing the background
    });
})();
