import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Interiors",
    description:
      "Elegant, functional living spaces tailored to your lifestyle.",
    icon: "🏡",
  },
  {
    title: "Commercial Interiors",
    description: "Create workspaces that inspire creativity and productivity.",
    icon: "🏢",
  },
  {
    title: "Modular Kitchens",
    description: "Custom kitchen layouts with smart storage and clean design.",
    icon: "🍽️",
  },
  {
    title: "Luxury Bathrooms",
    description:
      "Spa-like bathrooms with high-end finishes and smart fittings.",
    icon: "🛁",
  },
  {
    title: "3D Visualization",
    description:
      "Photorealistic renders to preview your dream interior in detail.",
    icon: "🎨",
  },
  {
    title: "Lighting Design",
    description: "Ambient, task, and decorative lighting to elevate any space.",
    icon: "💡",
  },
  {
    title: "Space Planning",
    description: "Optimized layouts to make the best use of your space.",
    icon: "📐",
  },
  {
    title: "Furniture Customization",
    description: "Unique, tailor-made furniture to match your theme.",
    icon: "🛋️",
  },
  {
    title: "Color & Texture Consultation",
    description: "Perfect palette selection to set the tone of your space.",
    icon: "🎨",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function Services() {
  return (
    <div className="relative min-h-screen px-4 sm:px-6 lg:px-20 py-16 bg-gradient-to-br from-[#f5f7fa] via-[#c3cfe2] to-[#e2ebf0] text-gray-900 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -top-32 -left-32" />
      <div className="absolute w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -bottom-24 -right-24" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#432dd7]">
          Our Interior Design Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
          Transforming your spaces into beautiful, functional environments with
          creativity and craftsmanship.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, idx) => (
          <motion.div
            key={svc.title}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {svc.icon}
            </div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2 group-hover:underline">
              {svc.title}
            </h3>
            <p className="text-gray-600">{svc.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Workflow Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 max-w-5xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-12">
          How We Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <ol className="relative border-l-2 border-indigo-300 space-y-8 pl-6">
            {[
              "Initial Consultation & Requirement Gathering",
              "Concept Design & Mood Board Creation",
              "3D Visualization & Feedback",
              "Material Selection & Planning",
              "Execution & Regular Updates",
              "Final Handover & Styling",
            ].map((step, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-7.5 top-2 w-3 h-3 bg-indigo-600 rounded-full" />
                <h4 className="text-base sm:text-lg font-medium text-gray-800">
                  {step}
                </h4>
              </li>
            ))}
          </ol>
          <motion.img
            src="https://media.istockphoto.com/id/1956810571/photo/happy-parents-making-plans-with-an-architect-during-home-renovation-process.jpg?s=1024x1024&w=is&k=20&c=Rv9S_80oGszIdxvYqPhkaFP244jj--HDk08Ow9uMOzo="
            alt="Interior design process"
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05, rotate: 1 }}
          />
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-10">
          Why Choose Us?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Tailored Designs",
              desc: "Crafted to fit your style and space.",
            },
            {
              title: "Experienced Team",
              desc: "Creativity and expertise in every project.",
            },
            {
              title: "End-to-End Solutions",
              desc: "From concept to completion, we handle it all.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-indigo-700 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
