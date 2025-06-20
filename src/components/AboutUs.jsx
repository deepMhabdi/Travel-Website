import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const testimonials = [
  {
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis exercitationem nobis facere sunt quod adipisci placeat fugit cumque similique quos quis neque ex repellat tempore quasi nulla dolor, esse alias.”",
    name: "Aaditya Singh",
    location: "Mumbai, India",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "“Loved the experience! The platform is super easy to use. Definitely recommending it to others. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis exercitationem nobis facere sunt quod adipisci placeat fugit cumque similique quos quis neque ex repellat tempore quasi nulla dolor, esse alias.”",
    name: "Rohit Tiwari",
    location: "Pune, India",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "“Such a smooth and elegant platform. Felt truly premium using it. Amazing job. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis exercitationem nobis facere sunt quod adipisci placeat fugit cumque similique quos quis neque ex repellat tempore quasi nulla dolor, esse alias.”",
    name: "Deep Mhabdi",
    location: "Delhi, India",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const AboutUs = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="w-full px-6 md:px-16 py-20 bg-white font-primary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h4 className="text-sm text-gray-500 font-semibold uppercase">
            Testimonials
          </h4>
          <h1 className="text-6xl font-bold mt-2 text-gray-900 leading-tight">
            What People Say
            <br />
            About Us.
          </h1>
        </motion.div>

        {/* Right Section */}
        <div className="flex-1 relative w-full max-w-lg">
          <div className="relative">
            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-sm p-6 rounded-xl relative"
              >
                <div className="absolute -top-8 left-6">
                  <img
                    src={testimonials[current].image}
                    alt="avatar"
                    className="w-14 h-14 rounded-full border-4 border-white shadow-sm"
                  />
                </div>
                <p className="text-gray-600 text-sm mt-8 mb-4">
                  {testimonials[current].text}
                </p>
                <h4 className="text-md font-semibold text-gray-800">
                  {testimonials[current].name}
                </h4>
                <p className="text-xs text-gray-500">
                  {testimonials[current].location}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Arrows Right Side */}
            <div className="absolute right-[-50px] top-[20%] flex flex-col items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="bg-white rounded-full shadow-sm p-2 hover:bg-gray-100 transition"
              >
                <ChevronUp size={20} className="text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white rounded-full shadow-sm p-2 hover:bg-gray-100 transition"
              >
                <ChevronDown size={20} className="text-gray-700" />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === current ? "bg-gray-800" : "bg-gray-300"
                  } transition`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
