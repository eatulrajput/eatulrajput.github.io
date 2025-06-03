import Footer from "./Footer";
import MediumFeed from "./MediumFeed"; // Import MediumFeed

const Blog = () => {
    return (
        <div className="min-h-screen flex flex-col bg-blue-50 text-black">
            {/* Main Content */}
            <div className="flex-grow py-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 text-center mt-32">
                Blogs
                </h2>
                <p className="text-lg text-gray-700 mt-4 text-center">
                    Welcome to my blog where I share insights and tutorials.
                </p>

                {/* Medium Blog Feed */}
                <MediumFeed />
            </div>

            {/* Footer at the bottom */}
            <Footer />
        </div>
    );
};

export default Blog;
