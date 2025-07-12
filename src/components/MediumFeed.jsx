import { useState, useEffect } from "react";

// ArticleCard component
const ArticleCard = ({ article }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
<<<<<<< HEAD
    <div className="bg-white shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden">
      <div className="overflow-hidden h-56 relative">
=======
    <div className="bg-white shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden w-[100%]">
      <div className="overflow-hidden h-80 relative">
>>>>>>> dev
        <img
          src={article.imageUrl}
          alt={article.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
<<<<<<< HEAD
          className={`h-full w-full object-cover transform transition-transform duration-500 hover:scale-110 
=======
          className={`h-full w-full object-cover transform transition-transform duration-500 hover:scale-110 cursor-pointer
>>>>>>> dev
            ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700 ease-in-out`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-pulse w-12 h-12 bg-gray-300 rounded-full" />
          </div>
        )}
      </div>

      <div className="p-6">
<<<<<<< HEAD
=======
        <p className="text-xl text-gray-500">
          {new Date(article.pubDate).toDateString()} • {article.readingTime} min read
        </p>
>>>>>>> dev
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
<<<<<<< HEAD
          className="text-lg font-semibold text-blue-600 hover:underline block mb-2"
        >
          {article.title}
        </a>
        <p className="text-sm text-gray-500">
          {new Date(article.pubDate).toDateString()} • {article.readingTime} min read
        </p>
=======
          className="font-sans text-3xl text-black hover:underline block mb-2 uppercase leading-12 "
        >
          {article.title}
        </a>

>>>>>>> dev
      </div>
    </div>
  );
};

const MediumFeed = () => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); // Show 10 posts initially

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eatulrajput`
        );
        const data = await response.json();

        const processedArticles = data.items.map((article) => {
          const imgMatch = article.description.match(/<img.*?src="(.*?)"/);
          const imageUrl = imgMatch ? imgMatch[1] : "https://via.placeholder.com/600";

          const words = article.description.replace(/<[^>]*>/g, "").split(/\s+/).length;
          const readingTime = Math.ceil(words / 265);

          return {
            ...article,
            imageUrl,
            readingTime,
          };
        });

        setArticles(processedArticles);
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      }
    };

    fetchMediumPosts();
  }, []);

  // Scroll-based lazy loading
  useEffect(() => {
    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

      if (bottomReached && visibleCount < articles.length) {
        setVisibleCount((prev) => Math.min(prev + 5, articles.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, articles.length]);

  // Manual "Read More" button
  const handleReadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, articles.length));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10">
        Latest from Medium
      </h2>

      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {articles.slice(0, visibleCount).map((article) => (
          <ArticleCard key={article.link} article={article} />
        ))}
      </div>

      {/* Read More Button */}
      {visibleCount < articles.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleReadMore}
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Link to full Medium profile */}
      {visibleCount >= articles.length && articles.length > 0 && (
        <div className="text-center mt-10">
          <a
            href="https://medium.com/@eatulrajput"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow hover:bg-gray-900 transition"
          >
            View All on Medium
          </a>
        </div>
      )}
    </div>
  );
};

export default MediumFeed;
