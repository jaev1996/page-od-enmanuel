import { motion } from "framer-motion";
import { FaTooth, FaTeeth, FaTeethOpen, FaSmile } from "react-icons/fa";

const services = [
  {
    icon: <FaTooth className="w-8 h-8" />,
    title: "Limpieza Dental",
    description: "Eliminación de placa y sarro para prevenir caries y enfermedades.",
  },
  {
    icon: <FaTeeth className="w-8 h-8" />,
    title: "Blanqueamiento",
    description: "Tratamiento indoloro para recuperar el brillo natural de tus dientes.",
  },
  {
    icon: <FaTeethOpen className="w-8 h-8" />,
    title: "Tratamiento de Caries",
    description: "Restauramos tus dientes con materiales de última generación.",
  },
  {
    icon: <FaSmile className="w-8 h-8" />,
    title: "Carillas Estéticas",
    description: "Mejora la forma y color de tus dientes en pocas sesiones.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.25 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-teal-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}