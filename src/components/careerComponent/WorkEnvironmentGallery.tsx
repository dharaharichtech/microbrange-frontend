"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "../layouts/Title";

interface ImageType {
  image: StaticImageData;
  alt: string;
}

interface WorkEnvironmentGalleryProps {
  title: string;
  subTitle: string;
  Images: ImageType[]; //comment
}

const WorkEnvironmentGallery: React.FC<WorkEnvironmentGalleryProps> = ({
  title,
  subTitle,
  Images,
}) => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <div className=" mx-auto">
        {/* Heading */}
        <div className="mb-10">
         <Title title={title} subTitle={subTitle} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {Images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-sm">
              <Image
                src={img.image}
                alt={img.alt}
                className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironmentGallery;
