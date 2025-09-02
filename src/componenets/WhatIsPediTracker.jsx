import React from "react";
import { motion } from "framer-motion";
import { MapPin, Stethoscope, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhatIsPediTracker = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
            What is <br /> Pedi-<span className="text-gray-800">Tracker?</span>
          </h2>
          <p className="mb-6 leading-relaxed">
            Pedi-Tracker is a digital health solution by The Dorcas Cancer
            Foundation, created to help tackle late presentation and diagnosis
            of childhood cancer in Nigeria. <br />
            <br />
            Pedi-Tracker is closing the gap between first symptoms and proper
            diagnosis.
          </p>

          {/* Highlighted Box */}
          <div className="bg-[#8A226F] text-white p-4 rounded-lg shadow-md">
            <p className="text-sm">
              We are building a simple, user-friendly tracking and referral
              system to support Primary Healthcare (PHC) workers, caregivers,
              and patient navigators in identifying, reporting, and referring
              suspected cases of childhood cancer — fast and efficiently.
            </p>
          </div>
        </motion.div>

        {/* Right Box */}
        <motion.div
          className="border border-purple-800 p-6 rounded-md"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <div className="mb-4 flex items-start gap-3">
            <Stethoscope size={20} className="text-purple-800 mt-1" />
            <div>
              <h4 className="font-semibold text-purple-800">HC Worker Support</h4>
              <p className="text-sm text-gray-700">
                Empowering frontline healthcare workers with tools for early detection
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-start gap-3">
            <Users size={20} className="text-purple-800 mt-1" />
            <div>
              <h4 className="font-semibold text-purple-800">Caregiver Guidance</h4>
              <p className="text-sm text-gray-700">
                Supporting families with clear pathways to care
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <MapPin size={20} className="text-purple-800 mt-1" />
            <div>
              <h4 className="font-semibold text-purple-800">Patient Navigation</h4>
              <p className="text-sm text-gray-700">
                Seamless referral system connecting patients to specialized care
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsPediTracker;
