import React from 'react';
import spoonKnifeImg from '../assets/spoon&knife.png';
import knightImg from '../assets/knight.png';
import infinityImg from '../assets/infinity.png';

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center justify-center ">
    <img src={icon} alt="feature" className="w-8 h-8" />
    <p className="text-white font-inter text-[20px] leading-[30px] font-semibold text-center">
      {title}
    </p>
    <p className="text-white font-inter text-[16px] leading-[24px] font-normal text-center w-[60%] md:w-[50%]">
      {description}
    </p>
  </div>
);

const FeaturesSection = () => (
  <section className="py-16">
    <div className="flex flex-col items-center justify-center mt-24">
      <h2 className="text-white font-inria-sans text-[40px] md:text-[52px] leading-[62px] text-center">
        FEATURES
      </h2>
      <p className="text-white font-inria-sans text-[15px] md:text-[21px] leading-[28px] text-center w-[80%] md:w-[50%] mt-4">
        Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
      </p>
    </div>
    <div className="flex flex-col items-center justify-center gap-3 p-[0px] mt-12 md:flex-row">
      <FeatureCard
        icon={spoonKnifeImg}
        title="A single source of truth"
        description="When you add work to your Slate calendar we automatically calculate useful insights."
      />
      <FeatureCard
        icon={knightImg}
        title="Intuitive interface"
        description="When you add work to your Slate calendar we automatically calculate useful insights."
      />
      <FeatureCard
        icon={infinityImg}
        title="Or with rules"
        description="When you add work to your Slate calendar we automatically calculate useful insights."
      />
    </div>
  </section>
);

export default FeaturesSection;
