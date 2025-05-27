import React from 'react';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const TestimonialSection: React.FC = () => {
  // This would typically come from an API or database
  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Marie Dupont',
      position: 'Directrice IT',
      company: 'Groupe Finance Plus',
      content: 'Grâce aux solutions d\'infrastructure fournies par IT Solutions, nous avons pu moderniser notre système informatique et améliorer considérablement notre productivité. Leur équipe a été professionnelle et réactive à chaque étape du projet.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 't2',
      name: 'Thomas Lefebvre',
      position: 'DSI',
      company: 'MediTech Solutions',
      content: 'La mise en place de notre solution de cybersécurité par IT Solutions nous a permis de sécuriser efficacement notre environnement de travail. Leur expertise technique et leur suivi constant ont été déterminants dans le succès de ce projet.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 't3',
      name: 'Sophie Martin',
      position: 'Responsable Infrastructure',
      company: 'EduConnect',
      content: 'Le support 24/7 d\'IT Solutions est exceptionnel. À chaque problème rencontré, leur équipe technique a toujours été disponible et efficace pour nous aider à résoudre rapidement nos incidents, minimisant ainsi l\'impact sur notre activité.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients et comment nos solutions ont transformé leur infrastructure informatique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-neutral-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              <div className="mb-4">
                {/* 5 stars */}
                <div className="flex text-secondary-500">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;