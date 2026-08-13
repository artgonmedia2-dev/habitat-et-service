'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="w-full py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link href="#" className="flex justify-center">
          <Image 
            src="/home/habitatservice-logo.jpg" 
            alt="Habitat Service Logo" 
            height={50} 
            width={140}
          />
          </Link>

          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b-4 border-accent">
          
            <li>
              <Link 
                href="/produits" 
                className={`${
                  pathname.includes('/produits') ? 'text-[20px] text-accent ' : 'text-[20px] hover:text-accent transition-all duration-300'
                }`}
              >
                NOS PRODUITS
              </Link>
            </li>
            <li>
              <Link 
                href="/nouvelles-arrivage" 
                className={`${
                  pathname.includes('/nouvelles-arrivage') ? 'text-[20px] text-accent ' : 'text-[20px] hover:text-accent transition-all duration-300'
                }`}
              >
                NOUVELLES ARRIVAGE
              </Link>
            </li>
            <li>
              <Link 
                href="/societe" 
                className={`${
                  pathname === '/societe' ? 'text-[20px] text-accent ' : 'text-[20px] hover:text-accent transition-all duration-300'
                }`}
              >
                SOCIÉTÉ
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`${
                  pathname === '/contact' ? 'text-[20px] text-accent ' : 'text-[20px] hover:text-accent transition-all duration-300'
                }`}
              >
                CONTACT
              </Link>
            </li>
              
          </ul>

          <div className="mt-8 flex justify-center space-x-6">
            <Link href="https://facebook.com">{/*facebook */}
              <FaFacebookF className="h-6 w-6 text-gray-500 hover:text-gray-900" />
            </Link>
            
            <Link href="https://instagram.com">{/*instagram */}
              <FaInstagram className="h-6 w-6 text-gray-500 hover:text-gray-900" />
            </Link>
            <Link href="https://linkedin.com">{/*Linkedin */}
              <FaLinkedinIn className="h-6 w-6 text-gray-500 hover:text-gray-900" />
            </Link>
             <Link href="mailto:contact@Habitatetservice.ma"> {/*email */}
              <FaEnvelope className="h-6 w-6 text-gray-500 hover:text-gray-900" />
            </Link>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2024 Habitat et service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer