import ContactForm from '@components/ContactForm'
import React from 'react'

const page = () => {
  return (
    <section className='bg-white'>
        <ContactForm />
        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">Notre Localisation</h3>
          <div className="relative w-full h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3266.25133809002!2d-2.9524097!3d35.0504548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77af4a433f283b%3A0xf8ce78b091a27ab8!2sHabitat%20et%20service!5e0!3m2!1sen!2sma!4v1721640627378!5m2!1sen!2sma"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0 rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      

    </section>
  )
}

export default page