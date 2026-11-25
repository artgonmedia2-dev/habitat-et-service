'use client'
import { useParams } from 'next/navigation';
import products from '@data/products';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find((prod) => prod.id === slug);

  const [mainImage, setMainImage] = useState(product ? product.image[0] : '');
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  // Preload type images
  useEffect(() => {
    if (product && product.types) {
      product.types.forEach(type => {
        const img = new window.Image();
        img.src = type.image;
      });
    }
  }, [product]);


  if (!product) {
    return <div>Product not found</div>;
  }
  
  const handleTypeClick = (type) => {
    setSelectedType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedType(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Back Link */}
        <div className="mb-6">
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center gap-2 text-xs font-bold font-jakarta text-slate-500 hover:text-gold-ink uppercase tracking-wider transition-colors"
          >
            ← RETOUR AU CATALOGUE
          </button>
        </div>

        {/* Header Title */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md mb-8">
          <span className="section-badge !mb-2">{product.category}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-slate-900 uppercase">
            {product.name}
          </h1>
        </div>

        {/* Gallery & Quick Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Showcase Image */}
          <div className="lg:col-span-8 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-md">
            <div className="relative w-full h-[380px] sm:h-[480px] rounded-xl overflow-hidden bg-slate-100">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md flex flex-col">
            <h3 className="text-sm font-bold font-jakarta uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Galerie Photos ({product.image ? product.image.length : 0})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 overflow-y-auto max-h-[420px] pr-1">
              {product.image && product.image.map((img, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer h-24 rounded-xl overflow-hidden border-2 transition-all ${
                    mainImage === img 
                      ? 'border-gold shadow-gold-glow scale-[1.02]' 
                      : 'border-transparent opacity-75 hover:opacity-100'
                  }`}
                  onClick={() => setMainImage(img)}
                >
                  <Image
                    src={img}
                    alt={`${product.name} image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description & Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Description */}
          {product.description && (
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-4">
              <h2 className="text-xl font-bold font-jakarta text-slate-900 border-b border-slate-100 pb-3">
                DESCRIPTION DU PRODUIT
              </h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                {product.description}
              </p>
            </div>
          )}

          {/* Right Column: Characteristics & Origins */}
          <div className="lg:col-span-5 space-y-6">
            {/* Characteristics */}
            {product.characteristics && product.characteristics.length > 0 && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md">
                <h2 className="text-xl font-bold font-jakarta text-slate-900 border-b border-slate-100 pb-3 mb-4">
                  CARACTÉRISTIQUES TECHNIQUES
                </h2>
                <div className="space-y-3">
                  {product.characteristics.map((charac, index) => (
                    <div key={index} className="flex items-center justify-between text-sm py-2 border-b border-slate-50 last:border-none">
                      <span className="font-semibold text-slate-500 font-jakarta">{charac.name}</span>
                      <span className="font-bold text-slate-900 font-jakarta text-right">{charac.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Origins */}
            {product.origins && product.origins.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md">
                <h2 className="text-sm font-bold font-jakarta uppercase tracking-wider text-slate-500 mb-3">
                  PROVENANCES & ORIGINES
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.origins.map((origin, index) => (
                    <span key={index} className="px-3.5 py-1.5 rounded-full bg-gold-light text-gold-ink text-xs font-bold font-jakarta border border-gold/20">
                      🌍 {origin}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Types Section */}
        {product.types && product.types.length > 0 && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md mb-12">
            <h2 className="text-2xl font-bold font-jakarta text-slate-900 border-b border-slate-100 pb-4 mb-6">
              TYPES & VARIANTES DISPONIBLES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.types.map((type, index) => (
                <div
                  key={index}
                  className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  onClick={() => handleTypeClick(type)}
                >
                  <div className="relative w-full h-[180px] bg-slate-200">
                    <Image
                      src={type.image}
                      alt={`${type.type} image`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h3 className="text-base font-bold font-jakarta text-slate-900 group-hover:text-gold-ink transition-colors">
                      {type.type}
                    </h3>
                    <span className="text-xs font-bold text-gold-ink">VOIR →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal for Type Details */}
        {showModal && selectedType && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 sm:p-8 rounded-2xl max-w-xl w-full relative shadow-2xl animate-fade-in border border-slate-100">
              <button
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 transition-colors"
                onClick={closeModal}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold font-jakarta text-slate-900 mb-4">{selectedType.type}</h2>
              <div className="relative w-full h-[260px] rounded-xl overflow-hidden mb-6 bg-slate-100">
                <Image
                  src={selectedType.image}
                  alt={`${selectedType.type} image`}
                  fill
                  className="object-cover"
                />
              </div>
              {selectedType.characteristics && (
                <div>
                  <h3 className="text-sm font-bold font-jakarta uppercase tracking-wider text-slate-500 mb-3">Spécifications</h3>
                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl">
                    {Object.entries(selectedType.characteristics).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="font-semibold text-slate-600">{key}:</span>
                        <span className="font-bold text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      {/* Bois rouge  */}
      {product.id === 'bois-rouge' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md mb-8 overflow-hidden">
          <h2 className="text-2xl font-bold font-jakarta text-slate-900 mb-6 border-b border-slate-100 pb-3">
            DIMENSIONS ET QUALITÉS DISPONIBLES
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-jakarta text-sm uppercase">
                  <th className="p-3.5 rounded-l-xl">Dimensions (mm)</th>
                  <th className="p-3.5 text-center text-gold">US SB</th>
                  <th className="p-3.5 text-center text-gold">US</th>
                  <th className="p-3.5 text-center text-gold">V</th>
                  <th className="p-3.5 text-center text-gold">VI</th>
                  <th className="p-3.5 text-center text-gold rounded-r-xl">VII</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-jakarta">
            <tr>
              <td className="border border-gray-300 p-2 text-sm">075/19</td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">075/25</td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">100/16</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">100/19</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">100/25</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">100/32</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">100/38</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">100/50</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">100/63</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">125/19</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">125/25</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">125/38</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">125/50</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">125/63</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">125/75</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">150/25</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">150/50</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">150/63</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">150/75</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">175/25</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">175/38</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">175/50</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">175/63</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">175/75</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">200/50</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">200/63</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">200/75</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">225/75</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">75/16</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">75/19</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm">75/25</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center"></td>
              <td className="border border-gray-300 p-2 text-sm text-center">X</td>
            </tr>
              
            </tbody>
          </table>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap justify-around items-center gap-6">
            <Image 
              src="https://drive.usercontent.google.com/download?id=1897HDbwVRmv9l_7fJyROEzW7TYDaqIow&export=view&authuser=0" 
              alt="STENVALLS" 
              width={150} 
              height={100}
              className="object-contain max-h-16"
            />
            <Image 
              src="https://drive.usercontent.google.com/download?id=17HzlHjGuGavefUb5W-9Oy8WKbnHiZ9PV&export=view&authuser=0" 
              alt="MOELVEN" 
              width={150} 
              height={100} 
              className="object-contain max-h-16"
            />
            <Image 
              src="https://drive.usercontent.google.com/download?id=1dPOGheLz0BBBZoEtU6BF_K2qgC2Dr_Gk&export=view&authuser=0" 
              alt="CALLANAS TRA AB" 
              width={150} 
              height={100} 
              className="object-contain max-h-16"
            />
            <Image 
              src="https://drive.usercontent.google.com/download?id=1e-hlLCTyICRiuemnqRV_H2ab5TMJPQu9&export=view&authuser=0" 
              alt="SVEDENTRA" 
              width={150} 
              height={100} 
              className="object-contain max-h-16"
            />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ProductDetails;