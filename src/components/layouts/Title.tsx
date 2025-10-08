import React from "react";

interface TitleProps {
  title: string;
  subTitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <div className="mb-6">
      <h2 className="flex items-center text-[24px] lg:text-[32px] font-bold text-left text-[#2D2D2D] gap-2 mb-2">
        {title}
        <div className="flex flex-col gap-3">
          <div className="w-12 h-[3px] lg:h-[4px] bg-[#FFEB9D]"></div>
          <div className="w-24 h-[3px] lg:h-[4px] bg-[#FFEB9D]"></div>
        </div>
      </h2>

      <p className="text-[30px] lg:text-[48px] font-bold text-left text-[#4BBA72]">{subTitle}</p>
    </div>
  );
};

export default Title;
