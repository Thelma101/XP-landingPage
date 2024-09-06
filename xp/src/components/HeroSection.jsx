import React from 'react';
import introImg from '../assets/introImage.png';
import desktopChartImg from '../assets/chart.png';
import mobileChartImg from '../assets/mchart.png';

const HeroSection = () => {
  return (
    <header className="flex flex-col items-center justify-center mt-28">
      <img src={introImg} alt="Hero illustration" className="self-center mb-8" />
      <h1 className="font-inria-sans text-[84px] leading-[100px] text-center md:text-[122px] font-extrabold md:leading-[146px] text-gray-100">
        Xplora.io
      </h1>
      <p className="font-inter text-[20px] font-light leading-[24px] md:text-[28px] md:leading-[34px] text-center text-gray-200 px-6 md:w-[32%] w-[72%]">
        Empower your team by analyzing data, creating dashboards, and syncing efforts seamlessly.
      </p>

      <button className="px-10 py-3 mt-10 text-gray-100 bg-gray-900 rounded-full shadow-lg md:hidden hover:bg-gray-700">
        Start Now
      </button>

      <img src={desktopChartImg} alt="Data insights chart" className="self-center hidden mt-12 md:block" />
      <img src={mobileChartImg} alt="Mobile data insights chart" className="block w-full mt-12 md:hidden" />
    </header>
  );
};

export default HeroSection;
