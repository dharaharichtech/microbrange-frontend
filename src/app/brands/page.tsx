"use client";

import BrandSection from "@/components/BrandsComponets/BrandSection";
import { BrandsData } from "@/data/BrandsData";

export default function Brands() {
  return (
    <main className="bg-white overflow-x-hidden py-30 px-4 sm:px-6 lg:px-16">
      <BrandSection brands={BrandsData.brands} />
    </main>
  );
}
