"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

// Interfaces
interface BrangeDetail {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface BannerSectionProps {
  data: {
    Banner: StaticImageData;
    MobileBanner: StaticImageData;
    alt: string;
    brangeDetails: BrangeDetail[];
  };
}

const BannerSection: React.FC<BannerSectionProps> = ({ data }) => {
  const { Banner, MobileBanner, alt, brangeDetails } = data;

  const control = useAnimation();
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        control.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [control]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* === Background Image === */}
      <div className="absolute inset-0">
        <Image
          src={Banner}
          alt={alt}
          fill
          className="hidden sm:block object-cover"
          priority
        />
        <Image
          src={MobileBanner}
          alt={alt}
          fill
          className="block sm:hidden object-contain"
          priority
        />
      </div>

      {/* === Scroll-Reveal Green Section over Image === */}
      <motion.div
        ref={triggerRef}
        className="absolute bottom-0 left-0 right-0 z-20 w-full bg-[#4BBA72] text-white py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-16 rounded-t-[40px] sm:rounded-t-[60px] hidden lg:block"
        initial={{ opacity: 0, y: 100 }}
        animate={control}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {brangeDetails.map((item, index) => (
              <motion.div
                key={item.id}
                className="text-white rounded-xl p-4 sm:p-6 border border-white text-center flex flex-col justify-between min-h-[200px] sm:min-h-[220px]"
                initial={{ opacity: 0, y: 30 }}
                animate={control}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base mb-4 opacity-90">
                    {item.description}
                  </p>
                </div>
                <Link
                  href={item.link}
                  className="text-white text-base sm:text-lg font-semibold hover:underline transition-all duration-300 hover:opacity-80 mt-auto"
                >
                  Know More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BannerSection;