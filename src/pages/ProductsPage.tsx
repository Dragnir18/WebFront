import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X, ShoppingCart, ChevronDown, Search } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

const ProductsPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // This would typically come from an API or database
  const products: Product[] = [
    {
      id: 'p1',
      name: 'ThinkPad X1 Carbon Gen 10',
      category: 'laptops',
      description: 'Ordinateur portable professionnel léger et puissant',
      price: 1599,
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'p2',
      name: 'PowerEdge R740 Server',
      category: 'servers',
      description: 'Serveur rack 2U pour les entreprises',
      price: 3299,
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'p3',
      name: 'Microsoft 365 Business',
      category: 'software',
      description: 'Suite bureautique complète pour les entreprises',
      price: 12.50,
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'p4',
      name: 'Firewall Sophos XGS 3300',
      category: 'security',
      description: 'Pare-feu nouvelle génération pour une protection complète',
      price: 2199,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'p5',
      name: 'Moniteur Dell UltraSharp 27"',
      category: 'monitors',
      description: 'Écran professionnel 4K avec une précision des couleurs exceptionnelle',
      price: 549,
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'p6',
      name: 'Cisco Catalyst 9300 Switch',
      category: 'networking',
      description: 'Switch géré de niveau entreprise pour réseaux évolutifs',
      price: 3899,
      image: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'p7',
      name: 'Adobe Creative Cloud',
      category: 'software',
      description: 'Suite complète d\'applications créatives pour entreprises',
      price: 59.99,
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'p8',
      name: 'SSD Samsung 980 Pro 1TB',
      category: 'storage',
      description: 'Disque SSD NVMe hautes performances pour stations de travail',
      price: 179,
      image: 'https://images.pexels.com/photos/4195326/pexels-photo-4195326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];

  const categories = [
    { id: 'all', name: 'Toutes les catégories' },
    { id: 'laptops', name: 'Ordinateurs portables' },
    { id: 'servers', name: 'Serveurs' },
    { id: 'networking', name: 'Réseaux' },
    { id: 'security', name: 'Sécurité' },
    { id: 'software', name: 'Logiciels' },
    { id: 'monitors', name: 'Écrans' },
    { id: 'storage', name: 'Stockage' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      {/* Hero section */}
      <section className="bg-primary-700 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Produits & Solutions</h1>
            <p className="text-lg text-primary-100">
              Découvrez notre gamme complète de solutions informatiques pour répondre à tous vos besoins professionnels.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and filters */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Search */}
            <div className="w-full md:w-auto flex-grow md:max-w-md">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Rechercher un produit..." 
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-neutral-400" size={18} />
              </div>
            </div>
            
            {/* Filters toggle */}
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center bg-primary-50 text-primary-600 px-4 py-2 rounded-md hover:bg-primary-100 transition-colors"
              >
                {showFilters ? <X size={18} className="mr-2" /> : <Filter size={18} className="mr-2" />}
                {showFilters ? 'Masquer les filtres' : 'Filtres'}
              </button>
              
              <div className="relative">
                <button className="flex items-center bg-white border border-neutral-300 text-neutral-700 px-4 py-2 rounded-md hover:bg-neutral-50 transition-colors">
                  Trier par <ChevronDown size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Expanded filters */}
          {showFilters && (
            <div className="mt-6 p-4 bg-neutral-50 rounded-md animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-3">Catégories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center">
                        <input 
                          type="radio" 
                          id={`cat-${category.id}`}
                          name="category"
                          checked={selectedCategory === category.id}
                          onChange={() => setSelectedCategory(category.id)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                        />
                        <label htmlFor={`cat-${category.id}`} className="ml-2 text-sm text-neutral-700">
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price range */}
                <div>
                  <h3 className="font-medium mb-3">Prix</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="price-1"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="price-1" className="ml-2 text-sm text-neutral-700">
                        Moins de 100 €
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="price-2"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="price-2" className="ml-2 text-sm text-neutral-700">
                        100 € - 500 €
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="price-3"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="price-3" className="ml-2 text-sm text-neutral-700">
                        500 € - 1000 €
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="price-4"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="price-4" className="ml-2 text-sm text-neutral-700">
                        Plus de 1000 €
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Brands */}
                <div>
                  <h3 className="font-medium mb-3">Marques</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="brand-1"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="brand-1" className="ml-2 text-sm text-neutral-700">
                        Dell
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="brand-2"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="brand-2" className="ml-2 text-sm text-neutral-700">
                        HP
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="brand-3"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="brand-3" className="ml-2 text-sm text-neutral-700">
                        Lenovo
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="brand-4"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="brand-4" className="ml-2 text-sm text-neutral-700">
                        Cisco
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="brand-5"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="brand-5" className="ml-2 text-sm text-neutral-700">
                        Microsoft
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Availability */}
                <div>
                  <h3 className="font-medium mb-3">Disponibilité</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="avail-1"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="avail-1" className="ml-2 text-sm text-neutral-700">
                        En stock
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="avail-2"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="avail-2" className="ml-2 text-sm text-neutral-700">
                        Livraison sous 24h
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="avail-3"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="avail-3" className="ml-2 text-sm text-neutral-700">
                        Nouveautés
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="avail-4"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                      <label htmlFor="avail-4" className="ml-2 text-sm text-neutral-700">
                        Promotions
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-4">
                <button className="text-neutral-600 hover:text-neutral-800 transition-colors">
                  Réinitialiser
                </button>
                <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                  Appliquer les filtres
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Products grid */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {selectedCategory === 'all' ? 'Tous les produits' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-neutral-600">{filteredProducts.length} produits</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary-300"
              >
                <Link to={`/products/${product.id}`} className="block">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <div className="text-sm text-neutral-500 mb-1">{categories.find(c => c.id === product.category)?.name}</div>
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-lg font-semibold mb-2 hover:text-primary-500 transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-neutral-600 text-sm mb-3 line-clamp-2">{product.description}</p>
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
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">
                Précédent
              </button>
              <button className="px-3 py-2 rounded-md bg-primary-600 text-white">1</button>
              <button className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">2</button>
              <button className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">3</button>
              <span className="px-3 py-2">...</span>
              <button className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">10</button>
              <button className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">
                Suivant
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;