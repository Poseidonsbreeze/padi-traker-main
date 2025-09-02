import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

// Animation Variants
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

const WhyItMatters = () => {
  return (
    <section  id="why" className="px-4 sm:px-6 lg:px-12 py-12 bg-white text-gray-800">
      {/* Title */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Why It Matters</h2>
        <p className="text-sm sm:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum pretium, ultrices sed faucibus nulla. Egestas sapien not cursus arcu, diam.
        </p>
      </motion.div>

      {/* Challenge Box */}
      <motion.div
        className="bg-[#612A65] text-white rounded-lg p-6 md:p-8 max-w-5xl mx-auto mb-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <div className="flex items-center justify-center mb-4">
          <AlertCircle className="w-6 h-6 text-yellow-400" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-center mb-3">The Real Challenge</h3>
        <p className="text-sm sm:text-base text-center text-gray-100">
          Many assume childhood cancer cases in Nigeria are diagnosed late because families delay seeking help – but our research tells a different story.
          <br /><br />
          In fact, as revealed in this study published in the Nigerian Journal of Paediatrics, many children present to health facilities early, but delays occur because the symptoms are not recognized or acted upon.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 2}
            className={`p-6 rounded-lg shadow ${
              i === 2 ? "bg-[#F4BC2C] text-purple-900 font-semibold flex items-center justify-center text-center" : "bg-[#F4BC2C] text-gray-800"
            }`}
          >
            {i === 0 && (
              <>
                <h4 className="font-semibold mb-2 text-base">
                  Early Presentation, Late Recognition
                </h4>
                <p className="text-sm">
                  Primary Healthcare Centres (PHCs), often the first point of contact, frequently miss early signs due to low awareness or training gaps.
                </p>
              </>
            )}
            {i === 1 && (
              <>
                <h4 className="font-semibold mb-2 text-base">
                  Contributing to Late Diagnosis
                </h4>
                <p className="text-sm">
                  The outcome is a lengthy route to diagnosis even when children show up in time, creating a critical gap in the healthcare system.
                </p>
              </>
            )}
            {i === 2 && (
              <span className="text-lg font-bold">This is where Pedi-Tracker steps in.</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyItMatters;
