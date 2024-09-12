document.addEventListener("DOMContentLoaded", function() {
    const article = document.getElementById("article");
    const readingTimeElement = document.getElementById("reading-time");

    function calculateReadingTime(text) {
        const wordsPerMinute = 200; // Average reading speed
        const textLength = text.split(/\s+/).length; // Split by spaces
        const time = Math.ceil(textLength / wordsPerMinute);
        return time;
    }

    const textContent = article.innerText || article.textContent;
    const readingTime = calculateReadingTime(textContent);

    readingTimeElement.textContent = `${readingTime} min read`;
});
