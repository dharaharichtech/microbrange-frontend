"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import Title from "../layouts/Title";
import CircleSvg from "../../../public/Image/HomepageImages/BiotechSection/Svg/circle.svg";
import LeafSvg from "../../../public/Image/HomepageImages/BiotechSection/Svg/yellow.svg";

interface WeProvideSectionProps {
  sections: {
    id: number;
    image: StaticImageData;
    alt: string;
    title: string;
    subTitle: string;
    describation: string[];
    bullets: string[];
    short: string;
  }[];
}

const WeProvideSection: React.FC<WeProvideSectionProps> = ({ sections }) => {
  return (
    <section className="sm:py-12 lg:py-20 space-y-24 bg-[#EDFFF3] ">
      {sections.map((item, index) => {
        const isEven = index % 2 !== 0;

        return (
          <div
            key={item.id}
            className={`relative flex flex-col px-4 sm:px-6 lg:px-16 lg:flex-row ${
              isEven ? "lg:flex-row-reverse" : ""
            } items-center gap-20`}
          >
            <div className="relative w-full lg:w-1/3 aspect-[4/4] overflow-visible z-0">
              {/* Decorative SVGs */}
              <Image
                src={CircleSvg}
                alt="Decorative circle"
                className="absolute -top-10 right-10 w-10 sm:w-12 lg:w-14 z-20"
              />
              <Image
                src={LeafSvg}
                alt="Decorative leaf"
                className="absolute -top-7 -right-10 w-10 sm:w-14 lg:w-20 z-20"
              />

              {/* Main image */}
              <div className="rounded-xl overflow-hidden relative w-full h-full z-10">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="w-full lg:w-2/3 space-y-4">
              <Title title={item.title} subTitle={item.subTitle} />
              {item.describation.map((desc, i) => (
                <p key={i} className="text-[#909090] text-[15px]">
                  {desc}
                </p>
              ))}
              <ul className="list-disc pl-5 text-[15px] text-[#909090] space-y-1">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <p className="text-[15px] text-[#4BBA72] font-medium">
                {item.short}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default WeProvideSection;
