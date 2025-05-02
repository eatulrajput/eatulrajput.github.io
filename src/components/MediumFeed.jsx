import { useState, useEffect } from "react";

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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10">
        Latest from Medium
      </h2>

      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {articles.slice(0, visibleCount).map((article) => (
          <div
            key={article.link}
            className="bg-white shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline block mb-2"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-500">
                {new Date(article.pubDate).toDateString()} • {article.readingTime} min read
              </p>
            </div>
          </div>
        ))}
      </div>

      {articles.length >= 10 && (
        <div className="text-center mt-10">
          <a
            href="https://medium.com/@eatulrajput"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
          >
            Read More on Medium
          </a>
        </div>
      )}
    </div>
  );
};

export default MediumFeed;
