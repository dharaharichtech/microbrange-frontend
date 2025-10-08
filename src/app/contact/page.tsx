"use client";

import BannerComponent from "@/components/InitiativeComponent/BannerComponent";
import { useEffect, useRef } from "react";
import { ContactUsData } from "@/data/ContactData";
import LetUsKnowSection from "@/components/ContactUsComponent/LetUsKnowSection";
import GetStartedSection from "@/components/ContactUsComponent/GetStartedSection";
import MapPage from "@/components/ContactUsComponent/MapPage";


export default function ContactPage() {
  const { BannerSection } = ContactUsData;
  const firstSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent): void => {
      if (Math.abs(e.deltaY) > 50) {
        e.preventDefault();
        const sections: NodeListOf<Element> = document.querySelectorAll(
          ".initiative-section"
        );

        const currentSection: Element | undefined = Array.from(sections).find(
          (section: Element) => {
            const rect: DOMRect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
        );

        if (currentSection) {
          const currentIndex: number =
            Array.from(sections).indexOf(currentSection);
          let targetIndex: number = currentIndex;

          if (e.deltaY > 0 && currentIndex < sections.length - 1) {
            targetIndex = currentIndex + 1;
          } else if (e.deltaY < 0 && currentIndex > 0) {
            targetIndex = currentIndex - 1;
          }

          if (targetIndex !== currentIndex) {
            sections[targetIndex].scrollIntoView({ behavior: "smooth" });
          }
          if (targetIndex === sections.length - 1) {
            window.removeEventListener("wheel", handleWheel);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="bg-white">
      <div className="initiative-section h-screen">
        <BannerComponent
          bannerData={BannerSection}
          scrollRef={firstSectionRef}
        />
      </div>
      <div
        ref={firstSectionRef}
        className="initiative-section min-h-screen flex items-center justify-center"
      >
        <LetUsKnowSection
          sections={ContactUsData.letusKnown.sections}
          title={ContactUsData.letusKnown.title}
          subTitle={ContactUsData.letusKnown.subtitle}
        />
      </div>
      <div
        className="initiative-section min-h-screen flex items-center justify-center"
      >
        <GetStartedSection
          title={ContactUsData.getStart.title}
          subTitle={ContactUsData.getStart.subTitle}
          socialMediaIcons={ContactUsData.getStart.socialMediaIcons}
          form={ContactUsData.getStart.form}
        />
      </div>
      <div
        className="initiative-section h-screen "
      >
       <MapPage/>
      </div>
    </main>
  );
}
