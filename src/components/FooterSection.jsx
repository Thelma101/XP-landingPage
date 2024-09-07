import React from 'react';
import { FaTwitter, FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import { FaLocationPin } from "react-icons/fa6";
import { RiFacebookBoxFill } from "react-icons/ri";

const FooterColumn = ({ heading }) => (
  <div className="flex flex-col gap-4 pr-20 mb-6 mr-12">
    <p className="text-white text-left font-graphik text-[18px] sm:text-[20px] font-medium leading-[28px] sm:leading-[30px]">
      {heading}
    </p>
    <div className="flex flex-col gap-2 sm:gap-3">
      <p className="text-white font-graphik text-[14px] sm:text-[16px] font-medium">Home</p>
      <p className="text-white font-graphik text-[14px] sm:text-[16px] font-medium">Examples</p>
      <p className="text-white font-graphik text-[14px] sm:text-[16px] font-medium">Pricing</p>
      <p className="text-white font-graphik text-[14px] sm:text-[16px] font-medium">Updates</p>
    </div>
  </div>
);

const FooterSection = () => (
  <footer className="flex flex-col items-center justify-between gap-8 px-4 py-12 md:flex-row md:px-16 md:py-16 bg-dark-blue">
    <div className="flex flex-col md:w-[60%] gap-8">
      <div className="flex justify-between w-full gap-6">
        <FooterColumn heading="Fingertipe" />
        <FooterColumn heading="Resources" />
        <FooterColumn heading="About" />
      </div>
    </div>

    <div className="flex flex-col items-start gap-6 md:w-[40%]">
      <div className="flex items-center space-x-3 text-white">
        <FaLocationPin size={24} />
        <span className="text-[14px] sm:text-[16px]">7480 Mockingbird Hill undefined</span>
      </div>
      <div className="flex items-center space-x-3 text-white">
        <FaMobileAlt size={24} />
        <span className="text-[14px] sm:text-[16px]">(239) 555-0108</span>
      </div>
      <div className="flex space-x-6">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaTwitter size={24} className="text-white" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
          <RiFacebookBoxFill size={24} className="text-white" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
          <FaLinkedin size={24} className="text-white" />
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
