import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen]);

  // Handle scroll effect on navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // slowed down from 0.035 to 0.08
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 180,
        duration: 0.4, // slightly longer duration per letter
      },
    },
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center font-primary"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-30"></div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`top-0 left-0 w-full px-6 py-4 z-40 transition-all duration-300 bg-transparent` + (scrolled ? " bg-opacity-90 backdrop-blur-md" : "")} 
      >
        <div className="flex justify-between items-center text-white font-medium">
          <h1 className="text-2xl font-bold">Nexa Travels</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-30 items-center">
            <a href="#destinations" className="hover:text-black">
              Destinations
            </a>
            <a href="#hotels" className="hover:text-black">
              Hotels
            </a>
            <a href="#flights" className="hover:text-black">
              Flights
            </a>
            <a href="#bookings" className="hover:text-black">
              Bookings
            </a>
            <a href="#login" className="hover:text-black">
              Login
            </a>
            <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
              Sign up
            </button>
          </div>

          {/* Hamburger */}
          <div className="md:hidden z-50">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 w-full z-40 bg-white bg-opacity-90 flex flex-col items-center gap-4 py-6 text-black md:hidden"
        >
          <a href="#destinations" className="hover:text-yellow-400">
            Destinations
          </a>
          <a href="#hotels" className="hover:text-yellow-400">
            Hotels
          </a>
          <a href="#flights" className="hover:text-yellow-400">
            Flights
          </a>
          <a href="#bookings" className="hover:text-yellow-400">
            Bookings
          </a>
          <a href="#login" className="hover:text-yellow-400">
            Login
          </a>
          <button className="border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition">
            Sign up
          </button>
        </motion.div>
      )}

      {/* Hero Section */}
      <div className="relative z-10 flex items-center h-screen px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-xl text-white space-y-6"
        >
          <h3 className="text-md font-semibold uppercase">
            Best destinations around the world
          </h3>
          {/* Animated Heading with Split Letters */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {["Travel, enjoy", "and live a new", "and full life"].map(
              (line, i) => (
                <motion.div
                  key={i}
                  className="inline-block"
                  initial="hidden"
                  animate="visible"
                  variants={container}
                >
                  {line.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letter}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  <br />
                </motion.div>
              )
            )}
          </h1>

          <p className="text-sm md:text-base opacity-90">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition">
            Find out more
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
