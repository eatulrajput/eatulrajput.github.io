// var loader = document.getElementById("preloader");
//         window.addEventListener("load", function () {
//             loader.style.display = "none";

//         })

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

window.addEventListener('load', function () {
    // Keep the preloader for a few more seconds after the page loads
    setTimeout(function() {
        var preloader = document.getElementById("preloader");
        preloader.style.display = "none";
        closeNav(); // Automatically close the curtain menu when the website loads
    },  3000); // Change the time (in milliseconds) as needed
});

document.addEventListener("DOMContentLoaded", function () {
    closeNav(); // Ensure the curtain menu is closed initially
});