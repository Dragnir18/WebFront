import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Search, ArrowRight } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const NewsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // This would typically come from an API or database
  const articles: NewsArticle[] = [
    {
      id: 'a1',
      title: 'Les tendances technologiques à surveiller en 2025',
      excerpt: 'Découvrez les innovations technologiques qui transformeront le paysage IT dans les années à venir et comment les entreprises peuvent s\'y préparer.',
      date: '15 juillet 2025',
      author: 'Thomas Martin',
      category: 'Tendances',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'a2',
      title: 'Sécurité informatique : les menaces émergentes',
      excerpt: 'Analyse des nouvelles menaces de cybersécurité et des stratégies à mettre en place pour protéger efficacement les systèmes d\'information de votre entreprise.',
      date: '28 juin 2025',
      author: 'Sophie Dubois',
      category: 'Sécurité',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'a3',
      title: 'Migration vers le cloud : retours d\'expérience',
      excerpt: 'Témoignages de nos clients ayant réalisé leur transition vers le cloud et analyse des bénéfices constatés en termes de performances et de coûts.',
      date: '12 juin 2025',
      author: 'Marc Lefevre',
      category: 'Cloud',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'a4',
      title: 'IA et automatisation : révolution dans le secteur IT',
      excerpt: 'Comment l\'intelligence artificielle et l\'automatisation transforment les métiers de l\'IT et créent de nouvelles opportunités pour les entreprises.',
      date: '5 juin 2025',
      author: 'Julie Moreau',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'a5',
      title: 'Développement durable : l\'IT vert en action',
      excerpt: 'Les pratiques et technologies permettant de réduire l\'empreinte environnementale des infrastructures informatiques tout en optimisant les performances.',
      date: '27 mai 2025',
      author: 'Pierre Durand',
      category: 'RSE',
      image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'a6',
      title: 'Infrastructure as Code : simplifier la gestion IT',
      excerpt: 'Les avantages de l\'approche Infrastructure as Code (IaC) pour automatiser et sécuriser le déploiement et la gestion des infrastructures.',
      date: '15 mai 2025',
      author: 'Nicolas Bernard',
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const categories = [
    { id: 'all', name: 'Toutes les catégories' },
    { id: 'Tendances', name: 'Tendances' },
    { id: 'Sécurité', name: 'Sécurité' },
    { id: 'Cloud', name: 'Cloud' },
    { id: 'Innovation', name: 'Innovation' },
    { id: 'RSE', name: 'RSE' },
    { id: 'Infrastructure', name: 'Infrastructure' },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles[0];

  return (
    <div>
      {/* Hero section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Actualités & Innovations</h1>
            <p className="text-lg text-primary-100">
              Restez informé des dernières tendances technologiques et des innovations du secteur IT.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured article */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Article à la une</h2>
          
          <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-3">
                  <span className="inline-block bg-primary-100 text-primary-600 text-xs font-semibold px-2 py-1 rounded-md">
                    {featuredArticle.category}
                  </span>
                  <span className="text-neutral-500 text-sm mx-3">|</span>
                  <span className="flex items-center text-neutral-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {featuredArticle.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{featuredArticle.title}</h3>
                <p className="text-neutral-600 mb-4">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-neutral-500 text-sm">
                    <User size={14} className="mr-1" />
                    {featuredArticle.author}
                  </div>
                  
                  <Link 
                    to={`/news/${featuredArticle.id}`} 
                    className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Lire l'article <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Articles filter */}
      <section className="py-8 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Search */}
            <div className="w-full md:w-auto flex-grow md:max-w-md">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Rechercher un article..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-neutral-400" size={18} />
              </div>
            </div>
            
            {/* Categories */}
            <div className="w-full md:w-auto flex flex-wrap gap-2">
              {categories.map(category => (
                <button 
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    selectedCategory === category.id 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50'
                  } transition-colors`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Articles grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {selectedCategory === 'all' ? 'Tous les articles' : `Articles - ${selectedCategory}`}
            </h2>
            <p className="text-neutral-600">{filteredArticles.length} articles</p>
          </div>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600 mb-4">Aucun article ne correspond à votre recherche.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-lg border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary-300"
                >
                  <Link to={`/news/${article.id}`} className="block">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <span className="flex items-center text-neutral-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {article.date}
                      </span>
                      <span className="mx-2 text-neutral-300">|</span>
                      <span className="flex items-center text-neutral-500 text-sm">
                        <Tag size={14} className="mr-1" />
                        {article.category}
                      </span>
                    </div>
                    
                    <Link to={`/news/${article.id}`}>
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary-500 transition-colors">{article.title}</h3>
                    </Link>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-neutral-500 text-sm">
                        <User size={14} className="mr-1" />
                        {article.author}
                      </div>
                      
                      <Link 
                        to={`/news/${article.id}`} 
                        className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        Lire la suite <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          {filteredArticles.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">
                  Précédent
                </button>
                <button className="px-3 py-2 rounded-md bg-primary-600 text-white">1</button>
                <button className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">2</button>
                <button className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">3</button>
                <button className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors">
                  Suivant
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 bg-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
            <p className="mb-8 text-primary-100">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et innovations du monde IT directement dans votre boîte mail.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="px-4 py-3 rounded-l-md flex-grow text-neutral-800 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-secondary-500 hover:bg-secondary-600 px-6 py-3 rounded-r-md font-medium transition-colors inline-flex items-center justify-center whitespace-nowrap"
              >
                S'inscrire
              </button>
            </form>
            
            <p className="mt-4 text-sm text-primary-200">
              En vous inscrivant, vous acceptez de recevoir nos communications. Vous pourrez vous désabonner à tout moment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;