/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})


let currentPanel = 0; // Track the current panel
const panels = document.querySelectorAll('.panel'); // All panels
const slider = document.querySelector('.slider'); // Slider container
const totalPanels = panels.length;

// Handle "Next" button click
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPanel < totalPanels - 1) {
        currentPanel++;
        slider.style.transform = `translateX(-${currentPanel * 100}%)`;
    }
});

// Handle "Previous" button click
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPanel > 0) {
        currentPanel--;
        slider.style.transform = `translateX(-${currentPanel * 100}%)`;
    }
});

// // Check if the current page URL matches a valid route
// document.addEventListener("DOMContentLoaded", function () {
//     const validPages = ["/", "/about", "/blog", "/contact"]; // List your valid paths
//     const currentPath = window.location.pathname;

//     if (!validPages.includes(currentPath)) {
//         window.location.href = "/404.html"; // Redirect to your custom 404 page
//     }
// });
