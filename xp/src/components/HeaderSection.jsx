import React from 'react';
import { FaBars } from 'react-icons/fa';

const HeaderSection = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3">
      <p className="text-white text-center font-inria-sans text-[20px] md:text-[24px] leading-[24px] md:leading-[29px]">
        Xplora.io
      </p>
      <div className="hidden gap-6 px-4 py-2 border border-white rounded-full md:flex">
        <button className="px-4 py-2 text-white rounded-lg">About</button>
        <button className="px-4 py-2 text-white rounded-lg">Blog</button>
        <button className="px-4 py-2 text-white rounded-lg">Support</button>
      </div>
      <button className="hidden px-6 py-2 text-white bg-black rounded-full md:flex">
        Get Started
      </button>
      <FaBars size={24} className="text-white md:hidden" />
    </nav>
  );
};

export default HeaderSection;