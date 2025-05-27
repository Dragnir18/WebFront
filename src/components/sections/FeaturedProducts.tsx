import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

const FeaturedProducts: React.FC = () => {
  // This would typically come from an API or database
  const products: Product[] = [
    {
      id: 'p1',
      name: 'ThinkPad X1 Carbon Gen 10',
      category: 'Ordinateurs portables',
      description: 'Ordinateur portable professionnel léger et puissant',
      price: 1599,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'p2',
      name: 'PowerEdge R740 Server',
      category: 'Serveurs',
      description: 'Serveur rack 2U pour les entreprises',
      price: 3299,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'p3',
      name: 'Microsoft 365 Business',
      category: 'Logiciels',
      description: 'Suite bureautique complète pour les entreprises',
      price: 12.50,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'p4',
      name: 'Firewall Sophos XGS 3300',
      category: 'Sécurité',
      description: 'Pare-feu nouvelle génération pour une protection complète',
      price: 2199,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold">Produits populaires</h2>
            <p className="text-neutral-600 mt-2">
              Découvrez notre sélection de produits les plus demandés.
            </p>
          </div>
          <Link 
            to="/products" 
            className="hidden md:inline-block bg-primary-50 text-primary-600 px-5 py-2 rounded-md font-medium hover:bg-primary-100 transition-colors"
          >
            Voir tous les produits
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="text-sm text-neutral-500 mb-1">{product.category}</div>
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary-500 transition-colors">{product.name}</h3>
                </Link>
                <p className="text-neutral-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${
                        i < Math.floor(product.rating) ? 'text-secondary-500' : 'text-neutral-300'
                      }`} 
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                  <span className="text-sm text-neutral-600 ml-1">({product.rating})</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold">{product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</div>
                  <button className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-md transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link 
            to="/products" 
            className="inline-block bg-primary-50 text-primary-600 px-5 py-2 rounded-md font-medium hover:bg-primary-100 transition-colors"
          >
            Voir tous les produits
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;