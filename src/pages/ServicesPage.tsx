import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Shield, Cloud, Code, Database, Monitor, RefreshCw, BarChart3 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Nos services IT</h1>
            <p className="text-lg text-primary-100">
              Des solutions complètes et personnalisées pour répondre à tous vos besoins informatiques professionnels.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos domaines d'expertise</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Notre équipe d'experts vous accompagne dans tous vos projets informatiques, de la conception à la maintenance, en passant par l'implémentation et le support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Conseil IT */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 transition-all duration-300 hover:shadow-lg hover:border-primary-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Conseil IT</h3>
              <p className="text-neutral-600 mb-6">
                Nos consultants vous aident à définir la stratégie IT adaptée à vos objectifs commerciaux et à optimiser votre infrastructure.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Audit de l'infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Analyse des besoins</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Recommandations stratégiques</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Planification de projets</span>
                </li>
              </ul>
              <Link 
                to="/services/consulting" 
                className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Infrastructure */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 transition-all duration-300 hover:shadow-lg hover:border-primary-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Infrastructure IT</h3>
              <p className="text-neutral-600 mb-6">
                Conception, déploiement et gestion d'infrastructures IT robustes, évolutives et sécurisées pour votre entreprise.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Serveurs et stockage</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Solutions de virtualisation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Réseaux et télécommunications</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Solutions de sauvegarde</span>
                </li>
              </ul>
              <Link 
                to="/services/infrastructure" 
                className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Cloud */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 transition-all duration-300 hover:shadow-lg hover:border-primary-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <Cloud size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Solutions Cloud</h3>
              <p className="text-neutral-600 mb-6">
                Migration et gestion de vos applications et données dans le cloud pour plus de flexibilité et d'évolutivité.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Migration vers le cloud</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Cloud hybride et multi-cloud</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">SaaS, PaaS et IaaS</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Optimisation des coûts cloud</span>
                </li>
              </ul>
              <Link 
                to="/services/cloud" 
                className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Sécurité */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 transition-all duration-300 hover:shadow-lg hover:border-primary-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersécurité</h3>
              <p className="text-neutral-600 mb-6">
                Protection de vos systèmes et données contre les menaces avec des solutions de sécurité complètes et adaptées.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Audit de sécurité</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Protection contre les malwares</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Gestion des identités</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Plan de reprise d'activité</span>
                </li>
              </ul>
              <Link 
                to="/services/security" 
                className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Développement */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 transition-all duration-300 hover:shadow-lg hover:border-primary-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Développement sur mesure</h3>
              <p className="text-neutral-600 mb-6">
                Création d'applications et de solutions logicielles adaptées à vos besoins spécifiques et à votre secteur d'activité.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Applications web et mobiles</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Intégration de systèmes</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">API et services web</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Bases de données</span>
                </li>
              </ul>
              <Link 
                to="/services/development" 
                className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Support */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 transition-all duration-300 hover:shadow-lg hover:border-primary-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <RefreshCw size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Support & Maintenance</h3>
              <p className="text-neutral-600 mb-6">
                Assistance technique continue et maintenance préventive pour garantir le bon fonctionnement de vos systèmes IT.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Support technique 24/7</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Maintenance préventive</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Monitoring et alertes</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Gestion des mises à jour</span>
                </li>
              </ul>
              <Link 
                to="/services/support" 
                className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our approach */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre approche</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Nous suivons une méthodologie éprouvée pour garantir la réussite de vos projets IT, de l'analyse initiale à la livraison finale.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-0 h-full w-0.5 bg-primary-200 md:left-1/2 md:-ml-0.5"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Item 1 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary-600 rounded-full md:absolute md:left-1/2 md:-ml-5">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div className="pl-4 md:w-1/2 md:pr-8 md:pl-0">
                      <h3 className="font-bold text-lg mb-1">Analyse des besoins</h3>
                      <p className="text-neutral-600">
                        Nous commençons par comprendre vos objectifs commerciaux et vos défis IT actuels pour définir le périmètre du projet.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="relative">
                  <div className="flex items-center md:flex-row-reverse">
                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary-600 rounded-full md:absolute md:left-1/2 md:-ml-5">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div className="pl-4 md:w-1/2 md:pl-8 md:pr-0">
                      <h3 className="font-bold text-lg mb-1">Conception de la solution</h3>
                      <p className="text-neutral-600">
                        Nos experts élaborent une solution sur mesure en fonction de vos besoins spécifiques et des meilleures pratiques du secteur.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary-600 rounded-full md:absolute md:left-1/2 md:-ml-5">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="pl-4 md:w-1/2 md:pr-8 md:pl-0">
                      <h3 className="font-bold text-lg mb-1">Implémentation</h3>
                      <p className="text-neutral-600">
                        Nous mettons en œuvre la solution avec une approche méthodique pour minimiser les perturbations de votre activité.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Item 4 */}
                <div className="relative">
                  <div className="flex items-center md:flex-row-reverse">
                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary-600 rounded-full md:absolute md:left-1/2 md:-ml-5">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div className="pl-4 md:w-1/2 md:pl-8 md:pr-0">
                      <h3 className="font-bold text-lg mb-1">Tests et validation</h3>
                      <p className="text-neutral-600">
                        Nous effectuons des tests rigoureux pour garantir que la solution répond à toutes vos exigences et fonctionne de manière optimale.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Item 5 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary-600 rounded-full md:absolute md:left-1/2 md:-ml-5">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div className="pl-4 md:w-1/2 md:pr-8 md:pl-0">
                      <h3 className="font-bold text-lg mb-1">Formation et transfert de compétences</h3>
                      <p className="text-neutral-600">
                        Nous formons vos équipes pour qu'elles puissent utiliser efficacement les nouvelles solutions et technologies.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Item 6 */}
                <div className="relative">
                  <div className="flex items-center md:flex-row-reverse">
                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary-600 rounded-full md:absolute md:left-1/2 md:-ml-5">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div className="pl-4 md:w-1/2 md:pl-8 md:pr-0">
                      <h3 className="font-bold text-lg mb-1">Support continu</h3>
                      <p className="text-neutral-600">
                        Nous assurons un suivi et un support technique continu pour garantir la pérennité et l'optimisation de votre infrastructure IT.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre infrastructure IT ?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-primary-100">
            Contactez nos experts dès aujourd'hui pour une consultation personnalisée et découvrez comment nos services peuvent répondre à vos besoins.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-primary-600 px-6 py-3 rounded-md font-medium hover:bg-neutral-100 transition-colors inline-flex items-center justify-center"
          >
            Demander un devis gratuit <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;