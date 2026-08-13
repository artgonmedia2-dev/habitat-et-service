import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const images = [
  '/home/hero2.webp',
  '/home/hero1.webp',
  '/home/hero3.webp',
  '/home/hero4.webp',
  
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section className="hero h-[640px] xl:h-[840px] bg-center lg:bg-cover bg-no-repeat bg-fixed relative z-20 overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
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
  
        <div className="container mx-auto h-full flex items-center justify-center xl:justify-start relative z-10">
          <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
            <h1 className="text-primary3 font-poppins text-[70px] md:text-[90px] font-750 mb-1 hero-title-shadow">
              HABITAT ET SERVICE
             
              
            </h1>
            <p className="mb-8 text-accent-secondary hero-title-shadow">
              Importation Et Distribution De Bois et Ses Dérivés.
            </p>
            <Link href='/produits'>
              <button className="btn btn-primary mx-auto xl:mx-0">
                VOIR PRODUITS
                <FaArrowRight className="text-accent" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }