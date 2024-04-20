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

    // Define the URL of the background image to be blocked
    const backgroundImageUrl = 'https://assets.faceit-cdn.net/organizer_takeover/db18537b-4172-4813-b089-36490c1553b7_1713372477971.jpg';

    // Function to find and remove the element with a specific background image URL
    function removeAdFromMatchPage() {
        // Get all the child elements of the main container
        const childElements = document.querySelectorAll('#MATCHROOM-OVERVIEW *');

        // Loop through the child elements and check their background image
        for (const element of childElements) {
            const backgroundImage = window.getComputedStyle(element).getPropertyValue('background-image');
            if (backgroundImage.includes(backgroundImageUrl)) {
                // Remove the background image
                element.style.backgroundImage = 'none';
                return element;
            }
        }

        // If no element is found, return null
        return null;
    }

    // Function to find and remove the element with a specific background image URL
    function removeAdFromPopup() {
        // Find the FuseModalPortal element
        const fuseModalPortalElement = document.querySelector('.FuseModalPortal');

        if (fuseModalPortalElement) {
            // Get all the child elements of the FuseModalPortal
            const childElements = fuseModalPortalElement.querySelectorAll('*');

            // Loop through the child elements and remove the background image
            childElements.forEach(element => {
                element.style.backgroundImage = 'none';
            });
        }
    }

    // Check for the popup every 3500ms
    setInterval(removeAdFromMatchPage, 3500);
    setInterval(removeAdFromPopup, 3500);
})();
