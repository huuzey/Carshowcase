"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="pt-36 flex-1 padding-x">
        <h1 className="hero_title">
          Find , book,or rent a car - quickly and easily !
        </h1>
        <p className="hero_subtitle">
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue tex t-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
