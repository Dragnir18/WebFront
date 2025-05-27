import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full"></div>
        <div className="absolute bottom-12 -left-24 w-64 h-64 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Solutions IT <span className="text-secondary-400">innovantes</span> pour votre entreprise
            </h1>
            <p className="text-lg text-primary-100 mb-8 max-w-lg">
              Transformez votre infrastructure informatique avec nos solutions complètes et personnalisées pour répondre aux défis d'aujourd'hui et de demain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
              >
                Découvrir nos solutions <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border border-white hover:bg-primary-800 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-secondary-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden p-2 transform rotate-3 animate-fade-in">
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Modern IT infrastructure" 
                className="w-full h-auto rounded"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-xl overflow-hidden p-2 transform -rotate-6 animate-fade-in animation-delay-200 w-48">
              <img 
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Server infrastructure" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Features bar */}
      <div className="bg-white py-4 border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="text-neutral-800">
              <span className="font-semibold">+5000</span>
              <p className="text-sm text-neutral-600">Clients satisfaits</p>
            </div>
            <div className="text-neutral-800">
              <span className="font-semibold">24/7</span>
              <p className="text-sm text-neutral-600">Support technique</p>
            </div>
            <div className="text-neutral-800">
              <span className="font-semibold">+50 000</span>
              <p className="text-sm text-neutral-600">Produits disponibles</p>
            </div>
            <div className="text-neutral-800">
              <span className="font-semibold">98%</span>
              <p className="text-sm text-neutral-600">Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;