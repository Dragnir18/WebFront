import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Server, Shield, Cloud, Clock, Gift, ArrowRight } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import TestimonialSection from '../components/sections/TestimonialSection';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos solutions informatiques</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de solutions informatiques pour répondre à tous vos besoins professionnels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Infrastructure */}
            <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200 transition-all duration-300 hover:shadow-lg hover:border-primary-300">
              <div className="mb-4 text-primary-500">
                <Server size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Infrastructure IT</h3>
              <p className="text-neutral-600 mb-4">
                Serveurs, stockage, réseau, virtualisation... Construisez une infrastructure fiable et performante.
              </p>
              <Link to="/products/infrastructure" className="flex items-center text-primary-500 hover:text-primary-600 font-medium">
                Découvrir <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Sécurité */}
            <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200 transition-all duration-300 hover:shadow-lg hover:border-primary-300">
              <div className="mb-4 text-primary-500">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sécurité & Protection</h3>
              <p className="text-neutral-600 mb-4">
                Solutions de cybersécurité complètes pour protéger vos données et votre infrastructure contre toutes les menaces.
              </p>
              <Link to="/products/security" className="flex items-center text-primary-500 hover:text-primary-600 font-medium">
                Découvrir <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Cloud */}
            <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200 transition-all duration-300 hover:shadow-lg hover:border-primary-300">
              <div className="mb-4 text-primary-500">
                <Cloud size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Solutions Cloud</h3>
              <p className="text-neutral-600 mb-4">
                Profitez de la flexibilité et de l'évolutivité des solutions cloud pour votre entreprise.
              </p>
              <Link to="/products/cloud" className="flex items-center text-primary-500 hover:text-primary-600 font-medium">
                Découvrir <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why choose us */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Nos clients nous font confiance pour notre expertise, notre réactivité et notre engagement à fournir des solutions adaptées à leurs besoins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Expertise */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expertise</h3>
              <p className="text-neutral-600">
                Plus de 20 ans d'expérience dans le secteur IT et une équipe de consultants certifiés.
              </p>
            </div>
            
            {/* Support 24/7 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Support 24/7</h3>
              <p className="text-neutral-600">
                Une assistance technique disponible 24h/24 et 7j/7 pour répondre à toutes vos urgences.
              </p>
            </div>
            
            {/* Solutions personnalisées */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Solutions sur mesure</h3>
              <p className="text-neutral-600">
                Des solutions adaptées à vos besoins spécifiques et à votre secteur d'activité.
              </p>
            </div>
            
            {/* Offres spéciales */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mb-4">
                <Gift size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Offres spéciales</h3>
              <p className="text-neutral-600">
                Des promotions exclusives et des tarifs préférentiels pour nos clients fidèles.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Testimonials */}
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre infrastructure IT ?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-primary-100">
            Contactez nos experts dès aujourd'hui pour une consultation personnalisée et découvrez comment nos solutions peuvent répondre à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-primary-600 px-6 py-3 rounded-md font-medium hover:bg-neutral-100 transition-colors inline-flex items-center justify-center"
            >
              Contactez-nous
            </Link>
            <Link 
              to="/products" 
              className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
            >
              Découvrir nos produits <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;