"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import TitleTwo from "../layouts/TitleTwo";

interface CardType {
  id: number;
  title: string;
  describation: string;
}

interface WhatWeDoSectionProps {
  data: {
    title: string;
    subTitle: string;
    section: {
      backGroundImage: StaticImageData;
      title: string;
      describation: string[];
      cards: CardType[];
    };
  };
}

export default function WhatWeDoSection({ data }: WhatWeDoSectionProps) {
  const { title, subTitle, section } = data;

  return (
    <section className="relative z-10">
      {/* Header Section */}
      <div>
       
     <TitleTwo title={title} subTitle={subTitle} />
     </div>

      <div className="relative z-0">
        <Image
          src={section.backGroundImage}
          alt="What we do background"
          fill
          className="object-cover object-center"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 space-y-6">
          <h3 className="text-white text-[26px] lg:text-[32px] font-semibold">
            {section.title}
          </h3>

          {section.describation.map((desc, idx) => (
            <p key={idx} className="text-white text-[16px] lg:text-[24px]">
              {desc}
            </p>
          ))}

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {section.cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
              >
                <h4 className="text-[#4BBA72] font-bold text-[22px] lg:text-[24px] mb-2">
                  {card.title}
                </h4>
                <p className="text-[#909090] text-[15px]">{card.describation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
