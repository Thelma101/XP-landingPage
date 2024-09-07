import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterColumn = ({ heading }) => (
  <div className="flex flex-col gap-6 mb-6">
    <p className="text-white text-left font-graphik text-[20px] font-medium leading-[30px]">
      {heading}
    </p>
    <div className="flex flex-col gap-4">
      <p className="text-white font-graphik text-[16px] font-medium">Home</p>
      <p className="text-white font-graphik text-[16px] font-medium">Examples</p>
      <p className="text-white font-graphik text-[16px] font-medium">Pricing</p>
      <p className="text-white font-graphik text-[16px] font-medium">Updates</p>
    </div>
  </div>
);

const FooterSection = () => (
  <footer className="flex flex-col items-center justify-between gap-8 px-4 py-12 md:flex-row">
    <div className="flex flex-col md:flex-row justify-between w-full md:w-[60%] gap-6">
      <FooterColumn heading="Fingertipe" />
      <FooterColumn heading="Resources" />
      <FooterColumn heading="About" />
    </div>
    <div className="flex flex-col items-start gap-4 md:w-[40%]">
      <div className="flex items-center space-x-3 text-white">
        <FaMapMarkerAlt size={24} />
        <span>7480 Mockingbird Hill undefined</span>
      </div>
      <div className="flex items-center space-x-3 text-white">
        <FaPhone size={24} />
        <span>(239) 555-0108</span>
      </div>
      <div className="flex space-x-6">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaTwitter size={24} className="text-white" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
          <FaFacebookF size={24} className="text-white" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
          <FaLinkedinIn size={24} className="text-white" />
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
