"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import NextBlogSvg from "../../../public/CommonSvg/next-blog.svg";
import PrevBlogSvg from "../../../public/CommonSvg/prev-blog.svg";
import Title from "../layouts/Title";

interface Blog {
  id: number;
  image: StaticImageData;
  alt: string;
  title: string;
  date: string;
  slug?: string; // Add slug for routing
}

interface BlogSectionProps {
  data: {
    title: string;
    subTitle: string;
    blogs: Blog[];
  };
}

const BlogSection: React.FC<BlogSectionProps> = ({ data }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Memoized animation variants
  const containerVariants = useMemo(() => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }), []);

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      } 
    },
  }), []);

  // Custom navigation handlers
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="w-full  px-4 sm:px-6 lg:px-8 xl:px-16 py-8 sm:py-12 lg:py-16 bg-[#EDFFF3]">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <div className="mb-4 sm:mb-0">
         <Title title={data.title} subTitle={data.subTitle} />
        </div>
        
        {/* Navigation Buttons - Hide on small screens, show on medium and up */}
        <div className="hidden sm:flex gap-2 lg:gap-3 flex-shrink-0">
          <button 
            onClick={handlePrevSlide}
            aria-label="Previous Blog"
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <Image 
              src={PrevBlogSvg} 
              alt="Previous" 
              width={32} 
              height={32}
              className="lg:w-12 lg:h-12" 
            />
          </button>
          <button 
            onClick={handleNextSlide}
            aria-label="Next Blog"
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <Image 
              src={NextBlogSvg} 
              alt="Next" 
              width={32} 
              height={32}
              className="lg:w-12 lg:h-12" 
            />
          </button>
        </div>
      </div>

      {/* Blog Cards Container with Swiper */}
      <div className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={data.blogs.length > 3}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.swiper-pagination-mobile',
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="pb-4 sm:pb-0"
          >
            {data.blogs.map((blog, index) => (
              <SwiperSlide key={blog.id} className="h-auto">
                <motion.article
                  variants={cardVariants}
                  className="bg-white  shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group h-full cursor-pointer transform hover:scale-105"
                >
                  {/* Image Container */}
                  <div className="relative w-full  h-80  overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      priority={index < 3}
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-4 sm:p-5 xl:p-6 flex flex-col justify-between h-[140px] sm:h-[150px] xl:h-[160px]">
                    <h3 className="text-base sm:text-lg xl:text-xl font-semibold text-gray-800 overflow-hidden text-ellipsis group-hover:text-green-600 transition-colors duration-200 leading-tight line-clamp-2">
                      {blog.title}
                    </h3>
                    <time className="text-xs sm:text-sm xl:text-base text-gray-500 mt-2 sm:mt-3 font-medium">
                      {blog.date}
                    </time>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination - Only visible on mobile */}
          <div className="swiper-pagination-mobile flex justify-center mt-6 sm:hidden">
            {/* Pagination dots will be automatically generated by Swiper */}
          </div>
        </motion.div>
      </div>
      
      {/* Tailwind styles for pagination bullets */}
      <style jsx>{`
        .swiper-pagination-bullet-custom {
          @apply w-2.5 h-2.5 bg-green-600 opacity-30 rounded-full mx-1 transition-all duration-300 ease-in-out;
        }
        .swiper-pagination-bullet-active-custom {
          @apply opacity-100 scale-110;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;