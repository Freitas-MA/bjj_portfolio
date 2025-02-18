import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HandHelping as YinYang } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/classes', label: 'Aulas' },
    { href: '/instructors', label: 'Instrutores' },
    { href: '/dojos', label: 'Dojos' },
    { href: '/schedule', label: 'Horários' },
    { href: '/contact', label: 'Contato' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <YinYang className="w-32 h-32" />
            <span className="text-xl font-montserrat font-bold"> BJJ</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className={`font-medium transition-colors hover:text-gray-900 ${
                  isActive(href) ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
          type='button'
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    to={href}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isActive(href)
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}