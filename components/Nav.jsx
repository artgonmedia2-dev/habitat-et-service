'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'NOS PRODUITS', href: '/produits' },
    { name: 'NOUVEAUX ARRIVAGES', href: '/nouvelles-arrivage' },
    { name: 'SOCIÉTÉ', href: '/societe' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'h-[85px] bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100' 
        : 'h-[95px] bg-white/90 backdrop-blur-sm border-b border-slate-100/80'
    }`}>
      <div className="container mx-auto h-full px-4 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* No rounded/overflow clipping here: the logo's lettering reaches its corners */}
          <div className="relative transition-transform duration-300 group-hover:scale-105">
            {/* Height is fixed so the logo (614×397) always fits inside the 85–95px header */}
            <Image
              src="/home/habitatservice-logo.jpg"
              alt="Habitat et Service"
              height={72}
              width={111}
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-[62px]' : 'h-[72px]'}`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wider font-jakarta transition-all duration-300 rounded-full ${
                  active 
                    ? 'text-gold-ink bg-gold/10' 
                    : 'text-slate-700 hover:text-gold-ink hover:bg-slate-50'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            );
          })}

          <Link 
            href="/contact" 
            className="ml-4 btn-accent text-sm !py-2.5 !px-5 font-jakarta"
          >
            DEMANDER UN DEVIS
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
          onClick={() => setNavIsOpen(!navIsOpen)}
          aria-label={navIsOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={navIsOpen}
          aria-controls="mobile-nav"
        >
          {navIsOpen ? (
            <CgClose className="text-3xl text-gold-ink" />
          ) : (
            <CgMenuRight className="text-3xl text-slate-800" />
          )}
        </button>

        {/* Mobile Navigation Drawer: anchored to the bottom of the sticky header
            (top-full) so it follows the header height (95px, 85px once scrolled)
            instead of a hard-coded offset that covered the logo. Opaque so the
            hero text no longer shows through the links. */}
        <div
          id="mobile-nav"
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl transition-all duration-300 flex flex-col ${
            navIsOpen
              ? 'max-h-[calc(100vh-85px)] overflow-y-auto p-6 opacity-100 visible'
              : 'max-h-0 overflow-hidden p-0 opacity-0 invisible'
          }`}
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setNavIsOpen(false)}
                    className={`block px-4 py-3 text-base font-bold font-jakarta rounded-xl transition-all ${
                      active 
                        ? 'text-gold-ink bg-gold-light/60 border-l-4 border-gold' 
                        : 'text-slate-700 hover:text-gold-ink hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <Link 
              href="/contact"
              onClick={() => setNavIsOpen(false)}
              className="btn-form !mt-0 text-center"
            >
              DEMANDER UN DEVIS
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
