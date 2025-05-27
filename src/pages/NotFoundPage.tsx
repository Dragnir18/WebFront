import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4 py-16">
        <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-neutral-800 mb-6">Page non trouvée</h2>
        <p className="text-neutral-600 max-w-md mx-auto mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
          >
            <Home size={18} className="mr-2" /> Retour à l'accueil
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
          >
            <ArrowLeft size={18} className="mr-2" /> Page précédente
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;