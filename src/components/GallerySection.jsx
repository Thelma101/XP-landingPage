import React from 'react';
import droneImg from '../assets/drone.png';
import tabletImg from '../assets/tablet.png';
import windowImg from '../assets/windowside.png';
import domoreImg from '../assets/domore.png';
import codePicImg from '../assets/codepic.png';
import laptopImg from '../assets/laptop.png';
import cameraImg from '../assets/camera.png';
import respGallery from '../assets/resp-gallery.png';

const GallerySection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 my-14">
      <h2 className="font-inria-sans text-[40px] leading-[50px] md:text-[54px] font-medium md:leading-[64px] text-gray-100 mb-6">
        Gallery
      </h2>
      <p className="font-inria-sans mb-14 w-[85%] md:w-[45%] text-white font-inria-sans text-[15px] md:text-[21px] leading-[28px] text-center mt-4">
        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
      </p>

      <div className="flex-col hidden gap-10 md:flex">
        <div className="flex justify-around gap-6">
          <img src={droneImg} alt="Drone flying" className="shadow-md rounded-xl" />
          <img src={tabletImg} alt="Tablet setup" className="shadow-md rounded-xl" />
          <img src={windowImg} alt="Scenic window view" className="shadow-md rounded-xl" />
          <img src={domoreImg} alt="Living room tech setup" className="shadow-md rounded-xl" />
        </div>

        <div className="flex justify-around gap-6">
          <img src={codePicImg} alt="Monitor displaying code" className="shadow-md rounded-xl" />
          <img src={laptopImg} alt="Using a laptop" className="shadow-md rounded-xl" />
          <img src={cameraImg} alt="Close-up of a camera" className="shadow-md rounded-xl" />
        </div>
      </div>

      <div className="flex items-center justify-center w-full md:hidden">
        <img src={respGallery} alt="Mobile view of gallery" className="w-full rounded-lg" />
      </div>

      <button className="px-10 py-3 mt-10 text-gray-100 border border-gray-100 rounded-lg hover:bg-gray-800">
        Explore More
      </button>
    </section>
  );
};

export default GallerySection;
