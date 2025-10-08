import React from "react";

interface TitleTwoProps {
  title: string;
  subTitle: string;
}

const TitleTwo: React.FC<TitleTwoProps> = ({ title, subTitle }) => {
  return (
    <div className="mb-6">
      <div className="text-center">
        <h4 className="text-lg font-semibold text-gray-800 flex justify-center items-center">
          {/* Left decorative lines - now touching title */}
          <div className="flex flex-col gap-3 items-end">
            <div className="w-10 lg:w-12 h-[3px] lg:h-[4px] bg-[#FFEB9D]"></div>
            <div className="w-18 lg:w-24 h-[3px] lg:h-[4px] bg-[#FFEB9D]"></div>
          </div>

          {/* Title with no side gaps */}
          <span className="whitespace-nowrap px-0 mx-2 text-[#2D2D2D] text-[20px] lg:text-[32px]">{title}</span>

          <div className="flex flex-col gap-3">
            <div className="w-10 lg:w-12 h-[3px] lg:h-[4px] bg-[#FFEB9D]"></div>
            <div className="w-18 lg:w-24 h-[3px] lg:h-[4px] bg-[#FFEB9D]"></div>
          </div>
        </h4>

        {/* Subtitle */}
        <h2 className="text-[26px]  lg:text-[48px] font-bold text-[#4BBA72]">
          {subTitle}
        </h2>
      </div>
    </div>
  );
};

export default TitleTwo;
