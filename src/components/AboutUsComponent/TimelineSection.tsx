"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  content: string;
  position: "top" | "bottom" | string;
}

interface TimelineSectionProps {
  timeLines: TimelineItem[];
  forceFullscreen?: boolean;
}

export default function TimelineSection({ timeLines, forceFullscreen = false }: TimelineSectionProps) {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Custom scroll behavior
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current || isMobile) return;
      
      const container = scrollContainerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const currentScrollLeft = container.scrollLeft;
      
      // Prevent default scroll behavior
      e.preventDefault();
      
      if (e.deltaY > 0) {
        // Scrolling down
        if (currentScrollLeft < maxScrollLeft) {
          // Still space to scroll horizontally
          container.scrollLeft += 50;
        } else {
          // Horizontal scroll is at end, allow vertical scroll
          window.scrollBy(0, 50);
        }
      } else {
        // Scrolling up
        if (currentScrollLeft > 0) {
          // Still space to scroll horizontally backwards
          container.scrollLeft -= 50;
        } else {
          // Horizontal scroll is at start, allow vertical scroll
          window.scrollBy(0, -50);
        }
      }
    };

    const timelineElement = timelineRef.current;
    if (timelineElement) {
      timelineElement.addEventListener('wheel', handleWheel, { passive: false });
      return () => timelineElement.removeEventListener('wheel', handleWheel);
    }
  }, [isMobile]);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute("data-id");
            if (itemId) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, itemId]));
              }, 200);
            }
          }
        });
      },
      { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" }
    );

    const timelinePoints = document.querySelectorAll("[data-timeline-point]");
    timelinePoints.forEach((point) => observer.observe(point));

    return () => observer.disconnect();
  }, []);

  // Auto-scroll to start
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, []);

  const openModal = (item: TimelineItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ''; // Re-enable scrolling
    setTimeout(() => setSelectedItem(null), 300);
  };

  const containerClasses = forceFullscreen
    ? "fixed inset-0 bg-white z-50 flex flex-col"
    : "w-full h-screen";

  const timelineContainerClasses = forceFullscreen
    ? "flex-1 overflow-hidden relative"
    : "h-full overflow-hidden relative";

  return (
      <section className={containerClasses}>
      {/* Scroll prompt */}
    
      <div className={timelineContainerClasses} ref={timelineRef}>
        <div
          ref={scrollContainerRef}
          className="h-full overflow-x-auto overflow-y-hidden touch-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200"
        >
          <div
            className="h-full relative"
            style={{
              width: isMobile ? `${timeLines.length * 350}px` : `${timeLines.length * 500}px`,
              minWidth: "100%",
            }}
          >
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#4BBA72] transform -translate-y-1/2 z-10"></div>

            {/* Animated Progress */}
            <motion.div
              className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transform -translate-y-1/2 z-20 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(visibleItems.size / timeLines.length) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="absolute right-0 top-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-y-1/2 translate-x-1/2">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30"></div>
              </div>
            </motion.div>

            {/* Timeline Items */}
            <div className="h-full flex">
              {timeLines.map((item, index) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 h-full flex flex-col justify-center items-center relative"
                  style={{ width: isMobile ? "350px" : "500px" }}
                >
                  <motion.div
                    data-timeline-point
                    data-id={item.id}
                    className="relative z-30 cursor-pointer group"
                    onClick={() => visibleItems.has(item.id) && openModal(item)}
                    whileHover={{ scale: isMobile ? 1.1 : 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full border-4 border-white transition-all duration-700 ease-out ${
                        visibleItems.has(item.id)
                          ? "bg-gradient-to-r from-green-400 to-emerald-500"
                          : "bg-gray-300"
                      }`}
                      animate={{
                        scale: visibleItems.has(item.id) ? 1 : 0.75,
                        opacity: visibleItems.has(item.id) ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.7, delay: index * 0.1 }}
                    >
                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-300 ${
                          visibleItems.has(item.id)
                            ? "bg-green-400 animate-ping opacity-30"
                            : ""
                        }`}
                      ></div>
                      <div className={`absolute ${isMobile ? 'inset-2' : 'inset-3'} bg-white rounded-full flex items-center justify-center`}>
                        <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-bold text-green-600`}>
                          {index + 1}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Timeline Card */}
                  {visibleItems.has(item.id) && (
                    <motion.div
                      initial={{ opacity: 0, y: item.position === "top" ? -50 : 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                      className={`absolute ${
                        item.position === "top" 
                          ? `bottom-1/2 ${isMobile ? 'mb-16' : 'mb-20'}` 
                          : `top-1/2 ${isMobile ? 'mt-16' : 'mt-20'}`
                      } ${isMobile ? 'w-80 mx-4' : 'w-96'}`}
                    >
                      <motion.div
                        className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#4BBA72] cursor-pointer transition-all duration-500 shadow-lg"
                        onClick={() => openModal(item)}
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[#4BBA72] font-bold text-sm md:text-base lg:text-lg">
                              {item.title}
                            </span>
                          </div>
                        </div>
                        <p className="text-[#909090] text-sm md:text-base mb-4 leading-relaxed">
                          {item.content.substring(0, isMobile ? 100 : 120)}...
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 flex items-center">
                            Read more
                            <svg
                              className="w-3 h-3 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-[#4BBA72] rounded-full"></div>
                            <div className="w-1 h-1 bg-[#4BBA72] rounded-full"></div>
                            <div className="w-1 h-1 bg-[#4BBA72] rounded-full"></div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Arrow */}
                      <div
                        className={`absolute ${
                          item.position === "top" ? "top-full" : "bottom-full"
                        } left-1/2 transform -translate-x-1/2`}
                      >
                        <div
                          className={`w-0 h-0 ${
                            item.position === "top"
                              ? "border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-white/95"
                              : "border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-white/95"
                          } drop-shadow-lg`}
                        ></div>
                      </div>
                    </motion.div>
                  )}

                  {/* Date Tag */}
                  {visibleItems.has(item.id) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                      className={`absolute ${
                        item.position === "top" 
                          ? `top-1/2 ${isMobile ? 'mt-8' : 'mt-10'}` 
                          : `bottom-1/2 ${isMobile ? 'mb-8' : 'mb-10'}`
                      }`}
                    >
                      <div className="border-[#4BBA72] text-[#4BBA72] px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold border-2 cursor-pointer whitespace-nowrap">
                        {item.date}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-10">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-green-600 font-bold text-lg md:text-xl">{selectedItem.date}</span>
                    <div className="text-xs md:text-sm text-gray-500">Timeline Milestone</div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight"
              >
                {selectedItem.title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-sm md:prose-lg max-w-none"
              >
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">{selectedItem.content}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 md:mt-10 flex justify-end"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeModal}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-xl font-medium transition-all duration-300 text-sm md:text-base"
                >
                  Continue Journey
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}