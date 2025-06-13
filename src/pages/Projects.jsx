import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projectPosts = [
  {
    id: 1,
    title: "Top 7 Interior Design Trends for 2025",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris dapibus risus quis suscipit vulputate. Eros diam egestas libero, eu vulputate risus erat at velit. Phasellus semper, nisl sit amet facilisis tincidunt, sem ex sagittis odio, sed tempus lorem erat nec eros. Ut tincidunt, augue a convallis posuere, nunc lacus pulvinar nunc, non porta orci sapien id orci. In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a erat et nisi convallis tincidunt. Sed laoreet diam nec odio bibendum, nec efficitur nisi fermentum. Etiam lacinia euismod sapien, in pulvinar nisi luctus vel. Donec ut rhoncus velit, nec lacinia justo.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Maximizing Small Spaces: Design Tricks That Work",
    excerpt:
      "Learn how to make the most of compact areas with smart, aesthetic solutions.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Color Psychology in Interiors",
    excerpt:
      "Discover how different colors can impact mood and ambiance in your space.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Luxury Minimalism: Less is More",
    excerpt:
      "Explore how clean lines and fewer items create luxurious, serene spaces.",
    image:
      "https://images.unsplash.com/photo-1600585152657-579ce83b44e4?auto=format&fit=crop&w=800&q=80",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

export default function Projects() {
  const [visiblePosts, setVisiblePosts] = useState(2);

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 2);
  };

  const showLess = () => {
    setVisiblePosts(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-50 text-gray-900">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#432dd7]">
          S Interior Projects
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
          A collection of our finest interior design transformations and concepts.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="space-y-16 px-4 md:px-12 pb-10">
        {projectPosts.slice(0, visiblePosts).map((post, index) => (
          <motion.article
            key={post.id}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#432dd7] group-hover:underline transition">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>
              <Link to={`/projects/${post.id}`}>
                <div className="mt-4 inline-flex items-center text-[#432dd7] font-medium group-hover:translate-x-1 transition-all duration-200">
                  View project <FaArrowRight className="ml-2" />
                </div>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Buttons */}
      <div className="text-center pb-20 space-x-4">
        {visiblePosts < projectPosts.length && (
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-[#432dd7] text-white rounded-full hover:bg-[#2c1ab5] shadow-md hover:shadow-lg transition duration-300"
          >
            Load More
          </button>
        )}
        {visiblePosts > 2 && (
          <button
            onClick={showLess}
            className="px-6 py-2 border border-[#432dd7] text-[#432dd7] rounded-full hover:bg-[#432dd7] hover:text-white transition duration-300"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
