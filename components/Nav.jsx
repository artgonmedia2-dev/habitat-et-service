'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CgMenuRight } from 'react-icons/cg';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavToggle = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <header className="sticky top-0 h-[100px] shadow-xl z-30 bg-white">
      <div className="container mx-auto flex justify-between h-full items-center">
        <Link href="/">
          <Image 
            src="/home/habitatservice-logo.jpg" 
            alt="Habitat Service Logo" 
            height={50} 
            width={140} 
            
            style={{objectFit: 'cover'}}
          />
        </Link>

        <nav>
          {/* nav mobile trigger */}
          <div className="cursor-pointer lg:hidden" onClick={handleNavToggle}>
            <CgMenuRight className="text-4xl text-primary" />
          </div>
          <ul 
            className={`fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[100px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300 ${
              navIsOpen ? 'nav-is-open' : ''
            }`}
          >
            <li>
              <Link 
                href="/" 
                className={`${
                  pathname === '/' ? 'text-[20px] text-accent ' : 'text-[20px] hover:text-accent transition-all duration-300'
                }`}
              >
                ACCUEIL
              </Link>
            </li>
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
                NOUVEAUX ARRIVAGES
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
        </nav>
      </div>
    </header>
  );
};

export default Nav;
