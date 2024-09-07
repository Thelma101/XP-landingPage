import React from 'react';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';

const ClientTestimonials = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-6 px-6 py-16 md:my-20 md:px-32 lg:px-64 '>
      <h2 className="font-inria-sans text-[32px] leading-[38px] sm:text-[42px] sm:leading-[48px] md:text-[54px] md:leading-[64px] font-light text-gray-100 mb-6">
        Client Testimonials
      </h2>

      <div className="grid grid-cols-1 gap-6 px-6 md:gap-12 md:grid-cols-2">
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
          <div key={index} className='flex flex-col w-full gap-16 p-6 rounded-lg bg-custom-theme-color '>
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
            <p className="font-inter text-[15px] font-normal leading-[26px] text-left text-gray-300 w-100%">
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
