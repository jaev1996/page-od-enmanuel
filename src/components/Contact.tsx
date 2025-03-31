import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Contacto
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">¡Agenda tu cita!</h3>
            <p className="text-gray-600 mb-6">
              Estamos aquí para responder tus preguntas y brindarte la mejor atención.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/584123456789?text=Hola,%20quiero%20una%20cita"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium mb-8"
            >
              <FaWhatsapp className="text-xl" />
              Envíanos un WhatsApp
            </motion.a>
            <div className="space-y-2">
              <p className="text-gray-800"><strong>Teléfono:</strong> +58 412-3456789</p>
              <p className="text-gray-800"><strong>Email:</strong> contacto@drenmanuel.com</p>
              <p className="text-gray-800"><strong>Dirección:</strong> Av. Principal, Caracas, Venezuela</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-indigo-600 hover:text-teal-400 text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-indigo-600 hover:text-teal-400 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-indigo-600 hover:text-teal-400 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-indigo-600 hover:text-teal-400 text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}