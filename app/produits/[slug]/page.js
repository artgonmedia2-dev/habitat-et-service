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
    <div className="p-8 bg-white">
      <h1 className="text-4xl font-bold mb-4 uppercase">{product.name}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        {/* Main Image */}
        <div className="w-full md:w-2/3 mb-4 md:mb-0 md:mr-5">
          <div className="relative w-full h-[400px]">
            <Image
              src={mainImage}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto md:overflow-x-hidden w-full md:w-1/3">
          {product.image && product.image.map((img, index) => (
            <div
              key={index}
              className={`relative cursor-pointer p-1 ${mainImage === img ? 'border-4 border-accent rounded-lg' : 'opacity-80'}`}
              onClick={() => setMainImage(img)}
              style={{ width: '150px', height: '100px' }}
              
            >
              <Image
                src={img}
                alt={`${product.name} image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                style={{ borderRadius: '0.375rem' }} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Description Section */}
      {product.description && (
        <div className='mb-8'>
          <h2 className="text-2xl font-bold mb-2">Description</h2>
          <p className="text-xl mb-4">{product.description}</p>
        </div>
      )}

      {/* Characteristics Section */}
      {product.characteristics && product.characteristics.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Caractéristiques</h2>
          <ul className="list-disc list-inside">
            {product.characteristics.map((charac, index) => (
              <li key={index} className="mb-2 text-xl">
                <strong>{charac.name}:</strong> {charac.value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Origins Section */}
      {product.origins && product.origins.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Origins</h2>
          <ul className="list-disc list-inside">
            {product.origins.map((origin, index) => (
              <li key={index} className="mb-2 text-xl">
                {origin}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Types Section */}
      {product.types && product.types.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Types</h2>
          <div className="flex flex-wrap gap-6">
            {product.types.map((type, index) => (
              <div
                key={index}
                className="w-full sm:w-1/3 lg:w-1/4 p-0 bg-gray-50 rounded-lg shadow-md cursor-pointer"
                onClick={() => handleTypeClick(type)}
              >
                <div className="relative mb-4">
                  <Image
                    src={type.image}
                    alt={`${type.type} image`}
                    width={300}
                    height={200}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 pl-2">{type.type}</h3>
                
                
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for Type Details */}
      {showModal && selectedType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedType.type}</h2>
            <div className="mb-4">
              <Image
                src={selectedType.image}
                alt={`${selectedType.type} image`}
                width={500}
                height={300}
                className="w-full h-[300px] object-cover rounded-lg"
                priority
              />
            </div>
            {selectedType.characteristics && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Characteristics</h3>
                <ul className="list-disc list-inside text-lg">
                  {Object.entries(selectedType.characteristics).map(([key, value]) => (
                    <li key={key} className="mb-2">
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bois rouge  */}
      {product.id === 'bois-rouge' && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Dimensions et Qualités</h2>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 text-left text-base">Dimensions</th>
                <th className="border border-gray-300 px-0 text-base">US SB</th>
                <th className="border border-gray-300 px-0 text-base">US</th>
                <th className="border border-gray-300 px-0 text-base">V</th>
                <th className="border border-gray-300 px-0 text-base">VI</th>
                <th className="border border-gray-300 px-0 text-base">VII</th>
              </tr>
            </thead>
            <tbody>
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

          <div className="mt-6 flex flex-wrap justify-around items-center">
            <Image 
              src="https://drive.usercontent.google.com/download?id=1897HDbwVRmv9l_7fJyROEzW7TYDaqIow&export=view&authuser=0" 
              alt="STENVALLS" 
              width={150} 
              height={100}
              class="object-contain"
            />
            <Image 
              src="https://drive.usercontent.google.com/download?id=17HzlHjGuGavefUb5W-9Oy8WKbnHiZ9PV&export=view&authuser=0" 
              alt="MOELVEN" 
              width={150} 
              height={100} 
              class="object-contain"
            />
            <Image 
              src="https://drive.usercontent.google.com/download?id=1dPOGheLz0BBBZoEtU6BF_K2qgC2Dr_Gk&export=view&authuser=0" 
              alt="CALLANAS TRA AB" 
              width={150} 
              height={100} 
              class="object-contain"
            />
            <Image 
              src="https://drive.usercontent.google.com/download?id=1e-hlLCTyICRiuemnqRV_H2ab5TMJPQu9&export=view&authuser=0" 
              alt="SVEDENTRA" 
              width={150} 
              height={100} 
              class="object-contain"
            />
          </div>

        </div>
      )}



    </div>
  );
};

export default ProductDetails;