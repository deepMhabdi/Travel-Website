import React from "react";
import { motion } from "framer-motion";
import weather from "../assets/weather.png";
import flight from "../assets/flight.png";
import events from "../assets/events.png";
import customization from "../assets/customization.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  const services = [
    { img: weather, title: "Calculated Weather" },
    { img: flight, title: "Best Flights" },
    { img: events, title: "Local Events" },
    { img: customization, title: "Customization" },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20 mt-10 font-primary">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Category
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          We Offer Best Services
        </h2>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 10px 35px rgba(0,0,0,0.08)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-gray-300 hover:bg-gray-400 cursor-pointer transition-all duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 object-contain"
            />
            <p className="font-medium text-gray-700">{service.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
