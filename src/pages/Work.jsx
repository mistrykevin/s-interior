import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaRegClock, FaUserAlt, FaRocket } from "react-icons/fa";

const allProjects = [
  {
    id: 1,
    category: "Residential",
    title: "Sanctuary in the City",
    description:
      "A vibrant apartment reborn as a calming oasis, blending nature and modernity.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Commercial",
    title: "Creative Hive Workspace",
    description:
      "An inspiring office where innovation thrives amid minimalist elegance.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Modular Kitchens",
    title: "The Heart of Home",
    description:
      "A kitchen designed for warmth, connection, and culinary adventures.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Residential",
    title: "Rustic Modern Escape",
    description:
      "Textures and tones that tell stories of comfort and contemporary style.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Commercial",
    title: "Luminary Lounge",
    description:
      "A reception space that greets visitors with light, clarity, and sophistication.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    name: "Sophia L.",
    quote: "This space brought my vision to life. I couldn’t be happier.",
  },
  {
    name: "Ethan W.",
    quote:
      "Working with the team was seamless and exciting. Highly recommended!",
  },
  {
    name: "Maya R.",
    quote: "Every detail speaks of elegance and personalization. Love it!",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Work() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#432dd7]">
            Spaces That Speak Your Story
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
            Discover how thoughtful design can turn walls into whispers, corners
            into conversations, and rooms into memories.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
          {allProjects.map(({ id, image, title }) => (
            <motion.div
              key={id}
              className="relative group overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <motion.div className="absolute inset-0 flex items-center justify-center text-indigo-950 text-5xl sm:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-2">
                {title}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.section
          className="mt-24 max-w-5xl mx-auto p-6 bg-indigo-50 rounded-3xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-indigo-900">
            Our Design Philosophy
          </h2>
          <p className="text-indigo-800 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed italic mb-8 text-center">
            “Design is more than aesthetics — it’s a feeling, an experience, a
            story unfolding within four walls...”
          </p>

          <ul className="max-w-4xl mx-auto text-indigo-700 text-base sm:text-lg font-medium space-y-6">
            <li className="flex items-start space-x-4">
              <FaLeaf className="text-2xl text-green-600 shrink-0 mt-1" />
              <span>
                <strong>Sustainability:</strong> Designing with respect for the
                planet.
              </span>
            </li>
            <li className="flex items-start space-x-4">
              <FaRegClock className="text-2xl text-yellow-600 shrink-0 mt-1" />
              <span>
                <strong>Timelessness:</strong> Interiors that captivate across
                eras.
              </span>
            </li>
            <li className="flex items-start space-x-4">
              <FaUserAlt className="text-2xl text-pink-600 shrink-0 mt-1" />
              <span>
                <strong>Personalization:</strong> Spaces reflecting your unique
                story.
              </span>
            </li>
            <li className="flex items-start space-x-4">
              <FaRocket className="text-2xl text-blue-600 shrink-0 mt-1" />
              <span>
                <strong>Innovation:</strong> Blending creativity with
                cutting-edge solutions.
              </span>
            </li>
          </ul>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 text-indigo-900">
            Stories From Those We've Touched
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map(({ name, quote }) => (
              <motion.div
                key={name}
                className="bg-white p-2 sm:p-4 rounded-3xl shadow-lg border border-indigo-100"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-indigo-800 italic mb-6 leading-relaxed text-base sm:text-lg">
                  “{quote}”
                </p>
                <p className="text-indigo-900 font-semibold text-right text-lg sm:text-xl">
                  — {name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
