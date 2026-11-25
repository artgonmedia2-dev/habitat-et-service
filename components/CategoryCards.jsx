import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import categories from "@data/categories";

const CategoryCards = () => {
  return (
    <section className="py-20 lg:py-32 relative bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge">NOS GAMMES EXCLUSIVES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-slate-900 mb-4">
            CATALOGUE DES <span className="headline-accent">PRODUITS</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Découvrez nos sélections de bois de qualité supérieure, panneaux dérivés, bardages et équipements importés pour répondre aux exigences des plus grands projets.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-card-hover transition-all duration-500 flex flex-col"
            >
              {/* Image Container with Zoom Effect */}
              <Link
                href={{
                  pathname: '/produits',
                  query: { category: category.name }
                }}
                className="relative block w-full h-[240px] overflow-hidden bg-slate-100"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold font-jakarta text-slate-900 tracking-wider">
                  BOIS IMPORTÉ
                </span>
              </Link>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <Link
                    href={{
                      pathname: '/produits',
                      query: { category: category.name }
                    }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold font-jakarta text-slate-900 group-hover:text-gold-ink transition-colors duration-300 mb-3">
                      {category.name}
                    </h3>
                  </Link>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                    {category.description}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href={{
                    pathname: '/produits',
                    query: { category: category.name }
                  }}
                  className="inline-flex items-center gap-2 text-sm font-bold font-jakarta text-gold-ink hover:text-gold-deep transition-colors group/btn pt-2"
                >
                  <span>DÉCOUVRIR LA GAMME</span>
                  <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
