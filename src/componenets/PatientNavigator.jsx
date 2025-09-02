import { motion } from "framer-motion";

export default function PatientNavigator() {
  return (
    <section id="advantage" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h4
          className="text-3xl font-medium mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Advantage: Patient Navigators
        </motion.h4>

        <motion.p
          className="text-s text-gray-600 mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Navigating the Nigerian healthcare system can be overwhelming and
          fragmented, especially when dealing with a serious illness. For a sick
          child or their caregiver, this process is stressful, confusing, and
          often exhausting.
        </motion.p>

        <motion.div
          className="bg-[#612A65] text-white text-xl font-bold p-6 rounded-md max-w-3xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          That's why Pedi-Tracker integrates Patient Navigators to streamline
          communication and support.
          <motion.p
            className="text-sm font-base mt-3 text-purple-100"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            These trained guides help families move through the system with
            clarity, supporting referrals, coordinating follow-ups, and ensuring
            no child is lost between hospital benches and paperwork.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}