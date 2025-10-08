"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface TeamMember {
  id: number;
  image: StaticImageData;
  alt: string;
  name: string;
  designation: string;
}

interface OurWorkForceSectionProps {
  titleImage: StaticImageData;
  describation: string;
  teamMembers: TeamMember[];
}

const OurWorkForceSection: React.FC<OurWorkForceSectionProps> = ({
  titleImage,
  describation,
  teamMembers,
}) => {
  return (
    <section className="bg-white relative py-16">
      <div className="mx-auto">
        {/* Title & Main Member */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left: Title and Description */}
          <div className="lg:w-2/3">
            <Image
              src={titleImage}
              alt="Title"
              className="h-auto w-full max-w-xs sm:max-w-sm"
            />
            <p className="mt-4 text-[#909090] text-[16px] lg:text-[19px] ">
              {describation}
            </p>
          </div>

          {/* Right: Highlighted Member */}
          <div className="lg:w-1/3 flex justify-center">
            <div
              className="w-full max-w-xs rounded-xl overflow-hidden border border-gray-200"
              style={{ boxShadow: "0 4px 10px rgba(203, 255, 221, 0.8)" }} // Custom shadow
            >
              <div className="aspect-[4/4] relative">
                <Image
                  src={teamMembers[0].image}
                  alt={teamMembers[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-center bg-white">
                <p className="text-[#4BBA72] text-[16px]  font-bold">
                  {teamMembers[0].name}
                </p>
                <p className="text-[#4BBA72] text-[12px]">
                  {teamMembers[0].designation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {teamMembers.slice(1).map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow duration-300 hover:scale-[1.02]"
              style={{
                boxShadow: "0 4px 10px rgba(203, 255, 221, 0.8)", // Base shadow
              }}
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-[#4BBA72] text-[16px] font-bold">
                  {member.name}
                </p>
                <p className="text-[#4BBA72] text-[12px]">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkForceSection;
