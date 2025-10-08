"use client";

import { useEffect, useRef, useState } from "react";
import { MoveUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Type definitions
interface InitiativeLeftSection {
  bg: string;
  iconLogo: StaticImageData;
  describation: string[];
  btn: {
    text: string;
    link: string;
  };
}

interface InitiativeRightSection {
  Image: StaticImageData;
}

interface InitiativeType {
  id: number;
  leftSection: InitiativeLeftSection;
  rightSection: InitiativeRightSection;
}

interface InitiativeSectionProps {
  initiative: InitiativeType;
  index: number;
}

const InitiativeSection: React.FC<InitiativeSectionProps> = ({
  initiative,
  index,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven: boolean = index % 2 === 0;

  return (
    <div
      ref={sectionRef}
      className={`min-h-screen w-full flex items-center justify-center   transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="w-full mt-10">
        <div className={`flex flex-col lg:flex-row items-center gap-0 ${
          isEven ? "" : "lg:flex-row-reverse"
        }`}>
          {/* Left Section - Content */}
          <div className="w-full h-[100dvh] lg:h-[100vh] lg:w-1/2">
            <div className={`${initiative.leftSection.bg} h-full flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-16  `}>
              {/* Logo using next/image */}
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <Image
                  src={initiative.leftSection.iconLogo}
                  alt="Initiative Logo"
               
                  className="object-contain "
                />
              </div>

              {/* Description */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-8">
                {initiative.leftSection.describation.map(
                  (desc: string, idx: number) => (
                    <p
                      key={idx}
                      className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
                    >
                      {desc}
                    </p>
                  )
                )}
              </div>

              {/* Button */}
              <Link href={initiative.leftSection.btn.link}>
                <span className="inline-flex items-center gap-2 bg-[#4BBA72] rounded-[10px] text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold transition-all duration-300 transform  cursor-pointer">
                  {initiative.leftSection.btn.text}
                  <MoveUpRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="overflow-hidden w-full h-[100dvh] lg:h-[100dvh] ">
                <Image
                  src={initiative.rightSection.Image}
                  alt={`Initiative ${initiative.id}`}
                  fill
                  className="object-cover transition-transform duration-300 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiativeSection;