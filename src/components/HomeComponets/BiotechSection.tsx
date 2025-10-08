"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import Title from "../layouts/Title";
import { MoveUpRight } from 'lucide-react';


type BiotechDataType = {
  leftSection: {
    circleSvg: StaticImageData;
    leafSvg: StaticImageData;
    image: StaticImageData;
    alt: string;
  };
  rightSection: {
    title: string;
    subTitle: string;
    describation: string;
    points: {
      title: string;
      bulletList: string[];
      describation: string;
    };
    btn: string;
  };
};

const BiotechSection = ({ data }: { data: BiotechDataType }) => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        
        {/* Left Section - Image */}
        <div className="relative w-full order-2 lg:order-1">
          {/* SVG elements - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute -top-16 right-36 w-12 h-12 lg:w-14 lg:h-14 z-0">
            <Image
              src={data.leftSection.circleSvg}
              alt="Circle SVG"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden lg:block absolute -top-20 right-8 w-16 h-16 lg:w-24 lg:h-24 z-10">
            <Image 
              src={data.leftSection.leafSvg} 
              alt="Leaf SVG" 
              fill
              className="object-contain"
            />
          </div>
          
          {/* Main Image */}
          <div className="relative w-full z-20">
            <Image
              src={data.leftSection.image}
              alt={data.leftSection.alt}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full order-1 lg:order-2 space-y-6">
          <Title
            title={data.rightSection.title}
            subTitle={data.rightSection.subTitle}
          />
          
          <p className="text-[#909090] text-sm sm:text-base leading-relaxed">
            {data.rightSection.describation}
          </p>

          <div className="space-y-4">
            <h4 className="text-[#909090] text-sm sm:text-base font-medium">
              {data.rightSection.points.title}
            </h4>
            
            <ul className="list-disc pl-6 text-[#909090] text-sm sm:text-base space-y-2 leading-relaxed">
              {data.rightSection.points.bulletList.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            
            <p className="text-[#909090] text-sm sm:text-base leading-relaxed">
              {data.rightSection.points.describation}
            </p>
          </div>

          <button className="flex gap-3 mt-6 px-6 py-3 bg-[#4BBA72] text-white rounded-lg hover:bg-[#4BBA72]/90 transition-colors duration-300 font-medium text-[16px] lg:text-[20px] cursor-pointer sm:text-base">
            {data.rightSection.btn}
            <MoveUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BiotechSection;