'use client'
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { FiChevronRight } from 'react-icons/fi';
import products from '../data/products';

const CategoryList = () => {
  const router = useRouter();
  const { slug } = useParams();

  // State to manage expanded categories
  const [expandedCategories, setExpandedCategories] = useState({});

  // Initialize expanded state based on the selected product
  useEffect(() => {
    if (slug) {
      const product = products.find(prod => prod.id === slug);
      if (product) {
        setExpandedCategories(prevState => ({
          ...prevState,
          [product.category]: true
        }));
      }
    }
  }, [slug]);

  // Handle category toggle
  const handleToggleCategory = (category) => {
    setExpandedCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  // Handle product click
  const handleProductClick = (productId) => {
    router.push(`/produits/${productId}`);
  };

  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="hidden md:block md:w-1/4 p-4 border-r border-gray-200">
      {categories.map(category => (
        <div key={category}>
          <h2 
            className="font-bold text-xl mb-2 flex items-center cursor-pointer" 
            onClick={() => handleToggleCategory(category)}
          >
            <FiChevronRight 
              className={`mr-2 transform transition-transform duration-200 ${expandedCategories[category] ? 'rotate-90' : ''}`} 
            />
            {category}
          </h2>

          {expandedCategories[category] && (
            <ul className="mb-4">
              {products.filter(product => product.category === category).map(product => (
                <li key={product.id} className="mb-2">
                  <button
                    onClick={() => handleProductClick(product.id)}
                    className={`text-accent hover:underline ${slug === product.id ? 'font-bold' : ''} pl-4 text-left text-base block`}
                  >
                    {product.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
