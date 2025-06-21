import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaLightbulb,
  FaRulerCombined,
  FaPaintRoller,
  FaTools,
  FaHome,
  FaComments,
  FaLeaf,
  FaDollarSign,
  FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const phaseColors = [
  "#e63946",
  "#f4a261",
  "#2a9d8f",
  "#264653",
  "#e9c46a",
  "#8ecae6",
];
const extraColors = ["#ff6b6b", "#38a3a5", "#6a4c93"];

const phases = [
  {
    icon: FaHandshake,
    title: "Discovery & Consultation",
    description:
      "We begin with a deep understanding of your lifestyle, space, and aspirations. Your dream becomes our blueprint.",
  },
  {
    icon: FaLightbulb,
    title: "Concept & Ideation",
    description:
      "Visual brainstorming, moodboards, and a unified creative direction that reflects your story and taste.",
  },
  {
    icon: FaRulerCombined,
    title: "Planning & Design Development",
    description:
      "Precise layouts, space optimization, and 3D visuals crafted with functionality and flow in mind.",
  },
  {
    icon: FaPaintRoller,
    title: "Material & Aesthetic Finalization",
    description:
      "We select premium materials, finishes, and colors that balance beauty with longevity.",
  },
  {
    icon: FaTools,
    title: "Execution & Project Management",
    description:
      "Our expert team brings the design to life with detailed supervision, precision, and clear timelines.",
  },
  {
    icon: FaHome,
    title: "Styling & Handover",
    description:
      "Final styling adds soul to the space. We walk you through every corner of your transformed home.",
  },
];

const extraSections = [
  {
    icon: FaComments,
    title: "Client Collaboration & Communication",
    description:
      "We keep you involved with regular updates, virtual walkthroughs, and feedback sessions to ensure the design matches your vision perfectly.",
  },
  {
    icon: FaLeaf,
    title: "Sustainability & Eco-Friendly Design",
    description:
      "Our designs emphasize eco-conscious materials and energy-efficient solutions to create beautiful yet sustainable living spaces.",
  },
  {
    icon: FaDollarSign,
    title: "Budget Transparency & Flexibility",
    description:
      "We provide clear budget planning and regular cost tracking, offering options that fit your financial goals without compromising style.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Process() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-6 py-16 md:px-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 bg-fixed">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#432dd7]">
          The Interior Work Process
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
          A seamless journey from inspiration to realization — infused with
          creativity, care, and craftsmanship.
        </p>
      </motion.div>

      {/* Process Phases */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 80,
            }}
            viewport={{ once: true }}
            className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="mb-4 flex justify-center">
              <phase.icon
                className="text-3xl"
                style={{ color: phaseColors[index % phaseColors.length] }}
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-black">
              {phase.title}
            </h3>
            <p className="text-gray-600 text-center">{phase.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Final CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h3 className="text-3xl font-semibold mb-4 text-[#432dd7]">
          From Concept to Completion
        </h3>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Every step is handled with precision, care, and a strong design ethos.
          Let’s co-create a space that feels truly yours.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
        >
          Start Your Interior Journey
        </button>
      </motion.div>

      {/* Extra Sections */}
      {extraSections.map(({ icon: Icon, title, description }, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.6 + i * 0.2 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 lg:mt-24 max-w-3xl mx-auto text-center px-4"
        >
          <Icon
            className="text-4xl mb-4 mx-auto"
            style={{ color: extraColors[i % extraColors.length] }}
          />
          <h3 className="text-3xl font-semibold mb-4 text-black">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
        </motion.div>
      ))}
    </div>
  );
}
