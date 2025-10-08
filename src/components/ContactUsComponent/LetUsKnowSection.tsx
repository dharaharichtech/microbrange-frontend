"use client";

import React from "react";
import Image from "next/image";
import Title from "../layouts/Title";
import Link from "next/link";

interface SectionData {
  title: string;
  bg:string;
  description: string;
  icon: string;
  highlight?: string | null;
  linkText?: string;
  link?: string;
  phone?: string;
  emails?: string[];
}

interface LetUsKnowProps {
  title:string;
  subTitle:string;
  sections: SectionData[];
}

const LetUsKnowSection: React.FC<LetUsKnowProps> = ({ sections , title , subTitle}) => {
  return (
    <section className="bg-white  px-4 md:px-20">
      <div className="text-center mb-12">
        <Title title={title} subTitle={subTitle}/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 text-left"
          >
            <div className={`w-16 h-16 rounded-md ${item.bg} flex items-center justify-center`}>
              <Image src={item.icon} alt={item.title} width={30} height={30} />
            </div>
            <div>
              <h4 className="font-bold text-[18px] lg:text-[20px] mb-4">{item.title}</h4>
              <p className="text-[16px] text-[#2D2D2D] mb-2">{item.description}</p>

              {item.link && item.linkText && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] text-[#2D2D2D] font-semibold underline"
                >
                  {item.linkText}
                </Link>
              )}

              {item.phone && (
                <p className="text-[16px] font-semibold text-[#2D2D2D]">
                  {item.phone}
                </p>
              )}

              {item.emails && (
                <div className="text-[16px] font-bold text-[#2D2D2D]">
                  {item.emails.map((email, i) => (
                    <p key={i}>{email}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LetUsKnowSection;
