// ==UserScript==
// @name         Faceit Disable White Market Ads
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
    const backgroundSelector = '.bHBSNk';

    // Define the CSS selector for the popup element
    const popupSelector = '.lcQvgf';

    // Function to remove the background image
    function removeBackgroundImage() {
        const backgroundElement = document.querySelector(backgroundSelector);
        if (backgroundElement) {
            backgroundElement.style.background = 'none';
        }
    }

    // Function to remove the popup background
    function removePopupBackground() {
        const popupElement = document.querySelector(popupSelector);
        if (popupElement) {
            popupElement.style.backgroundImage = 'none';
        }
    }

    // Run the script when the page loads
    window.addEventListener('load', () => {
        setTimeout(removeBackgroundImage, 3500); // Wait 3500ms before removing the background
        checkPopup();
    });

    // Check for the popup every 3500ms
    setInterval(checkPopup, 3500);
})();
