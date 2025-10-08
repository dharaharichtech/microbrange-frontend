"use client";

import BannerSection from "@/components/HomeComponets/BannerSection";
import BiotechSection from "@/components/HomeComponets/BiotechSection";
import BlogSection from "@/components/HomeComponets/BlogSection";
import GetToSection from "@/components/HomeComponets/GetToSection ";
import JourneySection from "@/components/HomeComponets/JourneySection ";
import LevelUpSection from "@/components/HomeComponets/LevelUpSection";

import { HomePageData } from "@/data/HomePageData";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="mx-auto">
        <section className="min-h-screen">
          <BannerSection data={HomePageData.BannerSection} />
        </section>

        <section className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-20">
          <LevelUpSection data={HomePageData.LevelUpSection} />
          <BiotechSection data={HomePageData.biotechSection} />
          <GetToSection data={HomePageData.getToSection} />
          <JourneySection data={HomePageData.journySection} />
        </section>
        <section className="min-h-screen">
          <BlogSection data={HomePageData.blogSection} />
        </section>
      </div>
    </main>
  );
}
