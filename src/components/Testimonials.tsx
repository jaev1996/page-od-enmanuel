import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: "El Dr. Graterol solucionó mi problema de caries en una sola sesión. ¡Increíble trato!",
    author: "María G. - Paciente",
  },
  {
    quote: "Nunca me había sentido tan cómoda en una consulta dental. 100% recomendado.",
    author: "Carlos R. - Paciente",
  },
  {
    quote: "Mis dientes lucen perfectos gracias al blanqueamiento que me realizaron.",
    author: "Ana S. - Paciente",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Lo que dicen nuestros pacientes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.10 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md"
            >
              <FaQuoteLeft className="text-teal-400 text-2xl mb-4" />
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-800 font-medium">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}