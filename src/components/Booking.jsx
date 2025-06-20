import React, { useState } from "react";
import {
  FaHeart,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaChartBar,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Booking = () => {
  const [liked, setLiked] = useState(false);

  return (
    <section className="py-16 px-6 md:px-12 xl:px-28 bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-6"
        >
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Easy and Fast
            </p>
            <h1 className="text-6xl font-bold text-gray-900 mt-1 leading-snug">
              Book Your Next Trip <br /> In 3 Easy Steps
            </h1>
          </div>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {/* Step 1 */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                <FaMapMarkerAlt className="text-yellow-500 text-base" />
              </div>
              <p className="font-medium text-sm md:text-base text-gray-700">
                Choose Destination
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <FaCalendarAlt className="text-orange-500 text-base" />
              </div>
              <p className="font-medium text-sm md:text-base text-gray-700">
                Make Payment
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                <FaPaperPlane className="text-cyan-600 text-base" />
              </div>
              <p className="font-medium text-sm md:text-base text-gray-700">
                Reach Airport on Selected Date
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section (Card) */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex-1 max-w-sm w-full"
        >
          {/* Glow Background */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-100 via-white to-cyan-100 blur-2xl opacity-70 z-0"></div>

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-lg p-5 space-y-4"
          >
            <img
              src="https://assets-news.housing.com/news/wp-content/uploads/2022/09/03180906/places-to-visit-in-Greece-feature-compressed.jpg"
              alt="Trip to Greece"
              className="w-full h-48 object-cover rounded-xl"
            />

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900">Trip To Greece</h3>
              <p className="text-sm text-gray-500">14-29 June | by Lana Del</p>
            </div>

            {/* Hoverable Icons */}
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              {[FaMapMarkerAlt, FaPaperPlane, FaCalendarAlt].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.3, color: "#2563EB" }}
                  className="cursor-pointer transition-colors"
                >
                  <Icon />
                </motion.div>
              ))}
            </div>

            {/* Footer Row */}
            <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
              <div className="flex items-center gap-1">
                <FaChartBar className="text-gray-400" />
                <span>24 bookings</span>
              </div>

              {/* Like Button */}
              <button
                onClick={() => setLiked(!liked)}
                className="focus:outline-none"
              >
                <motion.div
                  animate={{ scale: liked ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaHeart
                    className={`transition-colors duration-300 ${
                      liked ? "text-red-500" : "text-gray-400"
                    }`}
                    size={18}
                  />
                </motion.div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
