"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import Title from "../layouts/Title";

interface CardPoints {
  title: string;
  bullets: string[];
}

interface LeftSection {
  title: string;
  subTitle: string;
  describation: string;
  leftCard: {
    icon: StaticImageData;
    title: string;
    describation: string[];
    rightCard: {
      icon: StaticImageData;
      title: string;
      points: CardPoints;
    };
  };
}

interface RightSection {
  leftSide: {
    image: StaticImageData;
  };
  rightSide: {
    topCard: {
      icon: StaticImageData;
      title: string;
      describation: string;
    };
    bottomCard: {
      icon: StaticImageData;
      title: string;
      describation: string;
    };
  };
}

interface WhyChooseUsData {
  leftSection: LeftSection;
  rightSection: RightSection;
}

interface WhyChooseUsSectionProps {
  data: WhyChooseUsData;
}

export default function WhyChooseUsSection({ data }: WhyChooseUsSectionProps) {
  const left = data.leftSection;
  const right = data.rightSection;

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
        {/* Left Section */}
        <div className="">
          <div className="text-left">
            <Title title={left.title} subTitle={left.subTitle} />
            <p className="text-[#909090]">{left.describation}</p>
          </div>

          <div className="flex w-full mt-8">
            {/* Left Card */}
            <div className="w-1/2 bg-[#F3F3F3]  p-9  ">
              <Image
                src={left.leftCard.icon}
                alt="Left Card Icon"
                width={40}
                height={40}
              />
              <h4 className="text-[20px] font-semibold text-[#2D2D2D] mt-4 mb-2">
                {left.leftCard.title}
              </h4>
              {left.leftCard.describation.map((item, index) => (
                <p key={index} className="text-[14px] text-[#909090]">
                  {item}
                </p>
              ))}
            </div>

            {/* Right Card */}
            <div className="w-1/2 bg-[#4BBA72]  p-9  ">
              <Image
                src={left.leftCard.rightCard.icon}
                alt="Right Card Icon"
                width={40}
                height={40}
              />
              <h4 className="text-[20px] text-white font-semibold text-[#2D2D2D] mt-4 mb-2">
                {left.leftCard.rightCard.title}
              </h4>
              <p className="text-[14px] text-white mb-2">
                {left.leftCard.rightCard.points.title}
              </p>
              <ul className="list-disc pl-5 text-[14px] text-white space-y-1">
                {left.leftCard.rightCard.points.bullets.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Side Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src={right.leftSide.image}
              alt="Right Side Image"
              className=" w-full h-auto lg:h-[86vh] object-cover"
            />
          </div>

          {/* Right Side Cards */}
          <div className="lg:w-1/2 ">
            {/* Top Card */}
            <div className="bg-[#4BBA72]  p-9  ">
              <Image
                src={right.rightSide.topCard.icon}
                alt="Top Card Icon"
                width={40}
                height={40}
              />
              <h4 className="text-[20px] text-white font-semibold  mt-4 mb-2">
                {right.rightSide.topCard.title}
              </h4>
              <p className="text-[14px] text-white">
                {right.rightSide.topCard.describation}
              </p>
            </div>

            {/* Bottom Card */}
            <div className="bg-[#F3F3F3] p-9 ">
              <Image
                src={right.rightSide.bottomCard.icon}
                alt="Bottom Card Icon"
                width={40}
                height={40}
              />
              <h4 className="text-[20px] text-black font-semibold  mt-4 mb-2">
                {right.rightSide.bottomCard.title}
              </h4>
              <p className="text-[14px] text-[#909090]">
                {right.rightSide.bottomCard.describation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
