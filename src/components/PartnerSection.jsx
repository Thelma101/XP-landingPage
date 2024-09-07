import React from 'react';
import appleLogo from '../assets/logos_apple-app-store.png';
import androidLogo from '../assets/logos_android-icon.png';
import airbnbLogo from '../assets/logos_airbnb.png';
import basecampLogo from '../assets/logos_basecamp.png';
import ibmLogo from '../assets/logos_ibm.png';
import apiaryLogo from '../assets/logos_apiary.png';

const PartnerSection = () => {
  return (
    <section className='flex flex-col items-center justify-center px-10 my-10 '>
      
      <h2 className="font-inria-sans text-[42px] leading-[48px] md:text-[54px] font-light md:leading-[64px] md:tracking-[0.15px] text-gray-100 mb-6">
        Our Partners
      </h2>

      <p className="font-inter text-[18px] md:text-[22px] font-light leading-[20px] md:leading-[25px] text-center text-gray-100 mb-6 w-[98%] md:w-[35%]">
        We emphasize ergonomics and prioritize meeting you where you work. It’s just a click away.
      </p>

      <div className='flex flex-col gap-6 md:flex-row md:gap-10'>
        <div className='flex gap-6 mt-10 md:gap-10'>
          <img src={appleLogo} alt='Apple logo' className='w-[62px] h-[62px]'/>
          <img src={apiaryLogo} alt='Apiary logo' className='w-[62px] h-[62px]'/>
          <img src={androidLogo} alt='Android logo' className='w-[62px] h-[62px]'/>
        </div>
        
        <div className='flex gap-6 mt-10 md:gap-10'>
          <img src={basecampLogo} alt='Basecamp logo' className='w-[62px] h-[62px]'/>
          <img src={airbnbLogo} alt='Airbnb logo' className='w-[62px] h-[62px]'/>
          <img src={ibmLogo} alt='IBM logo' className='w-[62px] h-[62px]'/>
        </div>
      </div>

      <button className='px-10 py-3 mt-10 text-gray-100 border border-gray-100 hover:bg-gray-700'>
        View All Partners
      </button>

    </section>
  )
}

export default PartnerSection;
