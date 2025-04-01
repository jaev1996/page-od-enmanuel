import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaBars,
  FaHome,
  FaTeeth,
  FaUserMd,
  FaCalendarAlt,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaWhatsapp
} from 'react-icons/fa';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Botón Hamburguesa */}
      <button 
        onClick={toggleMenu}
        className="fixed top-2 right-4 z-50 p-2 text-gray-800"
        aria-label="Menú"
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>

      {/* Menú Lateral */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleMenu}
            />

            {/* Panel del menú */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut' }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-50"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-8">
                  <FaTeeth className="text-teal-500 text-2xl" />
                  <span className="font-bold text-lg">Dr. Enmanuel</span>
                </div>

                {/* Navegación */}
                <nav className="flex-1">
                  <ul className="space-y-4">
                    {[
                      { icon: <FaHome />, text: 'Inicio', href: '#inicio' },
                      { icon: <FaTeeth />, text: 'Servicios', href: '#servicios' },
                      { icon: <FaUserMd />, text: 'Sobre mí', href: '#sobre-mi' },
                      { icon: <FaCalendarAlt />, text: 'Citas', href: '#citas' },
                      { icon: <FaPhoneAlt />, text: 'Contacto', href: '#contacto' },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a
                          href={item.href}
                          onClick={toggleMenu}
                          className="flex items-center gap-3 p-3 text-gray-800 hover:bg-teal-50 rounded-lg transition-colors"
                        >
                          <span className="text-teal-500">{item.icon}</span>
                          <span>{item.text}</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Redes sociales */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-3">Síguenos:</p>
                  <div className="flex gap-4">
                    {[
                      { icon: <FaInstagram />, color: 'text-pink-600', href: '#' },
                      { icon: <FaFacebook />, color: 'text-blue-600', href: '#' },
                      { icon: <FaWhatsapp />, color: 'text-green-500', href: 'https://wa.me/584123456789' },
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ y: -3 }}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2xl ${item.color}`}
                      >
                        {item.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
