import React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Award } from "lucide-react";

// Variants
const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeUpStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero.png"
          alt="Doctor and child"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 py-12 flex flex-col justify-between">
        {/* Text Section */}
        <div className="flex-1 flex items-center justify-center md:justify-end">
          <motion.div
            className="max-w-xl text-center md:text-right"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pedi-<span className="text-pink-300">Tracker</span>
            </h1>
            <p className="text-lg md:text-xl font-semibold">
              Early Detection. Timely Action. Better Outcomes.
            </p>
            <p className="mt-2 text-sm md:text-base">
              Empowering Communities to Catch Childhood Cancer Early
            </p>
          </motion.div>
        </div>

        {/* Bottom Icons */}
        <div className="flex flex-col md:flex-row md:justify-around gap-6 text-center mb-6">
          {[ 
            { icon: <Heart className="text-yellow-300 w-6 h-6" />, label: "Early Detection" },
            { icon: <ShieldCheck className="text-yellow-300 w-6 h-6" />, label: "Timely Action" },
            { icon: <Award className="text-yellow-300 w-6 h-6" />, label: "Better Outcomes" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              variants={fadeUpStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              {item.icon}
              <span className="text-sm font-medium mt-1">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
