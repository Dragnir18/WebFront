import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, Check, AlertCircle, ArrowLeft } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  
  // This would typically come from an API fetch using the productId
  const product = {
    id: productId,
    name: 'ThinkPad X1 Carbon Gen 10',
    category: 'Ordinateurs portables',
    description: 'Ordinateur portable professionnel léger et puissant',
    longDescription: `Le ThinkPad X1 Carbon Gen 10 est conçu pour les professionnels exigeants. Ultra-léger avec ses 1,12 kg et fin avec ses 14,9 mm d'épaisseur, il offre néanmoins une puissance exceptionnelle grâce à son processeur Intel Core i7 de 12e génération et ses 16 Go de RAM. Son écran WUXGA 14" à faible consommation d'énergie offre une luminosité de 400 nits et une couverture sRGB à 100 %.
    
    Bénéficiez d'une autonomie impressionnante allant jusqu'à 14 heures et d'une recharge rapide qui vous donne 80% de batterie en seulement une heure. La connectivité complète comprend Thunderbolt 4, USB-A, HDMI et un lecteur de carte RFID en option.
    
    Sa conception durable répond aux normes militaires (MIL-STD-810H) tout en utilisant des matériaux recyclés et en offrant une certification Energy Star.`,
    specifications: [
      { name: 'Processeur', value: 'Intel Core i7-1260P 12e génération' },
      { name: 'Mémoire', value: '16 Go LPDDR5-5200MHz (soudée)' },
      { name: 'Stockage', value: 'SSD 512 Go PCIe Gen4' },
      { name: 'Écran', value: '14" WUXGA (1920 x 1200), IPS, antireflet, 400 nits' },
      { name: 'Carte graphique', value: 'Intel Iris Xe Graphics' },
      { name: 'Connectivité', value: 'Wi-Fi 6E, Bluetooth 5.2' },
      { name: 'Ports', value: '2x Thunderbolt 4, 2x USB-A 3.2, HDMI 2.0, combo audio' },
      { name: 'Batterie', value: '57 Wh, jusqu\'à 14 heures' },
      { name: 'Dimensions', value: '315.6 x 222.5 x 14.95 mm' },
      { name: 'Poids', value: '1.12 kg' },
      { name: 'Système d\'exploitation', value: 'Windows 11 Pro 64-bit' },
    ],
    price: 1599,
    oldPrice: 1799,
    rating: 4.8,
    reviewCount: 124,
    stock: 15,
    images: [
      'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    relatedProducts: [
      {
        id: 'related1',
        name: 'Dell XPS 13',
        price: 1499,
        image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 'related2',
        name: 'MacBook Pro 14"',
        price: 1999,
        image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 'related3',
        name: 'HP EliteBook 840',
        price: 1399,
        image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Produit non trouvé</h2>
        <p className="mb-8">Le produit que vous recherchez n'existe pas ou a été supprimé.</p>
        <Link 
          to="/products" 
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" /> Retour aux produits
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4 border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="text-sm">
            <ol className="flex flex-wrap items-center">
              <li className="flex items-center">
                <Link to="/" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Accueil
                </Link>
                <span className="mx-2 text-neutral-400">/</span>
              </li>
              <li className="flex items-center">
                <Link to="/products" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Produits
                </Link>
                <span className="mx-2 text-neutral-400">/</span>
              </li>
              <li className="flex items-center">
                <Link to={`/products?category=${product.category}`} className="text-neutral-600 hover:text-primary-600 transition-colors">
                  {product.category}
                </Link>
                <span className="mx-2 text-neutral-400">/</span>
              </li>
              <li className="text-neutral-800 font-medium truncate">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Product detail */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product images */}
            <div>
              <div className="mb-4 rounded-lg overflow-hidden border border-neutral-200">
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button 
                    key={index} 
                    className={`rounded-lg overflow-hidden border ${mainImage === image ? 'border-primary-500' : 'border-neutral-200'} hover:border-primary-500 transition-colors`}
                    onClick={() => setMainImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - vue ${index + 1}`} 
                      className="w-full h-auto object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-secondary-500 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(product.rating) ? 'text-secondary-500' : 'text-neutral-300'} 
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <span className="text-neutral-600">{product.rating} ({product.reviewCount} avis)</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-primary-700">
                    {product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                  </span>
                  {product.oldPrice && (
                    <span className="ml-3 text-lg text-neutral-500 line-through">
                      {product.oldPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                    </span>
                  )}
                </div>
                <div className="text-sm text-neutral-600 mt-1">
                  Prix HT : {(product.price / 1.2).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-neutral-700">
                  {product.description}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  {product.stock > 0 ? (
                    <div className="flex items-center text-success-500">
                      <Check size={16} className="mr-1" />
                      <span>En stock</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-error-500">
                      <AlertCircle size={16} className="mr-1" />
                      <span>Rupture de stock</span>
                    </div>
                  )}
                  {product.stock > 0 && product.stock <= 5 && (
                    <span className="ml-2 text-sm text-warning-500">
                      (Plus que {product.stock} disponibles)
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-neutral-300 rounded-md">
                    <button 
                      className="px-3 py-2 border-r border-neutral-300 hover:bg-neutral-100 transition-colors"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      max={product.stock} 
                      value={quantity} 
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      className="w-16 text-center px-3 py-2 focus:outline-none"
                    />
                    <button 
                      className="px-3 py-2 border-l border-neutral-300 hover:bg-neutral-100 transition-colors"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                  
                  <button className="flex-grow bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center">
                    <ShoppingCart size={18} className="mr-2" />
                    Ajouter au panier
                  </button>
                </div>
                
                <div className="flex mt-4 space-x-4">
                  <button className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors">
                    <Heart size={18} className="mr-2" />
                    Ajouter aux favoris
                  </button>
                  
                  <button className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors">
                    <Share2 size={18} className="mr-2" />
                    Partager
                  </button>
                </div>
              </div>
              
              <div className="border-t border-neutral-200 pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-2 flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Livraison gratuite à partir de 500 €</span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-2 flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Expédition sous 24h</span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-2 flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Garantie 3 ans</span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-2 flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Support technique dédié</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product tabs */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="border-b border-neutral-200 mb-8">
            <div className="flex flex-wrap -mb-px">
              <button 
                className={`mr-8 py-4 border-b-2 font-medium text-sm ${
                  activeTab === 'description' 
                    ? 'border-primary-600 text-primary-600' 
                    : 'border-transparent text-neutral-600 hover:text-neutral-800 hover:border-neutral-300'
                } transition-colors`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              
              <button 
                className={`mr-8 py-4 border-b-2 font-medium text-sm ${
                  activeTab === 'specifications' 
                    ? 'border-primary-600 text-primary-600' 
                    : 'border-transparent text-neutral-600 hover:text-neutral-800 hover:border-neutral-300'
                } transition-colors`}
                onClick={() => setActiveTab('specifications')}
              >
                Caractéristiques
              </button>
              
              <button 
                className={`mr-8 py-4 border-b-2 font-medium text-sm ${
                  activeTab === 'reviews' 
                    ? 'border-primary-600 text-primary-600' 
                    : 'border-transparent text-neutral-600 hover:text-neutral-800 hover:border-neutral-300'
                } transition-colors`}
                onClick={() => setActiveTab('reviews')}
              >
                Avis ({product.reviewCount})
              </button>
            </div>
          </div>
          
          <div className="pb-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="whitespace-pre-line">{product.longDescription}</p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <table className="w-full">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-neutral-50' : ''}>
                        <td className="py-3 px-4 font-medium">{spec.name}</td>
                        <td className="py-3 px-4">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Avis clients</h3>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="text-5xl font-bold text-primary-700">{product.rating}</div>
                      <div className="flex text-secondary-500 my-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < Math.floor(product.rating) ? 'text-secondary-500' : 'text-neutral-300'} 
                            fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-neutral-500">{product.reviewCount} avis</div>
                    </div>
                    
                    <div className="flex-grow max-w-md">
                      {/* Rating bars */}
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="text-sm text-neutral-600 w-8">5★</span>
                          <div className="flex-grow h-2 bg-neutral-200 rounded-full overflow-hidden">
                            <div className="bg-secondary-500 h-full rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <span className="text-sm text-neutral-600 w-8 text-right">70%</span>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-sm text-neutral-600 w-8">4★</span>
                          <div className="flex-grow h-2 bg-neutral-200 rounded-full overflow-hidden">
                            <div className="bg-secondary-500 h-full rounded-full" style={{ width: '20%' }}></div>
                          </div>
                          <span className="text-sm text-neutral-600 w-8 text-right">20%</span>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-sm text-neutral-600 w-8">3★</span>
                          <div className="flex-grow h-2 bg-neutral-200 rounded-full overflow-hidden">
                            <div className="bg-secondary-500 h-full rounded-full" style={{ width: '7%' }}></div>
                          </div>
                          <span className="text-sm text-neutral-600 w-8 text-right">7%</span>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-sm text-neutral-600 w-8">2★</span>
                          <div className="flex-grow h-2 bg-neutral-200 rounded-full overflow-hidden">
                            <div className="bg-secondary-500 h-full rounded-full" style={{ width: '2%' }}></div>
                          </div>
                          <span className="text-sm text-neutral-600 w-8 text-right">2%</span>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-sm text-neutral-600 w-8">1★</span>
                          <div className="flex-grow h-2 bg-neutral-200 rounded-full overflow-hidden">
                            <div className="bg-secondary-500 h-full rounded-full" style={{ width: '1%' }}></div>
                          </div>
                          <span className="text-sm text-neutral-600 w-8 text-right">1%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-8">
                      <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                        Écrire un avis
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Sample reviews */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Julien D.</div>
                      <div className="text-neutral-500 text-sm">Il y a 2 semaines</div>
                    </div>
                    <div className="flex text-secondary-500 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <h4 className="font-medium mb-2">Excellent ordinateur portable professionnel</h4>
                    <p className="text-neutral-600">
                      Cet ordinateur est exactement ce dont j'avais besoin pour mon travail. Il est léger, rapide et l'autonomie de la batterie est impressionnante. L'écran est également de très bonne qualité. Je recommande vivement ce modèle.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Sophie M.</div>
                      <div className="text-neutral-500 text-sm">Il y a 1 mois</div>
                    </div>
                    <div className="flex text-secondary-500 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < 4 ? 'currentColor' : 'none'} className={i < 4 ? 'text-secondary-500' : 'text-neutral-300'} />
                      ))}
                    </div>
                    <h4 className="font-medium mb-2">Très satisfaite de mon achat</h4>
                    <p className="text-neutral-600">
                      Je suis très satisfaite de cet ordinateur portable. Il est rapide et répond parfaitement à mes besoins professionnels. Le seul petit bémol concerne le bruit des ventilateurs qui peut parfois être un peu gênant lors d'utilisations intensives.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-6 py-3 rounded-md font-medium transition-colors">
                    Voir tous les avis
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related products */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Produits similaires</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <div 
                key={relatedProduct.id} 
                className="bg-white rounded-lg border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary-300"
              >
                <Link to={`/products/${relatedProduct.id}`} className="block">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <Link to={`/products/${relatedProduct.id}`}>
                    <h3 className="text-lg font-semibold mb-2 hover:text-primary-500 transition-colors">{relatedProduct.name}</h3>
                  </Link>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">{relatedProduct.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</div>
                    <button className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-md transition-colors">
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;