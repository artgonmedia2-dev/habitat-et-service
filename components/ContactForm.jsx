'use client'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsFillSendFill } from "react-icons/bs";
import { FaLinkedin, FaInstagram,FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, } from 'react-icons/fa';
import Link from 'next/link';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    
    const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_USER_ID)
        .then((result) => {
            console.log(result.text);
            alert("Votre message a été envoyé avec succès!");
            e.target.reset();
            setFormData({
                fullName: '',
                phoneNumber: '',
                email: '',
                message: ''
            });
        }, (error) => {
            console.log(error.text);
            alert("Erreur lors de l&apos;senvoi du message. Veuillez réessayer.");
        });
    e.target.reset();
    };

  return (
    <section className="bg-accent-secondary ">
                <div className="container px-6 py-12 mx-auto">
                <h1 className="text-gray-900 text-4xl font-bold mb-8 justify-center text-center">CONTACTEZ-NOUS</h1>
                    <div className="lg:flex lg:items-center lg:-mx-6">
                      
                        <div className="lg:w-1/2 lg:mx-6">
                            <h1 className="text-2xl font-inter text-primary font-bold lg:text-3xl">
                              Contactez nous pour <br /> plus d&apos;sinformations
                            </h1>

                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2">
                                    <FaMapMarkerAlt className="w-6 h-6 mx-2 text-primary2" />
                                    <span className="mx-2 text-gray-700 w-72 ">
                                       propriété ELMOSTAQBAL ZONE INDUSTRIELLE SELOUANE NADOR
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <FaPhone className="w-6 h-6 mx-2 text-primary2" />
                                    <span className="mx-2 text-gray-700  w-72">05 36 35 85 35</span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <FaEnvelope className="w-6 h-6 mx-2 text-primary2 " />
                                    <span className="mx-2 text-gray-700  w-72 ">contact@Habitatetservice.ma</span>
                                </p>
                            </div>

                            {/* <div className="mt-6 w-80 md:mt-8">
                                <h3 className="text-primary font-bold">Follow us</h3>

                                <div className="flex mt-4 -mx-1.5">
                                    

                                    <Link href="#" passHref>
                                        <FaLinkedin className="w-8 h-8 mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-primary-hover " />
                                    </Link>

                                    <Link href="#" passHref>
                                        <FaFacebook className="w-8 h-8 mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-primary-hover " />
                                    </Link>

                                    <Link href="#" passHref>
                                        <FaInstagram className="w-8 h-8 mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-primary-hover " />
                                    </Link>
                                </div>
                            </div> */}
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50 ">

                                <form className="mt-6" onSubmit={handleSubmit}>
                                    <div className="flex-1">
                                        <label className="block mb-2 text-xl font-bold text-primary">Nom complet</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>


                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-xl font-bold text-primary">Numéro de Téléphone</label>
                                        <input
                                            type="number"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            placeholder="(000) 0000-00000"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>


                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-xl font-bold text-primary">Adresse e-mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="johndoe@example.com"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>

                                    <div className="w-full mt-6">
                                        <label className="block mb-2 text-xl font-bold text-primary">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-form">
                                      Envoyer
                                      <BsFillSendFill className="text-accent"/>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default ContactForm