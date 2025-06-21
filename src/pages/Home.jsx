import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaTools,
  FaBuilding,
  FaProjectDiagram,
  FaBriefcase,
} from "react-icons/fa";

const brandColor = "#432dd7";

const carouselSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    heading: "Spaces That Speak Your Language",
    subtext:
      "Crafting interiors that capture your essence — bold, subtle, timeless.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80",
    heading: "Design That Moves You",
    subtext: "Innovative concepts, impeccable details, unforgettable spaces.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
    heading: "Your Dream. Our Blueprint.",
    subtext: "From inspiration to reality, we bring your vision to life.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-visible shadow-xl">
      {carouselSlides.map((slide, i) => (
        <motion.div
          key={`slide-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-6 text-center text-white transition-opacity duration-700 ${
            i === current ? "z-10" : "z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: i === current ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold drop-shadow-lg max-w-3xl mb-4"
            style={{ color: brandColor }}
          >
            {slide.heading}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: i === current ? 1 : 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl drop-shadow-md"
          >
            {slide.subtext}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      icon: <FaTools className="text-5xl text-blue-600 mb-4" />,
      title: "Services",
      desc: "Explore our full range of interior solutions.",
      path: "/services",
    },
    {
      icon: <FaBuilding className="text-5xl text-green-600 mb-4" />,
      title: "Work",
      desc: "See our recent residential & commercial projects.",
      path: "/work",
    },
    {
      icon: <FaProjectDiagram className="text-5xl text-purple-600 mb-4" />,
      title: "Process",
      desc: "Discover how we transform ideas into reality.",
      path: "/process",
    },
    {
      icon: <FaBriefcase className="text-5xl text-red-500 mb-4" />,
      title: "Projects",
      desc: "Explore our curated collection of past interior projects.",
      path: "/projects",
    },
  ];

  return (
    <div className="bg-[#f3f4fd] min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        {/* Hero Carousel */}
        <Carousel />

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: brandColor }}
          >
            Design Beyond Walls
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
            We don’t just decorate rooms — we create experiences. At{" "}
            <span className="font-semibold" style={{ color: brandColor }}>
              S Interior
            </span>
            , every project is a dialogue between your lifestyle and the
            artistry of space. Bold ideas meet subtle sophistication here.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {cards.map((card, index) => (
              <div
                key={`card-${index}`}
                onClick={() => navigate(card.path)}
                className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                {card.icon}
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-24 text-center"
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-6"
            style={{ color: brandColor }}
          >
            Ready to Redefine Your Space?
          </h2>
          <p className="mb-8 text-gray-700 text-lg max-w-xl mx-auto">
            Your vision + our expertise = magic. Let's create something
            extraordinary together.
          </p>
          <button
            onClick={() => navigate("/Contact")}
            className="bg-purple-500 hover:bg-purple-800 text-white font-semibold px-2 py-2 rounded-lg shadow-lg transition cursor-pointer"
            style={{ backgroundColor: brandColor }}
          >
            Book a Consultation
          </button>
        </motion.section>
      </main>
    </div>
  );
}
