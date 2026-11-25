'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const pathname = usePathname();

  const footerLinks = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'NOS PRODUITS', href: '/produits' },
    { name: 'NOUVEAUX ARRIVAGES', href: '/nouvelles-arrivage' },
    { name: 'SOCIÉTÉ', href: '/societe' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Company Info */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block bg-white p-3 rounded-xl">
              <Image 
                src="/home/habitatservice-logo.jpg" 
                alt="Habitat Service Logo" 
                height={45} 
                width={140}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Depuis 2008, Habitat et Service est un acteur majeur dans l'importation et la distribution de bois et de ses dérivés sur l'ensemble du territoire marocain.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 hover:bg-gold hover:text-slate-900 rounded-xl text-slate-400 transition-all">
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 hover:bg-gold hover:text-slate-900 rounded-xl text-slate-400 transition-all">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 hover:bg-gold hover:text-slate-900 rounded-xl text-slate-400 transition-all">
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a href="mailto:contact@Habitatetservice.ma" className="p-3 bg-slate-900 hover:bg-gold hover:text-slate-900 rounded-xl text-slate-400 transition-all">
                <FaEnvelope className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold font-jakarta text-white uppercase tracking-wider border-l-2 border-gold pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={`text-sm transition-colors duration-300 font-jakarta block ${
                      pathname === link.href ? 'text-gold font-bold' : 'text-slate-400 hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold font-jakarta text-white uppercase tracking-wider border-l-2 border-gold pl-3">
              Siège Social
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold w-4 h-4 mt-1 flex-shrink-0" />
                <span>Zone Industrielle Selouane, Propriété ELMOSTAQBAL, Nador</span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-gold w-4 h-4 flex-shrink-0" />
                <span>05 36 35 85 35</span>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-gold w-4 h-4 flex-shrink-0" />
                <span>contact@Habitatetservice.ma</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Habitat et Service SARL. Tous droits réservés.</p>
          <p className="text-slate-500">Importation & Distribution de Bois au Maroc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;