import React from "react";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaUsers,
  FaCogs,
  FaSeedling,
  FaTrophy,
  FaLightbulb,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa";

const brandColor = "#432dd7";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, type: "spring", stiffness: 50 },
  }),
};

const tiltIn = {
  hidden: { rotate: -3, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80 },
  },
};

const slideIn = (direction = "left") => ({
  hidden: { x: direction === "left" ? -200 : 200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
});

export default function About() {
  return (
    <div className="bg-gradient-to-b from-[#f5f3ff] via-white to-[#e0f2fe] text-gray-800 px-4 sm:px-8 md:px-20 py-12 space-y-20">
      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={tiltIn}
      >
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ color: brandColor }}
        >
          About S Interior
        </h1>
        <p className="text-base sm:text-lg mt-4">
          We design meaningful spaces that go beyond aesthetics — we create
          environments that reflect your soul and support your lifestyle.
        </p>
      </motion.div>

      {/* Office Photo */}
      <motion.div
        className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideIn("right")}
      >
        <img
          src="https://media.istockphoto.com/id/1193104249/photo/luxury-office-interior.jpg?s=2048x2048&w=is&k=20&c=10b4qhvH6v697hSGEiPegSmZw9JiXo1Gf7zvAL9KnTo="
          alt="Our Office"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {[
          {
            icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
            title: "Our Vision",
            desc: "To reimagine interior spaces that reflect personality and purpose — delivering elegance, function, and emotion in every corner.",
          },
          {
            icon: <FaBullseye className="text-pink-500 text-2xl" />,
            title: "Our Mission",
            desc: [
              "Deliver tailor-made, livable spaces",
              "Merge aesthetics with functionality",
              "Simplify the journey from idea to reality",
            ],
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="space-y-4 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md"
          >
            <h2
              className="text-2xl font-semibold flex items-center gap-2"
              style={{ color: brandColor }}
            >
              {item.icon} {item.title}
            </h2>
            {Array.isArray(item.desc) ? (
              <ul className="list-disc ml-6 space-y-2 text-sm">
                {item.desc.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm">{item.desc}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: brandColor }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={tiltIn}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaPaintBrush className="text-3xl text-purple-500" />,
              title: "Innovative Concepts",
              desc: "Designs that push boundaries and elevate your lifestyle.",
            },
            {
              icon: <FaHandshake className="text-3xl text-blue-500" />,
              title: "Collaborative Process",
              desc: "We work with you, not just for you.",
            },
            {
              icon: <FaCogs className="text-3xl text-green-500" />,
              title: "End-to-End Execution",
              desc: "From concept to completion, we've got you covered.",
            },
            {
              icon: <FaSeedling className="text-3xl text-emerald-500" />,
              title: "Sustainable Design",
              desc: "Eco-friendly materials with luxurious finishes.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center shadow hover:shadow-xl transition"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="text-center max-w-4xl mx-auto space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideIn("left")}
      >
        <h2 className="text-3xl font-bold" style={{ color: brandColor }}>
          Meet Our Creative Minds
        </h2>
        <p className="text-base sm:text-lg">
          A team of passionate designers, architects, and thinkers — committed
          to crafting emotionally intelligent interiors that feel like home.
        </p>

        {/* Office Owner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: "spring",
            stiffness: 80,
          }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-6 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md"
        >
          <img
            src="https://media.istockphoto.com/id/1735162847/photo/indian-female-with-laptop-sitting-on-bean-bag-on-isolated-white-background-and-smiling.jpg?s=1024x1024&w=is&k=20&c=_Upxn13HHdMzCkt8poJiJcIGf55V03UPvjXPna02VFM="
            alt="Founder - S Interior"
            className="w-28 h-28 rounded-full object-cover shadow-lg"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-gray-800">Aarav Mehta</h3>
            <p className="text-sm text-gray-600 italic">
              Founder & Chief Interior Architect
            </p>
            <p className="text-sm text-gray-700 mt-2 max-w-xxl">
              Aarav blends artistic vision with technical precision. With many
              years of experience, he leads S Interior to create spaces that are
              not only beautiful but truly meaningful.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Achievements */}
      <div className="max-w-5xl mx-auto mt-16">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: brandColor }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={tiltIn}
        >
          Our Achievements
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            {
              icon: <FaTrophy className="text-4xl text-yellow-400" />,
              text: "100+ Projects Completed",
            },
            {
              icon: <FaUsers className="text-4xl text-blue-400" />,
              text: "Interiors That Reflect Our Clients’ Dreams",
            },
            {
              icon: <FaLightbulb className="text-4xl text-pink-400" />,
              text: 'Featured in "Modern Interiors India"',
            },
          ].map((item, i) => (
            <motion.div
              key={item.text}
              className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md text-center w-full md:w-1/3"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="mb-3">{item.icon}</div>
              <p className="text-base font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold mb-4">
          Ready to bring your vision to life?
        </h3>
        <a
          href="/Contact"
          className="inline-block px-6 py-3 font-semibold text-white rounded-full shadow transition hover:scale-105"
          style={{ backgroundColor: brandColor }}
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
}
