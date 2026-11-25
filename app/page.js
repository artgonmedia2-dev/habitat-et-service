'use client'
import { FaTruck, FaWarehouse, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import CountUp from 'react-countup';
import Image from "next/image";
import ContactForm from "@components/ContactForm";
import CategoryCards from "@components/CategoryCards";
import Hero from "@components/Hero";

const suppliers = [
  { name: "Sveden Tra", src: "/home/Sveden-Tra.webp" },
  { name: "Callans", src: "/home/callans.webp" },
  { name: "Moelven", src: "/home/moelven.webp" },
  { name: "Stenvalls", src: "/home/stenvalls.webp" },
  { name: "Arkopa", src: "/home/Arkopa.webp" },
  { name: "FINSA", src: "/home/FINSA.webp" },
  { name: "More", src: "/home/more.webp" },
  { name: "Cema", src: "/home/Cema.webp" },
  { name: "Asiawood", src: "/home/Asiewood.webp" },
];

const teamMembers = [
  { name: "MOHAMED FATMI", role: "Directeur Général", initial: "MF" },
  { name: "JAOUAD FATMI", role: "Directeur Opérationnel", initial: "JF" },
  { name: "AMIN FATMI", role: "Expert Comptable & Financier", initial: "AF" },
];

export default function Home() {
  return (
    <main className="w-full bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Company Metrics Section */}
      <section className="-mt-12 relative z-20 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-luxury hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
            <div className="p-4 bg-gold-light rounded-2xl text-gold-ink flex-shrink-0">
              <FaTruck className="text-3xl sm:text-4xl" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-jakarta text-slate-900">
                <CountUp end={8} duration={2.5} prefix="+" />
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider font-jakarta text-slate-500 mt-1">
                Camions de Livraison
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-luxury hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
            <div className="p-4 bg-emerald/10 rounded-2xl text-emerald flex-shrink-0">
              <FaWarehouse className="text-3xl sm:text-4xl" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-jakarta text-slate-900">
                <CountUp end={5} duration={2.5} prefix="+" />
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider font-jakarta text-slate-500 mt-1">
                Dépôts de Stockage
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-luxury hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
            <div className="p-4 bg-gold-light rounded-2xl text-gold-ink flex-shrink-0">
              <FaUsers className="text-3xl sm:text-4xl" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-jakarta text-slate-900">
                <CountUp end={30} duration={2.5} prefix="+" />
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider font-jakarta text-slate-500 mt-1">
                Employés Qualifiés
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-luxury hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
            <div className="p-4 bg-emerald/10 rounded-2xl text-emerald flex-shrink-0">
              <FaCalendarAlt className="text-3xl sm:text-4xl" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-jakarta text-slate-900">
                <CountUp end={17} duration={2.5} prefix="+" />
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider font-jakarta text-slate-500 mt-1">
                Ans d'Expérience
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Product Categories */}
      <CategoryCards />

      {/* Supplier Carousel Section */}
      <section className="py-20 bg-white border-y border-slate-200/80 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 mb-12 text-center">
          <span className="section-badge">PARTENAIRES DE CONFIANCE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-jakarta text-slate-900">
            NOS <span className="headline-accent">FOURNISSEURS INTERNATIONAUX</span>
          </h2>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-infinite-scroll gap-12 py-4">
            {[...suppliers, ...suppliers].map((supplier, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-center w-44 h-24 p-4 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm hover:border-gold/40 hover:bg-white transition-all duration-300 group flex-shrink-0"
              >
                <div className="relative w-full h-full grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={supplier.src}
                    alt={supplier.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La Direction Section */}
      <section className="py-20 lg:py-28 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-badge">GOUVERNANCE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-slate-900 mb-4">
              LA <span className="headline-accent">DIRECTION</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Une équipe dirigeante expérimentée dédiée à la vision stratégique et à la satisfaction client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-md hover:shadow-card-hover transition-all duration-300 text-center group hover:-translate-y-1.5"
              >
                {/* Avatar Initial Pill */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-gold flex items-center justify-center font-bold font-jakarta text-2xl shadow-md border border-gold/20 group-hover:border-gold group-hover:scale-105 transition-all">
                  {member.initial}
                </div>

                <h3 className="text-xl font-bold font-jakarta text-slate-900 mb-1 group-hover:text-gold-ink transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider font-jakarta text-gold-ink bg-gold-light/60 py-1 px-3 rounded-full inline-block mt-2">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </main>
  );
}
