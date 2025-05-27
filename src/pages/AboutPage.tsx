import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">À propos d'IT Solutions</h1>
            <p className="text-lg text-primary-100">
              Votre partenaire de confiance pour toutes vos solutions informatiques professionnelles depuis plus de 20 ans.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary-700">Notre mission</h2>
              <p className="text-neutral-700 mb-4">
                Chez IT Solutions, notre mission est claire : fournir des solutions informatiques innovantes et adaptées aux besoins spécifiques de chaque entreprise. Nous nous engageons à être un partenaire stratégique pour nos clients, en les aidant à naviguer dans un paysage technologique en constante évolution.
              </p>
              <p className="text-neutral-700 mb-4">
                Notre approche centrée sur le client nous permet de comprendre les défis uniques auxquels sont confrontées les entreprises aujourd'hui et de proposer des solutions sur mesure qui répondent à leurs objectifs commerciaux.
              </p>
              
              <h2 className="text-2xl font-bold mb-6 mt-8 text-primary-700">Nos valeurs</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary-500 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Innovation :</span> Nous restons à la pointe de la technologie pour offrir les solutions les plus avancées à nos clients.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary-500 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Expertise :</span> Notre équipe de professionnels qualifiés possède une connaissance approfondie du secteur IT.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary-500 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Intégrité :</span> Nous agissons avec honnêteté et transparence dans toutes nos interactions.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary-500 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Engagement client :</span> La satisfaction de nos clients est au cœur de notre activité.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary-500 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Responsabilité :</span> Nous prenons nos engagements environnementaux et sociaux au sérieux.
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:pl-12">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="L'équipe IT Solutions" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="font-bold text-3xl text-primary-600">20+</div>
                  <div className="text-neutral-600">années d'expérience</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-16">
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <div className="font-bold text-3xl text-primary-600 mb-2">5000+</div>
                  <div className="text-neutral-600">Clients satisfaits</div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <div className="font-bold text-3xl text-primary-600 mb-2">250+</div>
                  <div className="text-neutral-600">Experts certifiés</div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <div className="font-bold text-3xl text-primary-600 mb-2">15</div>
                  <div className="text-neutral-600">Agences en France</div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <div className="font-bold text-3xl text-primary-600 mb-2">98%</div>
                  <div className="text-neutral-600">Taux de satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* History section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre histoire</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Depuis notre création, nous n'avons cessé d'évoluer pour répondre aux besoins changeants du marché IT.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-32 flex-shrink-0">
                  <div className="font-bold text-2xl text-primary-600">2002</div>
                </div>
                <div className="flex-grow md:pl-8 relative">
                  <div className="hidden md:block absolute h-full w-0.5 bg-primary-200 left-0 top-0"></div>
                  <div className="hidden md:block absolute w-3 h-3 rounded-full bg-primary-500 -left-1 top-2"></div>
                  <h3 className="text-xl font-semibold mb-2">Fondation d'IT Solutions</h3>
                  <p className="text-neutral-600">
                    Création de l'entreprise par trois ingénieurs passionnés de technologie, avec une vision claire : rendre les solutions IT professionnelles accessibles aux entreprises de toutes tailles.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-32 flex-shrink-0">
                  <div className="font-bold text-2xl text-primary-600">2008</div>
                </div>
                <div className="flex-grow md:pl-8 relative">
                  <div className="hidden md:block absolute h-full w-0.5 bg-primary-200 left-0 top-0"></div>
                  <div className="hidden md:block absolute w-3 h-3 rounded-full bg-primary-500 -left-1 top-2"></div>
                  <h3 className="text-xl font-semibold mb-2">Expansion nationale</h3>
                  <p className="text-neutral-600">
                    Ouverture de bureaux dans les principales villes françaises pour assurer une proximité avec nos clients sur tout le territoire.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-32 flex-shrink-0">
                  <div className="font-bold text-2xl text-primary-600">2014</div>
                </div>
                <div className="flex-grow md:pl-8 relative">
                  <div className="hidden md:block absolute h-full w-0.5 bg-primary-200 left-0 top-0"></div>
                  <div className="hidden md:block absolute w-3 h-3 rounded-full bg-primary-500 -left-1 top-2"></div>
                  <h3 className="text-xl font-semibold mb-2">Lancement des solutions Cloud</h3>
                  <p className="text-neutral-600">
                    Développement de notre offre de services cloud pour accompagner nos clients dans leur transformation numérique.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-32 flex-shrink-0">
                  <div className="font-bold text-2xl text-primary-600">2019</div>
                </div>
                <div className="flex-grow md:pl-8 relative">
                  <div className="hidden md:block absolute h-full w-0.5 bg-primary-200 left-0 top-0"></div>
                  <div className="hidden md:block absolute w-3 h-3 rounded-full bg-primary-500 -left-1 top-2"></div>
                  <h3 className="text-xl font-semibold mb-2">Centre d'excellence en cybersécurité</h3>
                  <p className="text-neutral-600">
                    Création d'un pôle dédié à la cybersécurité pour répondre aux enjeux croissants de protection des données.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-32 flex-shrink-0">
                  <div className="font-bold text-2xl text-primary-600">2023</div>
                </div>
                <div className="flex-grow md:pl-8 relative">
                  <div className="hidden md:block absolute w-3 h-3 rounded-full bg-primary-500 -left-1 top-2"></div>
                  <h3 className="text-xl font-semibold mb-2">Vision 2030</h3>
                  <p className="text-neutral-600">
                    Lancement de notre plan stratégique "Vision 2030" axé sur l'innovation durable et les technologies émergentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;