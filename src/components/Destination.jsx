import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
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

const DestinationSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 font-primary -mt-15">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Top Selling
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Top Destinations
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {[
          {
            img: "https://static.toiimg.com/photo/msid-53891769,width-96,height-65.cms",
            location: "Rome, Italy",
            price: "$5.42k",
            duration: "10 Days Trip",
          },
          {
            img: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?cs=srgb&dl=pexels-dominikagregus-672532.jpg&fm=jpg",
            location: "London, UK",
            price: "$4.2k",
            duration: "12 Days Trip",
          },
          {
            img: "https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Top-10-European-Cities-Pairs.jpg",
            location: "Full Europe",
            price: "$15k",
            duration: "28 Days Trip",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 35px rgba(0,0,0,0.08)",
            }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-white rounded-[24px] overflow-hidden shadow-md cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.location}
              className="w-full h-[320px] object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center font-semibold text-gray-900 text-lg">
                <p>{item.location}</p>
                <p className="text-sm">{item.price}</p>
              </div>
              <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                <FaLocationArrow size={13} />
                <p>{item.duration}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DestinationSection;
