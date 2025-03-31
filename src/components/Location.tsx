import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaPhone, FaTooth } from "react-icons/fa";

export default function Location() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Nuestro Consultorio
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna izquierda - Información */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-6"
          >
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-teal-500" />
                Dirección
              </h3>
              <p className="text-gray-600">
                Avenida Francisco de Miranda, <br />
                Hospital Ana Francisca Pérez de León, <br />
                Caracas 1073, Distrito Capital
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaClock className="text-teal-500" />
                Horario
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Lunes-Viernes:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaPhone className="text-teal-500" />
                Contacto
              </h3>
              <p className="text-gray-600 mb-2">+58 412-3456789</p>
              <a 
                href="https://wa.me/584123456789" 
                className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm mt-2"
              >
                WhatsApp <FaPhone className="inline ml-1" />
              </a>
            </div>
          </motion.div>

          {/* Columna derecha - Mapa e imagen */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 space-y-6"
          >
            <div className="overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15693.33717802304!2d-66.81477310158463!3d10.474291234505573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8c2a5827c215f775%3A0xad9af672fddec77e!2sF5HR%2B73Q%20Hospital%20Ana%20Francisca%20P%C3%A9rez%20de%20Le%C3%B3n%2C%20Avenida%20Francisco%20de%20Miranda%2C%20Caracas%201073%2C%20Distrito%20Capital!3m2!1d10.4782131!2d-66.8097626!5e0!3m2!1ses!2sve!4v1743387734265!5m2!1ses!2sve"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Imagen genérica del consultorio */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Consultorio dental"
                className="w-full h-64 object-cover"
              />
              <div className="bg-teal-500 text-white p-4 text-center">
                <FaTooth className="inline-block text-xl mb-1" />
                <p className="font-medium">Ambiente moderno y equipamiento de última generación</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}