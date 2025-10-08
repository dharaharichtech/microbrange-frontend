"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { MoveUpRight } from 'lucide-react';
interface ResumeSectionProps {
  title: string;
  describation: string[];
  btn: string;
  rightImage: StaticImageData;
}

const ResumeUploadSection: React.FC<ResumeSectionProps> = ({
  title,
  describation,
  btn,
  rightImage,
}) => {
  return (
    <section className="py-16 px-4 md:px-20">
      <div className=" mx-auto bg-[#4BBA72] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Text Content */}
        <div className="flex-1 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <div className="space-y-3 mb-6">
            {describation.map((desc, i) => (
              <p key={i} className="text-sm md:text-base leading-relaxed">
                {desc}
              </p>
            ))}
          </div>
          <button className="bg-white text-[#4BBA72]  px-5 py-2 rounded-md text-lg font-medium flex items-center gap-2 transition">
            {btn}
           <MoveUpRight/>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-md">
          <Image
            src={rightImage}
            alt="Upload Resume"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeUploadSection;
