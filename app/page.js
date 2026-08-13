'use client'
import { FaArrowRight } from "react-icons/fa6";
import { FaTruck, FaWarehouse, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import CountUp from 'react-countup';
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";
import ContactForm from "@components/ContactForm";
import CategoryCards from "@components/CategoryCards";
import Hero from "@components/Hero";


export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
            
            
            <Hero />

            {/* company info min */}
            <section className="mt-[40px] xl:mt-[100px] relative z-20">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-12 xl:grid-cols-4">
                  <div className="text-center border border-gray-200 p-4 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <FaTruck className="mx-auto mb-4 text-6xl text-primary2" />
                    <p className="font-500">
                      <span className="text-5xl font-bold text-primary2">
                        <CountUp end={8} duration={2} prefix="+" />
                      </span> Camions
                    </p>
                  </div>
                  <div className="text-center border border-gray-200 p-4 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <FaWarehouse className="mx-auto mb-4 text-6xl text-primary2" />
                    <p className="font-500">
                      <span className="text-5xl font-bold text-primary2">
                        <CountUp end={5} duration={2} prefix="+" />
                      </span> Dépôts
                    </p>
                  </div>
                  <div className="text-center border border-gray-200 p-4 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <FaUsers className="mx-auto mb-4 text-6xl text-primary2" />
                    <p className="font-500">
                      <span className="text-5xl font-bold text-primary2">
                        <CountUp end={30} duration={2} prefix="+" />
                      </span> Employés
                    </p>
                  </div>
                  <div className="text-center border border-gray-200 p-4 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <FaCalendarAlt className="mx-auto mb-4 text-6xl text-primary2" />
                    <p className="font-500">
                      <span className="text-5xl font-bold text-primary2">
                        <CountUp end={17} duration={2} prefix="+" />
                      </span> Ans d&apos;expérience
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <CategoryCards />
            

            {/* Notre fournisseur */}
            <section className="mt-[80px] xl:mt-[100px] relative z-20">
              <div className="container mx-auto">
                <h1 className="text-center text-4xl font-bold mb-8">NOTRE FOURNISSEUR</h1>
                <div className="overflow-hidden">
                  <div className="flex w-[200%] animate-infinite-scroll">
                    <div className="flex items-center justify-center gap-14 w-full">
                      {/* Logos */}
                      <div className="flex justify-center items-center w-40 h-40">
                        <Image
                          src="/home/Sveden-Tra.webp"
                          alt="Partner Logo 1"
                          width={160}
                          height={160}
                          objectFit="contain"
                        />
                      </div>
                      <div className="flex justify-center items-center w-40 h-40">
                        <Image
                          src="/home/callans.webp"
                          alt="Partner Logo 1"
                          width={160}
                          height={160}
                          objectFit="contain"
                        />
                      </div>
                      <div className="flex justify-center items-center w-40 h-40">
                        <Image
                          src="/home/moelven.webp"
                          alt="Partner Logo 1"
                          width={160}
                          height={160}
                          objectFit="contain"
                        />
                      </div>
                      <div className="flex justify-center items-center w-40 h-40">
                        <Image
                          src="/home/stenvalls.webp"
                          alt="stenvalls"
                          width={160}
                          height={160}
                          objectFit="contain"
                        />
                      </div>
                      <div className="flex justify-center items-center w-40 h-40">
                        <Image
                          src="/home/Arkopa.webp"
                          alt="Partner Logo 1"
                          width={160}
                          height={160}
                          objectFit="contain"
                        />
                      </div>
                      <div className="flex justify-center items-center w-40 h-40">
                        <Image
                          src="/home/FINSA.webp"
                          alt="Partner Logo 1"
                          width={160}
                          height={160}
                          objectFit="contain"
                        />
                      </div>
                      <div className="flex justify-center items-center w-40 h-40">
                        <Image
                          src="/home/more.webp"
                          alt="Partner Logo 1"
                          width={160}
                          height={160}
                          objectFit="contain"
                        />
                      </div>
                      <div className="flex justify-center items-center w-40 h-40">
                        <Image
                          src="/home/cema.webp"
                          alt="Partner Logo 1"
                          width={160}
                          height={160}
                          objectFit="contain"
                        />
                      </div>
                      <div className="flex justify-center items-center w-40 h-40">
                        <Image
                          src="/home/Asiewood.webp"
                          alt="Partner Logo 1"
                          width={160}
                          height={160}
                          objectFit="contain"
                        />
                      </div>
                      
                  
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* La derection  */}
            <section className="mt-[80px] xl:mt-[100px] relative z-20">
              <div className="container mx-auto">
                <div className="flex flex-wrap justify-center text-center mb-14">
                  <h1 className="text-center text-4xl font-bold mb-8">LA DIRECTION</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                  {/* Member #1 */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6">
                    <div className="text-center border border-gray-300 p-6 rounded-lg transition-all duration-300 hover:bg-primary-hover hover:text-white group">
                      <h1 className="text-gray-900 text-xl font-bold mb-1 transition-all duration-300 group-hover:text-white">MOHAMED FATMI</h1>
                      <div className="text-gray-700 font-light mb-2 transition-all duration-300 group-hover:text-white">Directeur général</div>
                    </div>
                  </div>
                  {/* Member #2 */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6">
                    <div className="text-center border border-gray-300 p-6 rounded-lg transition-all duration-300 hover:bg-primary-hover hover:text-white group">
                      <h1 className="text-gray-900 text-xl font-bold mb-1 transition-all duration-300 group-hover:text-white">JAOUAD FATMI</h1>
                      <div className="text-gray-700 font-light mb-2 transition-all duration-300 group-hover:text-white">Directeur</div>
                    </div>
                  </div>
                  {/* Member #3 */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6">
                    <div className="text-center border border-gray-300 p-6 rounded-lg transition-all duration-300 hover:bg-primary-hover hover:text-white group">
                      <h1 className="text-gray-900 text-xl font-bold mb-1 transition-all duration-300 group-hover:text-white">AMIN FATMI</h1>
                      <div className="text-gray-700 font-light mb-2 transition-all duration-300 group-hover:text-white">Expert comptable</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contactez-nous */}
            <ContactForm />


            
        </main>
    
  );
}
