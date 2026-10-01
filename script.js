// =========================================
// ZION CHURCH — JAVASCRIPT
// =========================================


// Page loaded
document.addEventListener("DOMContentLoaded", () => {

    console.log("Zion Church website loaded.");

});


// =========================================
// NAVIGATION SCROLL EFFECT
// =========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});
