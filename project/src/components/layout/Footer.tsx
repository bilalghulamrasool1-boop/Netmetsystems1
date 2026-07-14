import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { companyData } from '../../data/content';

export default function Footer() {
  return (
    <footer className="bg-brand-gradient text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/logo.png" 
                alt="Netmet Systems Logo" 
                className="h-10 w-auto brightness-0 invert object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              {companyData.heroDescription}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {companyData.services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                    {service.title}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">All Services</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white transition-colors text-sm">Industries We Serve</Link></li>
              <li><Link to="/insights" className="text-gray-400 hover:text-white transition-colors text-sm">Insights & News</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>contact@netmetsystems.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Boulevard, Suite 400<br/>San Francisco, CA 94105<br/>United States</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
