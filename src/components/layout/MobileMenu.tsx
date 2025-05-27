import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const menuItems = [
    { 
      title: 'Produits & Solutions', 
      path: '/products',
      submenu: [
        { title: 'Hardware', path: '/products/hardware' },
        { title: 'Software', path: '/products/software' },
        { title: 'Réseaux', path: '/products/networks' },
        { title: 'Sécurité', path: '/products/security' },
        { title: 'Cloud', path: '/products/cloud' },
      ]
    },
    { 
      title: 'Services', 
      path: '/services',
      submenu: [
        { title: 'Conseil IT', path: '/services/consulting' },
        { title: 'Intégration', path: '/services/integration' },
        { title: 'Support', path: '/services/support' },
        { title: 'Maintenance', path: '/services/maintenance' },
      ]
    },
    { 
      title: 'Entreprise', 
      path: '/about',
      submenu: [
        { title: 'À propos', path: '/about' },
        { title: 'Vision 2030', path: '/about/vision' },
        { title: 'Développement durable', path: '/about/sustainability' },
      ]
    },
    { title: 'Actualités', path: '/news' },
    { title: 'Contact', path: '/contact' },
  ];

  const toggleMenu = (title: string) => {
    if (expandedMenus.includes(title)) {
      setExpandedMenus(expandedMenus.filter(menu => menu !== title));
    } else {
      setExpandedMenus([...expandedMenus, title]);
    }
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedMenus([]);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto pt-20 animate-fade-in">
      <div className="container mx-auto px-4 py-6">
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.title} className="border-b border-neutral-200 pb-2">
                <div className="flex items-center justify-between py-2">
                  {item.submenu ? (
                    <button 
                      className="text-lg font-medium text-neutral-800 hover:text-primary-500 transition-colors flex items-center justify-between w-full"
                      onClick={() => toggleMenu(item.title)}
                    >
                      {item.title}
                      {expandedMenus.includes(item.title) ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                  ) : (
                    <Link 
                      to={item.path}
                      className="text-lg font-medium text-neutral-800 hover:text-primary-500 transition-colors block w-full"
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
                
                {item.submenu && expandedMenus.includes(item.title) && (
                  <ul className="ml-4 mt-2 space-y-2 animate-slide-up">
                    {item.submenu.map((subitem) => (
                      <li key={subitem.title}>
                        <Link 
                          to={subitem.path}
                          className="text-neutral-600 hover:text-primary-500 transition-colors block py-2"
                          onClick={handleLinkClick}
                        >
                          {subitem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-8 pt-4 border-t border-neutral-200">
          <div className="flex items-center space-x-4 justify-center">
            <Link 
              to="/login"
              className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600 transition-colors"
              onClick={handleLinkClick}
            >
              Espace client
            </Link>
            <Link 
              to="/contact"
              className="bg-secondary-500 text-white px-6 py-2 rounded-md hover:bg-secondary-600 transition-colors"
              onClick={handleLinkClick}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;