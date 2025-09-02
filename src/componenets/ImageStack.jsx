import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";


const images = [image2, image3, image4, image5, image6, image7, image8];
const pageSize = 6;

export default function ImageStack() {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(images.length / pageSize);
  const currentImages = images.slice(page * pageSize, (page + 1) * pageSize);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % pageCount);
    }, 30000);
    return () => clearInterval(interval);
  }, [pageCount]);

  return (
    <section className="bg-white py-16 px-4">
      {/* Title */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-gray-800 font-bold text-xl md:text-2xl mb-2">
          Hospital Gallery
        </h2>
        <div className="flex justify-center items-center gap-3 text-[#F4BC2C] text-2xl md:text-3xl font-bold">
          <FaHeart />
          <span>Children are gold</span>
          <FaHeart />
        </div>
      </motion.div>

      {/* Image grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentImages.map((image, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt={`gallery-${idx}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: pageCount }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === page ? "bg-blue-600 scale-110" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
