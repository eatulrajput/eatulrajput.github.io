import { useState, useEffect } from "react";

// Reusable ArticleCard component
const ArticleCard = ({ article }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-gray-950 shadow-lg hover:shadow-xl transition rounded-xl overflow-hidden">
      <div className="relative h-70 overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title || "Article image"}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`h-full w-full object-cover transition-transform duration-500 hover:scale-115 cursor-pointer
            ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700 ease-in-out`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse" />
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-400 mb-2">
          {new Date(article.pubDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          · {article.readingTime} min read
        </p>

        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold text-blue-300 hover:underline block mb-2 uppercase"
        >
          {article.title}
        </a>
      </div>
    </div>
  );
};

const MediumFeed = () => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eatulrajput"
        );
        const data = await response.json();

        const processed = data.items.map((article) => {
          const imgMatch = article.description.match(/<img.*?src="(.*?)"/);
          const imageUrl = imgMatch?.[1] || "https://via.placeholder.com/600";

          const plainText = article.description.replace(/<[^>]*>/g, "");
          const wordCount = plainText.split(/\s+/).length;
          const readingTime = Math.ceil(wordCount / 265);

          return {
            ...article,
            imageUrl,
            readingTime,
          };
        });

        setArticles(processed);
      } catch (error) {
        console.error("Failed to fetch Medium posts:", error);
      }
    };

    fetchMediumPosts();
  }, []);

  // Infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

      if (bottom && visibleCount < articles.length) {
        setVisibleCount((prev) => Math.min(prev + 5, articles.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, articles.length]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Latest from Medium
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {articles.slice(0, visibleCount).map((article) => (
          <ArticleCard key={article.link} article={article} />
        ))}
      </div>

      {/* Load More */}
      {visibleCount < articles.length ? (
        <div className="text-center mt-10">
          <button
            onClick={() =>
              setVisibleCount((prev) => Math.min(prev + 5, articles.length))
            }
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      ) : articles.length > 0 ? (
        <div className="text-center mt-10">
          <a
            href="https://medium.com/@eatulrajput"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow hover:bg-gray-900 transition"
          >
            View All on Medium
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default MediumFeed;
