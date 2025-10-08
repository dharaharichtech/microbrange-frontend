import React from "react";
import Image from "next/image";
import { levelUpData } from "@/data/levelUpData";
import Title from "@/components/layouts/Title";
import RightBackground from "../../../../public/Image/HomepageImages/LevelData/right-backgound.png";
import LeftBackground from "../../../../public/Image/HomepageImages/LevelData/left-background.png";

export async function generateStaticParams() {
  return levelUpData.data.map((item) => ({
    slug: item.type
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, ""),
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const LevelUpPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const pageData = levelUpData.data.find(
    (item) =>
      item.type
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "") === slug
  );

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600">
            The requested page could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen mt-36 px-4 lg:px-16 bg-white overflow-hidden">
      {/* === Background Decorations === */}
      <Image
        src={LeftBackground}
        alt="Left background"
        className="hidden md:block absolute bottom-0 left-0 w-40 lg:w-60 z-0"
      />
      <Image
        src={RightBackground}
        alt="Right background"
        className="hidden md:block absolute top-0 right-0 w-40 lg:w-60 z-0"
      />

      {/* === Content === */}
      <div className="relative z-10">
        {/* Title + Subtitle */}
        <section className="text-center px-4">
          <Title title={pageData.title} subTitle={pageData.subTitle} />
        </section>

        {/* Title Image */}
        {pageData.titleImage && (
          <div className="text-left my-6">
            <Image src={pageData.titleImage} alt={pageData.title} />
          </div>
        )}

        {/* Banner Section */}
        <div className="hidden md:block relative h-[400px] lg:h-[500px]">
          <Image
            src={pageData.Banner}
            alt={pageData.alt || pageData.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="md:hidden relative h-[300px]">
          <Image
            src={pageData.mobileBanner}
            alt={pageData.alt || pageData.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Description & Points */}
        <section className="py-12 lg:py-16">
          <div>
            {/* Description */}
            <div className="space-y-6 mb-12">
              <div className="space-y-4">
                {pageData.describation.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[#909090] text-[15px] leading-relaxed text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Features / Points */}
            <div>
              <div className="space-y-4">
                {pageData.points.map((point) => (
                  <div key={point.id} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-4 h-4">
                      <Image
                        src={point.bulletSvg}
                        alt="bullet point"
                        width={32}
                        height={32}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-[#2D2D2D] font-medium text-[24px]">
                      {point.pointName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LevelUpPage;
