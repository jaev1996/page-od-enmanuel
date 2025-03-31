import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img 
            src="/images/od.jpg" // Ruta desde la carpeta public
            alt="Od. Enmanuel Graterol"
            className="rounded-xl shadow-lg w-full h-auto object-cover aspect-square md:aspect-video border-4 border-white hover:border-teal-100 transition-all duration-300"
        />

        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre Mí</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Soy el <strong className="text-teal-500">Od. Enmanuel Graterol</strong>, graduado con honores de la Universidad Santa Maria. 
            Especializado en tratamientos mínimamente invasivos y tecnología digital.
        </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contacto"
            className="inline-block bg-teal-400 text-white px-6 py-2 rounded-lg font-medium"
          >
            Conoce más
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}