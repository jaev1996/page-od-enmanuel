import { motion } from "framer-motion";
import { FaWhatsapp, FaCalendarAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-6"
        >
          ¿Listo para tu consulta?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Contáctanos para agendar una cita o resolver tus dudas
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-white p-8 rounded-xl shadow-lg"
        >
        <h3 className="text-2xl font-bold text-gray-800 mb-6">¿Tienes dudas?</h3>
        
        <div className="space-y-4">
            {[
            {
                question: "¿Cuál es el costo de una consulta inicial?",
                answer: "La primera consulta tiene un 20% de descuento (Bs. 50 en lugar de Bs. 60)."
            },
            {
                question: "¿Aceptan seguros médicos?",
                answer: "Sí, trabajamos con las principales aseguradoras del país."
            },
            {
                question: "¿Cómo prepararme para mi cita?",
                answer: "Llega 10 minutos antes y trae tus exámenes médicos recientes si los tienes."
            }
            ].map((item, index) => (
            <div key={index} className="border-b border-gray-100 pb-4">
                <button 
                className="flex justify-between items-center w-full text-left font-medium text-gray-800"
                onClick={(e) => e.currentTarget.nextElementSibling?.classList.toggle('hidden')}
                >
                <span>{item.question}</span>
                <FaChevronDown className="text-teal-500 transition-transform" />
                </button>
                <p className="mt-2 text-gray-600 hidden">{item.answer}</p>
            </div>
            ))}
        </div>

  <div className="mt-6 bg-teal-50 p-4 rounded-lg text-center">
    <p className="text-gray-700 mb-2">¿No encontraste tu respuesta?</p>
    <a 
      href="tel:+584123456789" 
      className="inline-flex items-center gap-2 text-teal-600 font-medium"
    >
      <FaPhone /> Llámanos directamente
    </a>
  </div>
</motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Formas de contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaWhatsapp className="text-2xl text-green-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">WhatsApp</h4>
                    <p className="text-gray-600">+58 412-3456789</p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="https://wa.me/584123456789"
                      className="inline-block mt-2 text-sm bg-green-500 text-white px-4 py-2 rounded-lg"
                    >
                      Enviar mensaje directo
                    </motion.a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                  <FaPhone className="text-2xl text-teal-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Llámanos</h4>
                    <p className="text-gray-600">+58 212-1234567</p>
                    <p className="text-sm text-gray-500">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                  <FaEnvelope className="text-2xl text-indigo-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Correo electrónico</h4>
                    <p className="text-gray-600">contacto@drenmanuel.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                  <FaMapMarkerAlt className="text-2xl text-red-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Dirección</h4>
                    <p className="text-gray-600">Av. Francisco de Miranda, Hospital Ana Francisca Pérez de León, Caracas</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-teal-500 text-white p-6 rounded-xl shadow-lg text-center"
            >
              <FaCalendarAlt className="text-3xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">¿Primera consulta?</h4>
              <p className="mb-4">¡Obtén un 20% de descuento en tu primera visita!</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="inline-block bg-white text-teal-500 px-6 py-2 rounded-lg font-medium"
              >
                Agendar ahora
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}