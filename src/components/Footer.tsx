import { motion } from "framer-motion";
import { FaTooth, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-12 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaTooth className="text-2xl text-teal-400" />
              <span className="text-xl font-bold">Od. Enmanuel Graterol</span>
            </div>
            <p className="text-gray-400">
              Odontología moderna con enfoque humano y tecnología de vanguardia.
            </p>
          </div>

          {/* Contacto rápido */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <FaPhone className="text-teal-400" />
                +58 412-3456789
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-teal-400" />
                Av. Francisco de Miranda
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-teal-400" />
                Lun-Vie: 8AM - 5PM
              </li>
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#servicios" className="hover:text-teal-400 transition-colors">Servicios</a></li>
              <li><a href="#sobre-mi" className="hover:text-teal-400 transition-colors">Sobre mí</a></li>
              <li><a href="#contacto" className="hover:text-teal-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-teal-400 text-xl transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-xl transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-xl transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-xl transition-colors">
                <FaLinkedin />
              </a>
            </div>
            <p className="text-gray-400">
              Suscríbete para recibir promociones especiales.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Od. Enmanuel Graterol. Todos los derechos reservados.</p>
          <p className="mt-2">Diseñado con ❤️ por Jaev</p>
        </div>
      </div>
    </motion.footer>
  );
}