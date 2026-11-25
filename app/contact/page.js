import ContactForm from '@components/ContactForm'
import React from 'react'

const page = () => {
  return (
    <div className='bg-slate-50 min-h-screen pb-20'>
      <ContactForm />
      
      {/* Map Section */}
      <section className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          <div className="text-center mb-8">
            <span className="section-badge">GÉOLOCALISATION</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-jakarta text-slate-900">
              NOTRE <span className="headline-accent">LOCALISATION</span>
            </h3>
            <p className="text-sm text-slate-500 mt-1">Zone Industrielle Selouane, Nador, Maroc</p>
          </div>
          
          <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3266.25133809002!2d-2.9524097!3d35.0504548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77af4a433f283b%3A0xf8ce78b091a27ab8!2sHabitat%20et%20service!5e0!3m2!1sen!2sma!4v1721640627378!5m2!1sen!2sma"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page