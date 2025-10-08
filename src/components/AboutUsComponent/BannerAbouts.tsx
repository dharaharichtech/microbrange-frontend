"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import Title from "../layouts/Title";

interface KnowBetterSection {
  title: string;
  subtitle: string;
  describation: string[];
}

interface AboutUsDataType {
  banner: StaticImageData;
  mobileBanner: StaticImageData;
  alt: string;
  knowBetterSection: KnowBetterSection;
}

export default function BannerAbouts({ data }: { data: AboutUsDataType }) {
  const { banner, mobileBanner, alt, knowBetterSection } = data;

  return (
    <section className="relative">
      {/* Banner for large screens */}
      <div className="hidden sm:block w-full h-[100vh] relative overflow-hidden">
        <Image
          src={banner}
          alt={alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Mobile banner */}
      <div className="block sm:hidden w-full h-[100dvh] relative overflow-hidden">
        <Image
          src={mobileBanner}
          alt={alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlapping Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-60 lg:-mt-48 xl:-mt-64 bg-white shadow-md rounded-md p-6 sm:p-8 lg:p-10  sm:mx-0">
          <div className="space-y-4 md:space-y-6">
            <Title 
              title={knowBetterSection.title} 
              subTitle={knowBetterSection.subtitle}
            />
            {knowBetterSection.describation.map((para, index) => (
              <p 
                key={index} 
                className="text-[#909090] text-base sm:text-lg lg:text-xl"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}