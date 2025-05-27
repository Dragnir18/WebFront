import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-neutral-300 mb-6">
              Votre partenaire de confiance pour toutes vos solutions informatiques professionnelles.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-secondary-500 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">
                  123 Avenue de la Technologie<br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-secondary-500 flex-shrink-0" />
                <span className="text-neutral-300">+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-secondary-500 flex-shrink-0" />
                <span className="text-neutral-300">contact@it-solutions.fr</span>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Produits & Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/hardware" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Hardware
                </Link>
              </li>
              <li>
                <Link to="/products/software" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Software
                </Link>
              </li>
              <li>
                <Link to="/products/networks" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Réseaux
                </Link>
              </li>
              <li>
                <Link to="/products/security" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Sécurité
                </Link>
              </li>
              <li>
                <Link to="/products/cloud" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Solutions Cloud
                </Link>
              </li>
              <li>
                <Link to="/products/storage" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Stockage & Sauvegarde
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/consulting" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Conseil IT
                </Link>
              </li>
              <li>
                <Link to="/services/integration" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Services d'intégration
                </Link>
              </li>
              <li>
                <Link to="/services/support" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Support technique
                </Link>
              </li>
              <li>
                <Link to="/services/maintenance" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Formation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/about/vision" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Vision 2030
                </Link>
              </li>
              <li>
                <Link to="/about/sustainability" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Développement durable
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Carrières
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-neutral-700 pt-8 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h4 className="text-lg font-medium mb-2">Inscrivez-vous à notre newsletter</h4>
              <p className="text-neutral-400 text-sm">
                Restez informé des dernières innovations et offres spéciales.
              </p>
            </div>
            <div>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="px-4 py-2 rounded-l-md w-full text-neutral-800 focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-secondary-500 hover:bg-secondary-600 px-4 py-2 rounded-r-md transition-colors focus:outline-none"
                >
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Social and copyright */}
        <div className="border-t border-neutral-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} IT Solutions. Tous droits réservés.
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-secondary-500 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-secondary-500 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-secondary-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-secondary-500 transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-secondary-500 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;