"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Title from "../layouts/Title";

interface WorkCard {
  id: number;
  backgroundImage: StaticImageData;
  title: string;
  describation?: string;
  descibation?: string; // Handle typo in data
}

interface WorkEnvironmentProps {
  title: string;
  subTitle: string;
  describation: string;
  cards: WorkCard[];
}

const WorkEnvironment: React.FC<WorkEnvironmentProps> = ({
  title,
  subTitle,
  describation,
  cards,
}) => {
  return (
    <section className="w-full px-4 lg:px-20  py-10 bg-gray-50 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mx-auto mb-16">
        <Title title={title} subTitle={subTitle} />
        <p className="text-[#909090] text-left mt-4 leading-relaxed">
          {describation}
        </p>
      </div>

      <div className="lg:px-24">

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative z-10">
          {cards.map((card: WorkCard, index: number) => (
            <motion.div
              key={card.id}
              className={`relative ${
                index === 0 ? "md:mt-30" : index === 1 ? "md:-mt-30" : "md:mt-30"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className=" overflow-hidden relative">
                <Image
                  src={card.backgroundImage}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover rounded-[20px]"
                />

                <div className="relative z-10  p-8 h-full flex flex-col justify-end">
                  <div className="bg-[#4BBA72]/60 rounded-xl p-6 py-20 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      {card.describation || card.descibation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironment;
