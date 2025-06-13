import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const brandColor = "#432dd7";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const toastVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 200 },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.3 },
  },
};

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    try {
      const storedMessages =
        JSON.parse(localStorage.getItem("contactMessages")) || [];
      storedMessages.push(values);
      localStorage.setItem("contactMessages", JSON.stringify(storedMessages));
      resetForm();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <div
      className="px-6 py-16 min-h-screen"
      style={{
        background: "linear-gradient(to right, #f8f9ff, #e8ecff)",
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2
          className="text-4xl font-bold text-center mb-8"
          style={{ color: brandColor }}
        >
          Let’s Create Something Beautiful Together
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-700 mb-14">
          At{" "}
          <span className="font-semibold" style={{ color: brandColor }}>
            S Interior
          </span>
          , every space tells a story. Yours is waiting to be designed. Whether
          you're ready to start a project or simply curious, we’re here to
          connect.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8 bg-white p-6 rounded-xl shadow-md"
            variants={fadeInUp}
          >
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: brandColor }}
            >
              Office Address
            </h3>

            {/* Address Section */}
            <div className="flex items-start gap-4 group">
              <FaMapMarkerAlt className="text-xl mt-1 text-gray-700 group-hover:text-indigo-600 transition" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition">
                  Visit Us
                </h4>
                <a
                  href="https://www.google.com/maps/place/S+Interior+Designer/@20.7571599,73.0578362,19z/data=!3m1!4b1!4m6!3m5!1s0x3be0932bd0d652d9:0x37f54bb14e8ad3b9!8m2!3d20.7571586!4d73.0584799!16s%2Fg%2F11h3m7bxwj!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDYwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 group-hover:text-indigo-600 transition cursor-pointer block"
                >
                  2nd Floor Shaikh Complex,
                  <br />
                  Juna Valsad Rd, Gujarat 396521
                </a>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-start gap-4 group">
              <FaPhoneAlt className="text-xl mt-1 text-gray-700 group-hover:text-indigo-600 transition" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition">
                  Call Us
                </h4>
                <a
                  href="tel:+919876543210"
                  className="text-gray-600 group-hover:text-indigo-600 transition cursor-pointer block"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-start gap-4 group">
              <FaEnvelope className="text-xl mt-1 text-gray-700 group-hover:text-indigo-600 transition" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition">
                  Email
                </h4>
                <a
                  href="mailto:hello@sinterior.com"
                  className="text-gray-600 group-hover:text-indigo-600 transition cursor-pointer block"
                >
                  hello@sinterior.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600 transition transform hover:scale-110 cursor-pointer"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition transform hover:scale-110 cursor-pointer"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-600 transition transform hover:scale-110 cursor-pointer"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            variants={fadeInUp}
          >
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: brandColor }}
            >
              Get An Enquiry
            </h3>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="space-y-6">
                  <div>
                    <Field
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      style={{ borderColor: brandColor }}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      style={{ borderColor: brandColor }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <Field
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      style={{ borderColor: brandColor }}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <Field
                      name="message"
                      as="textarea"
                      rows="5"
                      placeholder="Your Message"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      style={{ borderColor: brandColor }}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
                    style={{ backgroundColor: brandColor }}
                  >
                    Send Message
                  </motion.button>

                  <p className="text-sm text-gray-500 text-center">
                    We typically respond within 24 hours.
                  </p>
                </Form>
              )}
            </Formik>

            {/* Toast Message */}
            <AnimatePresence>
              {showToast && (
                <motion.div
                  className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
                  variants={toastVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  Message sent successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          className="mt-20 h-[300px] w-full rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.842827751321!2d73.0559049738675!3d20.757163597054202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0932bd0d652d9%3A0x37f54bb14e8ad3b9!2sS%20Interior%20Designer!5e0!3m2!1sen!2sin!4v1749674140005!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
}
