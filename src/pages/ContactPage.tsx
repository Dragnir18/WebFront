import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
    // Show success message
    alert('Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.');
  };

  return (
    <div>
      {/* Hero section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-lg text-primary-100">
              Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact info and form */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary-700">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Siège social</h3>
                    <p className="text-neutral-600">
                      123 Avenue de la Technologie<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                    <p className="text-neutral-600">
                      Support client : +33 (0)1 23 45 67 89<br />
                      Commercial : +33 (0)1 23 45 67 88
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-neutral-600">
                      Info : contact@it-solutions.fr<br />
                      Support : support@it-solutions.fr
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-primary-700">Horaires d'ouverture</h2>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Lundi - Vendredi</span>
                      <span>9h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Samedi</span>
                      <span>Fermé</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Dimanche</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <p className="text-neutral-600 text-sm">
                      <strong>Support technique 24/7</strong> disponible pour nos clients sous contrat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary-700">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="information">Demande d'information</option>
                    <option value="support">Support technique</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="privacy" 
                    type="checkbox" 
                    required 
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-neutral-700">
                    J'accepte la <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700">politique de confidentialité</a> *
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
                  >
                    Envoyer le message <Send size={16} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map section */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Nous trouver</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Retrouvez-nous dans nos différentes agences en France.
            </p>
          </div>
          
          <div className="bg-white p-2 rounded-lg shadow-md">
            {/* This would be an actual map in a real implementation */}
            <div className="aspect-video bg-neutral-200 rounded flex items-center justify-center">
              <p className="text-neutral-600">Carte interactive ici</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;