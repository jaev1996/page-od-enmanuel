import { motion } from 'framer-motion'
import { FaTooth } from 'react-icons/fa'

export default function Header() {
  return (
    <motion.header 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed w-full bg-white/80 backdrop-blur-md py-3 px-6 z-50 shadow-sm"
    >
    <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
        <FaTooth className="text-2xl text-teal-500" /> {/* Ícono nuevo */}
        <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-indigo-600 bg-clip-text text-transparent">
            Od. Enmanuel Graterol
        </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
        {["Servicios", "Sobre mi", "Contacto"].map((item) => (
            <a 
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="relative text-gray-700 font-bold hover:text-teal-500 transition-colors group"
            >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
        ))}
        <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contacto"
            className="bg-gradient-to-r from-teal-400 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-md"
        >
            Agenda tu cita
        </motion.a>
        </nav>
    </div>
    </motion.header>
  )
}