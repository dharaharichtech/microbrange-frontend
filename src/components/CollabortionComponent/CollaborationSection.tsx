"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import Title from "../layouts/Title";

interface CollaborationProps {
  title: string;
  subTitle: string;
  collabortions: {
    id: number;
    leftSection: {
      icon: StaticImageData;
      describations: string[];
      btn: {
        text: string;
        link: string;
      };
    };
    rightSection: {
      imageBanner: StaticImageData;
    };
  }[];
}

const CollaborationSection: React.FC<CollaborationProps> = ({
  title,
  subTitle,
  collabortions,
}) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-16  bg-white">
      {/* Title Section */}
      <div className="text-left mb-12">
        <Title title={title} subTitle={subTitle} />
      </div>

      {/* Cards */}
      <div className="space-y-16">
        {collabortions.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Left Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Icon */}
              <div className="w-24 h-24 sm:w-60 sm:h-30">
                <Image
                  src={item.leftSection.icon}
                  alt="Partner Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Description */}
              <div className="space-y-4 text-sm sm:text-base text-[#606060] leading-relaxed">
                {item.leftSection.describations.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>

              {/* Button */}
              <Link
                href={item.leftSection.btn.link}
                className="inline-flex items-center gap-2 bg-[#4BBA72] text-white px-6 py-3 rounded-lg font-medium transition hover:bg-green-700"
              >
                {item.leftSection.btn.text}
                <MoveUpRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <Image
                src={item.rightSection.imageBanner}
                alt="Collaboration Banner"
                className="w-full h-auto  object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollaborationSection;
