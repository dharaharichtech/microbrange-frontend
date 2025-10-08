"use client";

import Image, { StaticImageData } from "next/image";
import { RefObject } from "react";
// Type definitions
interface BannerSectionType {
  banner: StaticImageData;
  mobileBanner: StaticImageData;
  title: string;
  subTitle: string;
  button: {
    icon: StaticImageData;
    text: string;
  };
}

interface BannerComponentProps {
  bannerData: BannerSectionType;
  scrollRef: RefObject<HTMLDivElement | null>;
}

const BannerComponent: React.FC<BannerComponentProps> = ({
  bannerData,
  scrollRef,
}) => {
  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Desktop Banner */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src={bannerData.banner}
          alt="Desktop Banner"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Mobile Banner */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src={bannerData.mobileBanner}
          alt="Mobile Banner"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-left h-full px-4 sm:px-6 lg:px-16 mt-20">
        <div className="text-left text-white max-w-4xl">
          <h1 className="text-[#4BBA72] text-[60px]  lg:text-[120px] font-bold mb-4 sm:mb-6 leading-tight">
            {bannerData.title}
          </h1>
          <p className="text-[28px]  lg:text-[32px] mb-8  font-bold ms-2">
            {bannerData.subTitle}
          </p>
          <button
            onClick={handleScroll}
            className="flex cursor-pointer items-center gap-3 text-white  py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center justify-center w-20 h-20 ">
              <Image
                src={bannerData.button.icon}
                alt="Mobile Banner"
                width={50}
                height={40}
                className="object-contain"
              />
            </span>
            <span className="flex items-center">{bannerData.button.text}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
