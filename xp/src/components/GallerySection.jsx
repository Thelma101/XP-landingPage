import React from 'react';
import droneImg from '../assets/drone.png';
import tabletImg from '../assets/tablet.png';
import windowImg from '../assets/windowside.png';
import livingRoomImg from '../assets/livingroom.png';
import codeScreenImg from '../assets/codescreen.png';
import laptopImg from '../assets/laptoppressing.png';
import cameraImg from '../assets/camera.png';
import mobileGalleryImg from '../assets/mobile_gallery.png';

const GallerySection = () => {
  return (
    <section className="flex flex-col items-center justify-center my-14 py-10">
      <h2 className="font-inria-sans text-[42px] leading-[50px] md:text-[54px] font-medium md:leading-[64px] text-gray-100 mb-6">
        Our Work Gallery
      </h2>
      <p className="font-inter text-[22px] font-light leading-[26px] text-center text-gray-100 mb-14 w-[75%] md:w-[35%]">
        Discover how we integrate ergonomics with design to deliver seamless experiences at your workspace.
      </p>

      <div className="hidden md:flex flex-col gap-10">
        <div className="flex gap-6 justify-around">
          <img src={droneImg} alt="Drone flying" className="rounded-xl shadow-md" />
          <img src={tabletImg} alt="Tablet setup" className="rounded-xl shadow-md" />
          <img src={windowImg} alt="Scenic window view" className="rounded-xl shadow-md" />
          <img src={livingRoomImg} alt="Living room tech setup" className="rounded-xl shadow-md" />
        </div>

        <div className="flex gap-6 justify-around">
          <img src={codeScreenImg} alt="Monitor displaying code" className="rounded-xl shadow-md" />
          <img src={laptopImg} alt="Using a laptop" className="rounded-xl shadow-md" />
          <img src={cameraImg} alt="Close-up of a camera" className="rounded-xl shadow-md" />
        </div>
      </div>

      <div className="flex md:hidden justify-center items-center w-full">
        <img src={mobileGalleryImg} alt="Mobile view of gallery" className="w-full rounded-lg" />
      </div>

      <button className="text-gray-100 px-10 py-3 mt-10 border border-gray-100 rounded-lg hover:bg-gray-800">
        Explore More
      </button>
    </section>
  );
};

export default GallerySection;
