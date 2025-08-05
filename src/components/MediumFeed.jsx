import { useState, useEffect } from "react";

// Reusable ArticleCard component
const ArticleCard = ({ article }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="shadow-lg hover:shadow-xl transition rounded-xl overflow-hidden">
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
        <p className="text-sm text-emerald-300 mb-2">
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
          className="text-xl font-semibold text-white hover:text-white/50 block mb-2 capitalize"
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
    <div className="max-w-full mx-0 px-4 sm:px-6 lg:px-8 py-16">

      <div className="w-full flex justify-between items-center">
        <h2 className="text-3xl font-medium text-left text-white mb-10">
          Featured Blogs
        </h2>
        <a
          href="https://medium.com/@eatulrajput"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg px-6 py-3 text-emerald-400 font-medium border-2 border-emerald-600 shadow hover:bg-white hover:text-black hover:border-white rounded-full transition mb-10"
        >
          View All
        </a>
      </div>

      <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-3">
        {articles.slice(0, visibleCount).map((article) => (
          <ArticleCard key={article.link} article={article} />
        ))}
      </div>


    </div>
  );
};

export default MediumFeed;
