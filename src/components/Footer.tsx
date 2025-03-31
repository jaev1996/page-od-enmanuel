import { motion } from "framer-motion";
import { FaTooth } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-800 text-white py-12 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <FaTooth className="text-2xl text-teal-500" /> {/* Ícono nuevo */}
            <span className="text-xl font-bold text-white">Od. Enmanuel Graterol</span>
          </div>
          <p className="text-gray-300 text-center md:text-right">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}