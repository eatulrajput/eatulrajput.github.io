import React from "react";
import Footer from "./Footer";

// Quotes Data
const quotes = [
  {
    id: 1,
    author: "Bruce Lee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAXCUqjTzHINQbj5KTBAxzb4ajETP2COtmg&s",
    quote: "Be water, my friend.",
  },
  {
    id: 2,
    author: "Albert Einstein",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    quote: "Imagination is more important than knowledge.",
  },
  {
    id: 3,
    author: "Florian Christl",
    image: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://florianchristl.de/wp-content/uploads/elementor/thumbs/Florian-Presse1792-1-Kopie-scaled-q5kog5yue06hod94ouhqtknfckos6fpmv30blwd9ca.jpg",
    quote: "Music is the language of emotions.",
  },
];

// MySpace Component
const MySpace = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Main Content */}
      <div className="flex-grow py-16">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 text-center mt-32">
          🚀 My Space
        </h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          Explore my favorite quotes from legendary minds.
        </p>

        {/* Quotes Section */}
        <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.author}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <p className="text-lg font-semibold italic text-gray-800">
                  "{item.quote}"
                </p>
                <p className="mt-4 font-bold text-blue-600">{item.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Spotify Playlist Section */}
        <div className="max-w-3xl mx-auto text-center mt-16 mb-14">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            🎵 My Spotify Playlist
          </h3>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/6c8GhTT6t2Oy19k1E2SJ4O?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default MySpace;
