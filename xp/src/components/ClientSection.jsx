// ClientTestimonials.js

import React from 'react';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';

const ClientTestimonials = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-6 px-6 py-16 md:my-20 md:px-64'>
      <h2 className="font-inria-sans text-[42px] leading-[48px] md:text-[54px] font-light md:leading-[64px] md:tracking-[0.15px] text-gray-100 mb-6">
        Client Testimonials
      </h2>

      <div className="grid items-center justify-center grid-cols-1 gap-6 px-6 m-8 md:grid-cols-2 bg-custom-theme-color ">
        {[{
          image: avatar1,
          name: 'Claire Bell',
        },
        {
          image: avatar1,
          name: 'Claire Bell',
        },
        {
          image: avatar2,
          name: 'Ralph Fisher',
        },
        {
          image: avatar2,
          name: 'Ralph Fisher',
        }].map((testimonial, index) => (
          <div key={index} className='flex flex-col gap-6 p-10 rounded-lg bg-dark-gray'>
            <div className='flex items-start gap-6'>
              <img src={testimonial.image} alt={`${testimonial.name} avatar`} className='w-[52px] h-[52px] rounded-full' />
              <div className='flex flex-col gap-2'>
                <p className="font-graphik text-[18px] font-semibold leading-[26px] text-left text-gray-100">
                  {testimonial.name}
                </p>
                <p className="font-graphik text-[16px] font-medium leading-[24px] text-left text-gray-100">
                  Product Designer
                </p>
              </div>
            </div>
            <p className="font-inter text-[16px] font-normal leading-[26px] text-left text-gray-300">
              Slate helps you visualize how much time you need to work to meet your monthly and yearly financial goals. 
              The tool is practical and easy to use.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
