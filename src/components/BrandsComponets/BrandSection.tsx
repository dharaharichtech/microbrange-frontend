"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { MoveUpRight } from "lucide-react";

interface Icon {
  id: number;
  icon: StaticImageData;
  alt: string;
}

interface Brand {
  id: number;
  leftSection: {
    titleIconSvq: StaticImageData;
    describation: string[];
    icons: Icon[];
    btnRedirect: string;
  };
  rightSection: {
    image: StaticImageData;
    alt: string;
  };
}

interface BrandSectionProps {
  brands: Brand[];
}

const BrandSection: React.FC<BrandSectionProps> = ({ brands }) => {
  return (
    <div className="bg-white">
      {brands.map((brand, index) => (
        <section
          key={brand.id}
          className={`flex flex-col lg:flex-row items-center justify-between gap-10 mb-20   ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Left Content */}
          <div className="w-1/2 space-y-6">
            <Image src={brand.leftSection.titleIconSvq} alt="Brand Logo" />
            <div className="text-[#4BBA72] space-y-4 text-[15px]">
              {brand.leftSection.describation.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {brand.leftSection.icons.map((icon) => (
                <div
                  key={icon.id}
                  className="w-30 h-30 rounded-full flex items-start justify-start p-3 bg-white"
                >
                  <Image
                    src={icon.icon}
                    alt={icon.alt}
                    width={100}
                    height={50}
                  />
                </div>
              ))}
            </div>

            <Link
              href={brand.leftSection.btnRedirect}
              className="inline-flex items-center gap-2 mt-6 bg-[#4BBA72] text-white px-6 py-3 rounded-[10px] font-medium transition hover:bg-green-700"
            >
              Visit Our Product
              <MoveUpRight className="w-6 h-6" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-1/2">
            <Image
              src={brand.rightSection.image}
              alt={brand.rightSection.alt}
              className="w-full h-[70vh] object-contain"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default BrandSection;
