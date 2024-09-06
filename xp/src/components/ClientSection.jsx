import React from 'react';
import avatarOne from '../assets/avatar1.png';
import avatarTwo from '../assets/avatar2.png';

const ClientSection = ({image, name}) => {
  return(
    <div className='flex flex-col bg-dark-gray rounded-lg p-10 gap-6'>
      <div className='flex items-start gap-6'>
        <img src={image} alt='Client testimonial avatar' className='w-[52px] h-[52px] rounded-full' />
        <div className='flex flex-col gap-2'>
          <p className="font-graphik text-[18px] font-semibold leading-[26px] text-left text-gray-100">
            {name}
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
  )
}

const ClientReviews = () => {
  return (
    <section className='flex flex-col items-center justify-center md:my-20 gap-6 px-6 md:px-64 py-16'>

      <h2 className="font-inria-sans text-[42px] leading-[48px] md:text-[54px] font-light md:leading-[64px] md:tracking-[0.15px] text-gray-100 mb-6">
        Client Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center px-6">
        <ReviewCard image={avatarOne} name={'Claire Bell'} />
        <ReviewCard image={avatarOne} name={'Claire Bell'} />
        <ReviewCard image={avatarTwo} name={'Ralph Fisher'} />
        <ReviewCard image={avatarTwo} name={'Ralph Fisher'} />
      </div>
    
    </section>
  )
}

export default ClientSection;
