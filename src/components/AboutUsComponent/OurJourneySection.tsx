"use client";

import React from "react";
import { motion } from "framer-motion";
import TitleTwo from "../layouts/TitleTwo";

interface OurJourneyProps {
  title: string;
  subTitle: string;
  describation: string;
}

export default function OurJourneySection({
  title,
  subTitle,
  describation,
}: OurJourneyProps) {
  return (
    <section className=" overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center space-y-6  px-4">
        <TitleTwo title={title} subTitle={subTitle} />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[#909090] text-[16px] lg:text-[19px] mx-auto px-4 lg:px-20 text-center"
      >
        {describation}
      </motion.p>
    </section>
  );
}
