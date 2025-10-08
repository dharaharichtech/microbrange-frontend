"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface JourneyContent {
  title: string;
  descibation: string;
  bulletPoint: {
    bullets: string[];
    describation: string;
  };
}

interface CardType {
  id: number;
  image: StaticImageData;
  alt: string;
  title: string;
}

interface JourneySectionProps {
  data: {
    firstPart: {
      content: JourneyContent;
      cards: CardType[];
    };
    secondPart: {
      content: JourneyContent;
      cards: CardType[];
    };
  };
}

const JourneySection = ({ data }: { data: JourneySectionProps["data"] }) => {
  return (
    <section className=" py-12 space-y-20">
      {[data.firstPart, data.secondPart].map((part, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div
            className={`order-2 lg:order-${
              index === 1 ? "1" : "2"
            } grid grid-cols-1 sm:grid-cols-2 gap-6`}
          >
            {part.cards.map((card) => (
              <div
                key={card.id}
                className="bg-[#CBFFDD] shadow-md hover:shadow-lg transition rounded-2xl overflow-hidden p-6"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center font-semibold text-gray-800 text-lg">
                  {card.title}
                </div>
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div
            className={`order-1 lg:order-${
              index === 1 ? "2" : "1"
            }  text-gray-700`}
          >
            <h2 className="text-[24px] lg:text-[32px] font-semibold text-[#2D2D2D]">
              {part.content.title}
            </h2>
            <p className="text-[14px] text-[#909090] lg:text-[14px]">
              {part.content.descibation}
            </p>
            <ul className="list-disc list-inside mt-4">
              {part.content.bulletPoint.bullets.map((point, i) => (
                <li
                  key={i}
                  className="text-[14px] text-[#909090] lg:text-[16px]"
                >
                  {point}
                </li>
              ))}
            </ul>
            {part.content.bulletPoint.describation && (
              <p className="text-[14px] text-[#909090] lg:text-[16px] mt-2">
                {part.content.bulletPoint.describation}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default JourneySection;
