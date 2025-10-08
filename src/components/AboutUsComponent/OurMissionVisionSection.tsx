"use client";

import Image from "next/image";
import React from "react";
import Title from "../layouts/Title";

interface MissionVisionCard {
  icon: string;
  title: string;
  describation: string;
}

interface Props {
  title: string;
  subTitle: string;
  missionCard: MissionVisionCard;
  visionCard: MissionVisionCard;
}

export default function OurMissionVisionSection({
  title,
  subTitle,
  missionCard,
  visionCard,
}: Props) {
  return (
    <section>
      <div className="text-center">
        <Title title={title} subTitle={subTitle} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-26 mt-8">
        {/* Mission Card */}
        <div className="bg-[#EDFFF3] p-12 rounded-lg shadow-sm text-left">
         
          <div className="flex justify-left mb-4">
            <Image
              src={missionCard.icon}
              alt="Mission Icon"
              width={80}
              height={80}
            />
          </div>
           <h3 className="text-[#4BBA72] text-[30px] font-semibold mb-4">
            {missionCard.title}
          </h3>
          <p className="text-[#909090] text-[15px]">{missionCard.describation}</p>
        </div>

        {/* Vision Card */}
        <div className="bg-[#EDFFF3] p-12 rounded-lg shadow-sm text-left">
      
          <div className="flex justify-left mb-4">
            <Image
              src={visionCard.icon}
              alt="Vision Icon"
              width={80}
              height={80}
            />
          </div>
              <h3 className="text-[#4BBA72] text-[30px] font-semibold mb-4">
            {visionCard.title}
          </h3>
          <p className="text-[#909090] text-[15px]">{visionCard.describation}</p>
        </div>
      </div>
    </section>
  );
}
