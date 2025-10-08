"use client";

import BannerComponent from "@/components/InitiativeComponent/BannerComponent";
import InitiativeSection from "@/components/InitiativeComponent/InitiativeSection";
import { InitiativesPageData } from "@/data/InitiativesPageData";
import { useEffect, useRef } from "react";

export default function InitiativesPage() {
  const { BannerSection, Initiatives } = InitiativesPageData;

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
    <div className="w-full">
      <div className="initiative-section">
        <BannerComponent
          bannerData={BannerSection}
          scrollRef={firstSectionRef}
        />
      </div>

      <div className="w-full">
        {Initiatives.map((initiative, index) => (
          <div
            key={initiative.id}
            className="initiative-section min-h-screen"
            ref={index === 0 ? firstSectionRef : null}
          >
            <InitiativeSection initiative={initiative} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
