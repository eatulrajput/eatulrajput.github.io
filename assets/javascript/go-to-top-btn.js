// JS for Scroll Up Button Starts

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goToTopBtn").style.display = "block";
    } else {
        document.getElementById("goToTopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
    // Get the current scroll position
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        // Calculate how far to scroll to get to the top
        var scrollStep = -currentScroll / (300 / 15); // 300ms duration for the animation, adjust to suit

        // Use a timer to scroll the page smoothly
        var scrollInterval = setInterval(function () {
            if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15); // 15ms interval for smoother animation, adjust if needed
    }
}
