import React, { useEffect } from "react";
import Footer from "./Footer";
import MediumFeed from "./MediumFeed";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col text-black">
      {/* Parallax Hero Section */}
      <div className="relative h-[60vh] sm:h-[80vh] md:h-[100vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Blogs
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-16 px-4">
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Welcome to my blog where I share insights and tutorials.
        </p>

        {/* Medium Blog Feed */}
        <MediumFeed />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
