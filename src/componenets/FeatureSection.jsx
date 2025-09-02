import { motion } from "framer-motion";
import { FaUserShield, FaPeopleArrows, FaChild } from "react-icons/fa";

const features = [
  {
    icon: <FaUserShield />,
    title: "Clear Guidance",
    description: "Simplifying complex healthcare processes for families in need",
  },
  {
    icon: <FaPeopleArrows />,
    title: "Coordinated Care",
    description: "Ensuring seamless communication between healthcare providers",
  },
  {
    icon: <FaChild />,
    title: "No Child Left Behind",
    description: "Tracking every case to ensure proper follow-up and care",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-[#612A65] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Animated Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Features
        </motion.h2>

        {/* Animated Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-[#F4BC2C] text-black rounded-lg p-6 shadow-md flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4 text-purple-800">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm leading-snug">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated Quote Box */}
        <motion.div
          className="bg-white text-black py-6 px-8 rounded-lg shadow-md max-w-2xl text-center border-2 border-yellow-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-semibold">
            They are not just a feature, they are our unique value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
