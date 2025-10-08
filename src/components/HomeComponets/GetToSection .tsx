"use client";

import React from "react";
import Title from "../layouts/Title";

interface GetToSectionProps {
  data: {
    title: string;
    subTitle: string;
    describation: string[];
  };
}

const GetToSection = ({ data }: GetToSectionProps) => {
  return (
    <section className="">
      <div className=" mx-auto text-left">
        <Title title={data.title} subTitle={data.subTitle} />

        <div className="mt-6 space-y-6 text-[#909090] text-base sm:text-lg">
          {data.describation.map((desc, idx) => (
            <p key={idx} className="leading-relaxed">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetToSection;
