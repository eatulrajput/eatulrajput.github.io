function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

window.addEventListener('load', function () {
    closeNav(); // Automatically close the curtain menu when the website loads
});

document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});