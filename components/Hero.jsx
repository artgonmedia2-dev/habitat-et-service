import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa6';

const images = [
  '/home/hero2.webp',
  '/home/hero1.webp',
  '/home/Hero3.webp',
  '/home/Hero4.webp',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[650px] lg:h-[820px] bg-slate-950 overflow-hidden select-none">
      {/* Background Image Carousel */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Luxury Dark Overlay with Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />

      {/* Hero Content */}
      <div className="container mx-auto h-full px-4 lg:px-8 flex items-center relative z-10">
        <div className="max-w-2xl text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs sm:text-sm font-semibold tracking-widest font-jakarta mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
            L&apos;EXCELLENCE DU BOIS AU MAROC
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-6">
            HABITAT ET <span className="headline-accent-on-dark">SERVICE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
            Importation et distribution haut de gamme de bois et de ses dérivés pour les professionnels du bâtiment et de la menuiserie fine.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/produits">
              <button className="btn btn-accent group px-8 py-4 text-base font-semibold">
                NOS PRODUITS
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>

            <Link href="/societe">
              <button className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/60 backdrop-blur-md text-white font-semibold hover:border-gold hover:bg-slate-900/90 transition-all duration-300 flex items-center gap-2">
                DÉCOUVRIR LA SOCIÉTÉ
                <FaChevronRight className="text-gold text-sm" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              currentImage === index 
                ? 'w-10 bg-gold shadow-gold-glow' 
                : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}