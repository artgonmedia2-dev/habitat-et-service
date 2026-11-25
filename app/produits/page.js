// pages/produits/page.js
'use client';
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import productsData from '@data/products'; 
import { FaArrowRight } from "react-icons/fa6";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('TOUS');
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryQuery = searchParams.get('category');

  useEffect(() => {
    if (categoryQuery) {
      setSelectedCategory(categoryQuery);
    }
  }, [categoryQuery]);

  const categories = ['TOUS', ...new Set(productsData.map(product => product.category))];

  const filteredProducts = selectedCategory === 'TOUS'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const query = category === 'TOUS' ? '' : `?category=${encodeURIComponent(category)}`;
    router.push(`/produits${query}`);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Luxury Page Header Banner */}
      <div className="relative h-[280px] sm:h-[340px] bg-slate-950 flex items-center justify-center overflow-hidden mb-12">
        <Image
          src="/product/banner.jpg"
          alt="Products Banner"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="section-badge !mb-3">GAMMES ET RÉFÉRENCES</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-jakarta text-white tracking-tight">
            NOS <span className="headline-accent-on-dark">PRODUITS</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Parcourez l'ensemble de nos références de bois massifs, dérivées et panneaux certifiés.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-14 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm max-w-4xl mx-auto">
          {categories.map(category => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-bold font-jakarta rounded-xl transition-all duration-300 ${
                  active 
                    ? 'bg-slate-900 text-gold shadow-md shadow-slate-900/10' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
                        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between"
            >
              <Link href={`/produits/${product.id}`} className="relative block w-full h-64 overflow-hidden bg-slate-100">
                <Image
                  src={product.image[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold font-jakarta text-slate-900 tracking-wider">
                  {product.category}
                </span>
              </Link>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <Link href={`/produits/${product.id}`}>
                    <h3 className="text-xl font-bold font-jakarta text-slate-900 group-hover:text-gold-ink transition-colors duration-300 uppercase mb-2">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <Link 
                  href={`/produits/${product.id}`} 
                  className="inline-flex items-center gap-2 text-sm font-bold font-jakarta text-gold-ink hover:text-gold-deep transition-colors group/btn pt-2 border-t border-slate-100"
                >
                  <span>CONSULTER FICHE TECHNIQUE</span>
                  <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold" />
      </div>
    }>
      <ProductsPage />
    </Suspense>
  );
}
