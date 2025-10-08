"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import TitleTwo from "../layouts/TitleTwo";

// Types
interface CardType {
  id: number;
  icon: StaticImageData; // SVG image
  title: string;
  describation: string;
}

interface DedicatedSectionProps {
  title: string;
  subTitle: string;
  describation: string;
  cards: CardType[];
}

const DedicatedSection: React.FC<DedicatedSectionProps> = ({
  title,
  subTitle,
  describation,
  cards,
}) => {
  return (
    <section className="py-20 px-4 md:px-16 lg:px-24 bg-[#f8fffa]">
      <div className=" mx-auto">
        {/* Title */}
        <TitleTwo title={title} subTitle={subTitle} />
        <p className="text-[#606060] text-center max-w-2xl mx-auto text-base leading-relaxed mb-12 px-4">
          {describation}
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center items-start mt-20">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              className={`relative bg-[#EDFFF3] rounded-xl px-6 py-8 shadow-md text-center flex flex-col justify-start items-center transition-all duration-300 h-[50vh] w-full max-w-sm mx-auto ${
                i % 2 === 0 ? "mt-4 md:mt-10" : "mt-4 md:-mt-10"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-[#4BBA72] text-[16px]  lg:text-[20px] mb-2">
                {card.title}
              </h3>
              <p className="text-[14px] lg:text-[16px] text-[#909090] leading-relaxed">
                {card.describation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DedicatedSection;
