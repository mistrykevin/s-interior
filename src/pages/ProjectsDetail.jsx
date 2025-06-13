import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const projectPosts = [
  {
    id: 1,
    title: "Top 7 Interior Design Trends for 2025",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris dapibus risus quis suscipit vulputate. Eros diam egestas libero, eu vulputate risus erat at velit. Phasellus semper, nisl sit amet facilisis tincidunt...",
    content: [
      {
        heading: "1. Biophilic Design",
        text: "Bringing nature inside with plants, natural light, and earthy materials is trending in 2025.",
        image:
          "https://media.istockphoto.com/id/2150678869/photo/modern-office-interior-with-meeting-and-coworking-space-panoramic-window.jpg?s=1024x1024&w=is&k=20&c=_yTdzWMUVXSkf28if90YQpnYXTqFcNqzwUE6OPtH0fM=",
      },
      {
        heading: "2. Smart and Sustainable Spaces",
        text: "Eco-conscious materials and smart-home tech continue to dominate modern interiors.",
        image:
          "https://images.unsplash.com/photo-1598300055294-1f7c88fc0890?auto=format&fit=crop&w=800&q=80",
      },
      {
        heading: "3. Bold Color Accents",
        text: "Interior spaces are getting more expressive with jewel tones, rich textures, and statement pieces.",
        image:
          "https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=800&q=80",
      },
    ],
    banner:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Maximizing Small Spaces: Design Tricks That Work",
    excerpt:
      "Learn how to make the most of compact areas with smart, aesthetic solutions.",
    content: [
      {
        heading: "1. Use Vertical Space",
        text: "Install shelves, hanging storage, and wall-mounted lighting to free up floor space.",
        image:
          "https://images.unsplash.com/photo-1600585152930-1ff7c03cd9a3?auto=format&fit=crop&w=800&q=80",
      },
      {
        heading: "2. Multipurpose Furniture",
        text: "Choose furniture that serves more than one purpose, like storage ottomans or foldable tables.",
        image:
          "https://images.unsplash.com/photo-1603201668364-3de6b31c67b2?auto=format&fit=crop&w=800&q=80",
      },
    ],
    banner:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function ProjectsDetail() {
  const { id } = useParams();
  const project = projectPosts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-50 text-gray-900 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-semibold text-center">
          Project not available
        </h1>
        <Link
          to="/projects"
          className="group inline-flex items-center mt-4 text-[#432dd7] font-medium hover:translate-x-1 transition-transform duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Go back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-50 text-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white text-gray-900"
      >
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Banner */}
          <motion.img
            src={project.banner}
            alt={`${project.title} banner`}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          />

          {/* Title */}
          <motion.h1
            className="text-4xl font-bold text-[#432dd7] mb-6 leading-snug tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h1>

          {/* Optional excerpt */}
          {project.excerpt && (
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-1w-prose break-words text-justify">
              {project.excerpt}
            </p>
          )}

          {/* Content Sections */}
          {project.content.map((section, index) => (
            <motion.section
              key={index}
              className="mb-12 flex flex-col md:flex-row gap-6 items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={section.image}
                alt={`Image for ${section.heading}`}
                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md"
              />
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold text-[#432dd7] mb-2">
                  {section.heading}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {section.text}
                </p>
              </div>
            </motion.section>
          ))}

          {/* Back to Projects Link */}
          <Link
            to="/projects"
            className="group inline-flex items-center mt-4 text-[#432dd7] font-medium hover:translate-x-1 transition-transform duration-200"
          >
            <FaArrowLeft className="mr-2" />
            Back to projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
