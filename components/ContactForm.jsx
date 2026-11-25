'use client'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsFillSendFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_USER_ID)
            .then((result) => {
                console.log(result.text);
                alert("Votre message a été envoyé avec succès!");
                setFormData({
                    fullName: '',
                    phoneNumber: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-gold-light/10 to-slate-100 relative">
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge">PRENONS CONTACT</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-slate-900 mb-4">
            CONTACTEZ <span className="headline-accent">NOS EXPERTS</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Notre équipe commerciale et technique reste disponible pour répondre à vos demandes de cotation, d'échantillons ou de renseignements produits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-6">
              <h3 className="text-2xl font-bold font-jakarta text-slate-900 border-b border-slate-100 pb-4">
                Nos Coordonnées
              </h3>

              <div className="space-y-6 text-left">
                {/* Address */}
                <a 
                  href="https://maps.google.com/?q=SELOUANE+NADOR" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-start gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="p-3 bg-gold-light rounded-xl text-gold-ink group-hover:bg-gold-ink group-hover:text-white transition-colors">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm font-jakarta text-slate-900 uppercase">Adresse du Siège</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Propriété ELMOSTAQBAL, Zone Industrielle Selouane, Nador, Maroc
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:0536358535" 
                  className="flex items-center gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="p-3 bg-gold-light rounded-xl text-gold-ink group-hover:bg-gold-ink group-hover:text-white transition-colors">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm font-jakarta text-slate-900 uppercase">Téléphone</h4>
                    <p className="text-sm text-slate-600 mt-1">05 36 35 85 35</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:contact@Habitatetservice.ma" 
                  className="flex items-center gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="p-3 bg-gold-light rounded-xl text-gold-ink group-hover:bg-gold-ink group-hover:text-white transition-colors">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm font-jakarta text-slate-900 uppercase">Adresse E-mail</h4>
                    <p className="text-sm text-slate-600 mt-1">contact@Habitatetservice.ma</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Info Box */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
              <h4 className="text-xl font-bold font-jakarta text-gold mb-2">Horaires d'ouverture</h4>
              <p className="text-sm text-slate-300">Du Lundi au Samedi : 08:00 - 18:30</p>
              <p className="text-xs text-slate-400 mt-4">Service Client & Expédition Nationale</p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-xl">
            <h3 className="text-2xl font-bold font-jakarta text-slate-900 mb-2">
              Envoyez-nous un Message
            </h3>
            <p className="text-sm text-slate-500 mb-8">
              Remplissez le formulaire ci-dessous et nos technico-commerciaux vous recontacteront sous 24h.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold font-jakarta uppercase tracking-wider text-slate-700 mb-2">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Mohammed Alami"
                  className="w-full px-4 py-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold font-jakarta uppercase tracking-wider text-slate-700 mb-2">
                    Numéro de Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="0600000000"
                    className="w-full px-4 py-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-jakarta uppercase tracking-wider text-slate-700 mb-2">
                    Adresse e-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="m.alami@entreprise.ma"
                    className="w-full px-4 py-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold font-jakarta uppercase tracking-wider text-slate-700 mb-2">
                  Votre Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Détaillez vos besoins (type de bois, quantités, dimensions...)"
                  className="w-full px-4 py-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-form font-jakarta text-sm uppercase tracking-wider"
              >
                {loading ? 'ENVOI EN COURS...' : 'ENVOYER LE MESSAGE'}
                <BsFillSendFill className="text-base" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;