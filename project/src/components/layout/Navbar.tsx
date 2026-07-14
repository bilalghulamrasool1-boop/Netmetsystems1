import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyData } from '../../data/content';
import { cn } from '../../lib/utils';

const servicesByCategory = companyData.services.reduce((acc, service) => {
  if (!acc[service.category]) acc[service.category] = [];
  acc[service.category].push(service);
  return acc;
}, {} as Record<string, typeof companyData.services>);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasMegaMenu: true },
    { name: 'Industries', path: '/industries' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || activeDropdown ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      )}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 relative z-50">
            <img 
              src="/logo.png" 
              alt="Netmet Systems" 
              className={cn(
                "h-10 w-auto transition-all duration-300 object-contain",
                (isScrolled || activeDropdown) ? "" : "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 relative z-50">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onMouseEnter={() => link.hasMegaMenu ? setActiveDropdown(link.name) : setActiveDropdown(null)}
                className="py-2"
              >
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-medium hover:text-accent transition-colors flex items-center gap-1",
                    (isScrolled || activeDropdown) ? "text-gray-800" : "text-white"
                  )}
                >
                  {link.name}
                  {link.hasMegaMenu && <ChevronDown size={14} className="mt-0.5" />}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden relative z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn("p-2", (isScrolled || activeDropdown) ? "text-gray-800" : "text-white")}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {activeDropdown === 'Services' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto flex">
              {/* Left Column (Featured) */}
              <div className="w-1/3 bg-gray-50 p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Services</h3>
                <div className="rounded-lg overflow-hidden mb-6 h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" 
                    alt="Digital Excellence" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">Why digital transformation matters</h4>
                <Link to="/services" className="text-accent font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  EXPLORE ALL SERVICES <ArrowUpRight size={18} />
                </Link>
              </div>
              
              {/* Right Column (Links) */}
              <div className="w-2/3 p-10 grid grid-cols-3 gap-x-8 gap-y-10">
                {Object.entries(servicesByCategory).map(([category, services]) => (
                  <div key={category}>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">{category}</h5>
                    <ul className="space-y-3">
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link 
                            to={`/services/${service.id}`}
                            className="text-gray-600 hover:text-accent transition-colors flex items-center gap-2 group text-sm"
                          >
                            {service.title}
                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="block text-lg font-medium text-gray-900 py-2"
                  >
                    {link.name}
                  </Link>
                  {link.hasMegaMenu && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                       {companyData.services.map(s => (
                         <Link key={s.id} to={`/services/${s.id}`} className="block py-1 text-gray-600">
                           {s.title}
                         </Link>
                       ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
