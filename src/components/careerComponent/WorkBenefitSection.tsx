/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "../layouts/Title";

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  describation: string;
}

interface WorkBenefitSectionProps {
  title: string;
  subTitle: string;
  describation: string;
  benifitsArray: Benefit[];
}

const WorkBenefitSection: React.FC<WorkBenefitSectionProps> = ({
  title,
  subTitle,
  describation,
  benifitsArray,
}) => {
  const renderIcon = (icon: React.ReactNode) => {
    if (icon && typeof icon === "object" && "src" in icon) {
      return (
        <Image
          src={(icon as any).src}
          alt="benefit icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      );
    }
    return icon;
  };

  // Group benefits into chunks of 4
  const chunkBenefits = (arr: Benefit[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const groupedBenefits = chunkBenefits(benifitsArray, 4);

  return (
    <section className="bg-[#f2fff6] py-20 px-4 md:px-20">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <Title title={title} subTitle={subTitle} />
          <p className="text-[#606060] text-base leading-relaxed">
            {describation}
          </p>
        </div>

        {/* Right Content - Swiper */}
        <div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {groupedBenefits.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {group.map((benefit) => (
                    <motion.div
                      key={benefit.id}
                      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: benefit.id * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 rounded-md flex items-center justify-center bg-[#f0f5ff] text-green-600">
                        {renderIcon(benefit.icon)}
                      </div>
                      <h3 className="font-semibold text-md">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">
                        {benefit.describation}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WorkBenefitSection;
