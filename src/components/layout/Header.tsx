import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';

interface HeaderProps {
  isScrolled: boolean;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, toggleMobileMenu, isMobileMenuOpen }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

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

  const handleMenuToggle = (menuTitle: string) => {
    if (activeMenu === menuTitle) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuTitle);
    }
  };

  const closeAllMenus = () => {
    setActiveMenu(null);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary-700 text-white py-2 px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm hidden md:block">
            <span>Support client: +33 (0)1 23 45 67 89</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <Link to="/login" className="hover:text-secondary-300 transition-colors flex items-center">
              <User size={16} className="mr-1" />
              <span className="hidden md:inline">Espace client</span>
            </Link>
            <div className="flex space-x-2">
              <button className="hover:text-secondary-300 transition-colors">FR</button>
              <span>|</span>
              <button className="hover:text-secondary-300 transition-colors">EN</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeAllMenus}>
            <Logo />
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  className="flex items-center text-neutral-800 hover:text-primary-500 font-medium transition-colors"
                  onClick={() => handleMenuToggle(item.title)}
                  onMouseEnter={() => item.submenu && setActiveMenu(item.title)}
                >
                  {item.title}
                  {item.submenu && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </button>
                
                {item.submenu && activeMenu === item.title && (
                  <div 
                    className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden z-50 animate-fade-in"
                    onMouseLeave={closeAllMenus}
                  >
                    {item.submenu.map((subitem) => (
                      <Link 
                        key={subitem.title}
                        to={subitem.path}
                        className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                        onClick={closeAllMenus}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <button className="text-neutral-700 hover:text-primary-500 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-neutral-700 hover:text-primary-500 transition-colors">
              <ShoppingCart size={20} />
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-neutral-700 hover:text-primary-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;