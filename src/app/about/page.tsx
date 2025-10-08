"use client";

import BannerAbouts from "@/components/AboutUsComponent/BannerAbouts";
import OurJourneySection from "@/components/AboutUsComponent/OurJourneySection";
import OurMissionVisionSection from "@/components/AboutUsComponent/OurMissionVisionSection";
import OurWorkForceSection from "@/components/AboutUsComponent/OurWorkForceSection";
import TimelineSection from "@/components/AboutUsComponent/TimelineSection";
import WeProvideSection from "@/components/AboutUsComponent/WeProvideSection";
import WhatWeDoSection from "@/components/AboutUsComponent/WhatWeDoSection";
import WhoWeAreSection from "@/components/AboutUsComponent/WhoWeAreSection";
import WhyChooseUsSection from "@/components/AboutUsComponent/WhyChooseUsSection";
import { AboutUsData } from "@/data/AboutUsData";

export default function About() {
  return (
    <main className="bg-white overflow-x-hidden">
      <div className="mx-auto">
        <BannerAbouts data={AboutUsData} />

        <section className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-20">
          <WhoWeAreSection data={AboutUsData.whoWeAreSection} />
          <WhatWeDoSection data={AboutUsData.whatWeDo} />
        </section>

        <OurJourneySection
          title={AboutUsData.ourJounarySection.title}
          subTitle={AboutUsData.ourJounarySection.subTitle}
          describation={AboutUsData.ourJounarySection.describation}
        />
      </div>

      <TimelineSection timeLines={AboutUsData.ourJounarySection.timeLines} />
      <section className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-20">
        <OurWorkForceSection
          titleImage={AboutUsData.workForce.titleImage}
          describation={AboutUsData.workForce.describation}
          teamMembers={AboutUsData.workForce.teamMembers}
        />
      </section>
      <WeProvideSection sections={AboutUsData.weProvide.sections} />

      <section className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-20">
        <OurMissionVisionSection
          title={AboutUsData.ourMissionAndVision.title}
          subTitle={AboutUsData.ourMissionAndVision.subTitle}
          missionCard={AboutUsData.ourMissionAndVision.missionCard}
          visionCard={AboutUsData.ourMissionAndVision.visionCard}
        />
        <WhyChooseUsSection data={AboutUsData.whyChooseUs} />
      </section>
    </main>
  );
}
