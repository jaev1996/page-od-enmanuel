import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaSmile, FaUniversity } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
      {/* Fondo animado con gradiente + partículas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-teal-400 via-indigo-500 to-purple-500 z-0"
      >
        
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge de especialidad */}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-white text-teal-500 px-4 py-1 rounded-full text-sm font-medium mb-6 shadow-md"
          >
            Nuevo Profesional · Tecnología de Vanguardia
          </motion.span>

          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="">
                Sonrisas saludables,
            </span><br />
            cuidados excepcionales.
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-900 mb-10 max-w-2xl mx-auto">
            Atención personalizada con los últimos avances en odontología. <br className="hidden sm:block" />
            ¡Tu primera consulta tiene un <strong className="text-teal-400">20% de descuento</strong>!
          </p>

          {/* CTA principal */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/584123456789?text=Hola,%20quiero%20una%20cita"
              className="bg-gradient-to-r from-teal-400 to-indigo-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <FaCalendarAlt className="inline mr-2" />
              Agendar cita ahora
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#servicios"
              className="bg-white text-gray-800 px-8 py-4 rounded-lg font-bold border-2 border-teal-400 hover:bg-teal-50 transition-all"
            >
              Conocer servicios
            </motion.a>
          </div>

          {/* Credenciales para recién graduado (reemplaza estadísticas) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-inner max-w-md mx-auto"
          >
            {[
              { 
                icon: <FaUniversity className="text-indigo-500 text-2xl" />, 
                text: "Graduado con Honores" 
              },
              { 
                icon: <FaAward className="text-teal-500 text-2xl" />, 
                text: "Técnicas Actualizadas" 
              },
              { 
                icon: <FaSmile className="text-indigo-500 text-2xl" />, 
                text: "Enfoque Preventivo" 
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-1">
                {item.icon}
                <span className="text-sm md:text-base font-bold text-gray-700">{item.text}</span>
              </div>
            ))}
          </motion.div>
        
        </motion.div>
      </div>

    </section>
  );
}