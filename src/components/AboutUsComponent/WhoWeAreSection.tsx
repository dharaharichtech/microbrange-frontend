"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import Title from "../layouts/Title";

interface CardType {
  id: number;
  image: StaticImageData;
  alt: string;
  title: string;
}

interface WhoWeAreRightSection {
  title: string;
  subtitle: string;
  describation: string[];
  cards: CardType[];
}

interface WhoWeAreSectionProps {
  data: {
    leftImage: StaticImageData;
    alt: string;
    rightSection: WhoWeAreRightSection;
  };
}

export default function WhoWeAreSection({ data }: WhoWeAreSectionProps) {
  const { leftImage, alt, rightSection } = data;

  return (
    <section className="text-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Image - Now matches right content height */}
          <div className="relative h-full min-h-[300px] lg:min-h-[400px] rounded-lg overflow-hidden">
            <Image
              src={leftImage}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col h-full">
            <Title 
              title={rightSection.title} 
              subTitle={rightSection.subtitle} 
            />

            <div className="space-y-4 mb-8 flex-grow">
              {rightSection.describation.map((desc, idx) => (
                <p 
                  key={idx} 
                  className="text-[#909090] text-[15px] leading-relaxed"
                >
                  {desc}
                </p>
              ))}
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {rightSection.cards.map((card, index) => (
                <div
                  key={card.id}
                  className="bg-[#F0F0F0] text-black rounded-lg overflow-hidden flex items-stretch h-full"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 80px, 96px"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-4 sm:p-5 w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight text-right">
                      {`0${index + 1}`}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 text-right">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}