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
    <div className="relative z-20 bg-white">
      <div className="relative h-[300px] mb-8">
        <Image
          src="/product/banner.jpg"
          alt="Products Banner"
          fill
          style={{
            objectFit: 'cover',
          }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-white">Nos Produits</h1>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 mt-2 border rounded ${selectedCategory === category ? 'bg-primary text-white' : 'bg-white text-primary'}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
                        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-4 lg:mx-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <Link href={`/produits/${product.id}`}>
               <div className="relative w-full h-60">
                <Image
                    className="rounded-t-lg object-cover"
                    src={product.image[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
               </div>
              </Link>
              <div className="p-5">
                <Link href={`/produits/${product.id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase">{product.name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700">
                  {product.description.length > 50 ? `${product.description.substring(0,50)}...` : product.description}
                </p>
                <Link href={`/produits/${product.id}`} className="inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-hover hover:text-white">
                    En savoir plus
                    <FaArrowRight className="w-4 h-4 ml-2 text-accent" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading ..</div>}>
      <ProductsPage />
    </Suspense>
  );
}
