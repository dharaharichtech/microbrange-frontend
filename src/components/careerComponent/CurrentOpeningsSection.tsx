"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import { MoveUpRight } from 'lucide-react';


interface OpeningType {
  id: number;
  title: string;
  icon: StaticImageData;
  describation: string;
  btn: string;
}

interface CurrentOpeningsSectionProps {
  title: string;
  subTitle: string;
  describation: string[];
  opening: OpeningType[];
}

const CurrentOpeningsSection: React.FC<CurrentOpeningsSectionProps> = ({
  title,
  subTitle,
  describation,
  opening,
}) => {
  return (
    <section className="py-20 px-4 md:px-20  text-[#1A1A1A] bg-[#EDFFF3]">
      <div className="flex mx-auto py-10">
        {/* Heading */}
        <div className="mb-8 w-1/3">
         <Title title={title}  subTitle={subTitle}/>
        </div>

        {/* Description */}
        <div className="space-y-4  w-2/3">
          {describation.map((desc, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-gray-700 leading-relaxed"
            >
              {desc}
            </p>
          ))}
        </div>

        {/* Job Openings */}
      
      </div>
        <div className="space-y-4 ">
          {opening.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-4 md:px-8 rounded-lg shadow-sm"
            >
              <div className="flex items-start md:items-center gap-4">
                <div className="  rounded-[10px] bg-[#4BBA72] ">
                  <Image
                    src={item.icon}
                    alt="Icon"
                    width={40}
                    height={40}
                    className="object-contain m-3"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.describation}</p>
                </div>
              </div>

              <button className="mt-4 md:mt-0 bg-[#4BBA72] text-white px-5 py-2 rounded-md text-sm flex items-center gap-1 font-medium transition text-[16px]">
                {item.btn}
               <MoveUpRight/>
              </button>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default CurrentOpeningsSection;
