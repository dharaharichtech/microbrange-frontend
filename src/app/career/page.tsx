"use client";
import CurrentOpeningsSection from "@/components/careerComponent/CurrentOpeningsSection";
import DedicatedSection from "@/components/careerComponent/DedicatedSection";
import WorkBenefitSection from "@/components/careerComponent/WorkBenefitSection";
import WorkEnvironment from "@/components/careerComponent/WorkEnvironment";
import ResumeUploadSection from "@/components/careerComponent/ResumeUploadSection";
import BannerComponent from "@/components/InitiativeComponent/BannerComponent";
import { CareerData } from "@/data/CareerData";
import { useEffect, useRef } from "react";
import WorkEnvironmentGallery from "@/components/careerComponent/WorkEnvironmentGallery";

export default function ContactPage() {
  const { BannerSection, workEnviroment, benifitsSection } = CareerData;
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
    <>
      <div className="initiative-section">
        <BannerComponent
          bannerData={BannerSection}
          scrollRef={firstSectionRef}
        />
      </div>

      <div
        className="initiative-section  w-full justify-center "
        ref={firstSectionRef}
      >
        <WorkEnvironment
          title={workEnviroment.title}
          subTitle={workEnviroment.subTitle}
          describation={workEnviroment.describation}
          cards={workEnviroment.cards}
        />
      </div>
      <div className="initiative-section  w-full justify-center ">
        <WorkBenefitSection
          title={benifitsSection.title}
          subTitle={benifitsSection.subTitle}
          describation={benifitsSection.describation}
          benifitsArray={benifitsSection.benifitsArray}
        />
      </div>
      <div className="initiative-section  w-full justify-center ">
        <DedicatedSection
          title={CareerData.dedicatedSection.title}
          subTitle={CareerData.dedicatedSection.subTitle}
          describation={CareerData.dedicatedSection.describation}
          cards={CareerData.dedicatedSection.cards}
        />
      </div>
      <div className="initiative-section  w-full justify-center ">
        <CurrentOpeningsSection
          title={CareerData.currentOpenSection.title}
          subTitle={CareerData.currentOpenSection.subTitle}
          describation={CareerData.currentOpenSection.describation}
          opening={CareerData.currentOpenSection.opening}
        />
      </div>
      <div className="initiative-section  w-full justify-center ">
        <ResumeUploadSection
          title={CareerData.resumeSection.title}
          describation={CareerData.resumeSection.describation}
          btn={CareerData.resumeSection.btn}
          rightImage={CareerData.resumeSection.rightImage}
        />
      </div>
      <div className="initiative-section w-full justify-center">
        <WorkEnvironmentGallery
          title={CareerData.environmentSection.title}
          subTitle={CareerData.environmentSection.subTitle}
          Images={CareerData.environmentSection.Images}
        />
      </div>
    </>
  );
}
