import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyData } from '../../data/content';

export default function TrustPilotReviews() {
  const reviews = companyData.reviews;
  const N = reviews.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isManual, setIsManual] = useState(false);

  // Auto-play interval
  useEffect(() => {
    if (isManual) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % N);
    }, 5000);
    return () => clearInterval(timer);
  }, [isManual, N]);

  const handleNext = () => {
    setIsManual(true);
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % N);
  };

  const handlePrev = () => {
    setIsManual(true);
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + N) % N);
  };

  const handleDotClick = (index: number) => {
    setIsManual(true);
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handleCardClick = (index: number) => {
    if (index === activeIndex) return;
    setIsManual(true);
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const prevIndex = (activeIndex - 1 + N) % N;
  const nextIndex = (activeIndex + 1) % N;

  const currentReview = reviews[activeIndex];
  const prevReview = reviews[prevIndex];
  const nextReview = reviews[nextIndex];

  // Custom variants for sliding animation
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir * 100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    },
    exit: (dir: number) => ({
      x: -dir * 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden z-10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a359c]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trustpilot Excellent Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Star size={32} className="text-[#00b67a] fill-[#00b67a]" />
            <span className="text-3xl font-black text-slate-900 tracking-tight">Trustpilot</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Excellent
          </h2>
          <div className="flex justify-center gap-1.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-[#00b67a] p-1.5 rounded-md">
                <Star size={20} className="text-white fill-white" />
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-lg">
            Based on <span className="font-bold underline text-[#1a359c] cursor-pointer">50+ reviews</span>
          </p>
        </motion.div>

        {/* Focused Slider Carousel */}
        <div className="relative max-w-5xl mx-auto px-2 md:px-12 flex items-center justify-center">
          
          {/* Navigation Arrow Left */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#1a359c] hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-full min-h-[380px]">
            
            {/* Side Card: Left (Previous) */}
            <div 
              onClick={() => handleCardClick(prevIndex)}
              className="hidden lg:flex flex-col justify-between p-6 rounded-[24px] bg-white border border-slate-200/65 opacity-35 scale-90 blur-[0.5px] cursor-pointer hover:opacity-50 hover:scale-[0.92] transition-all duration-300 min-h-[280px] shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(prevReview.rating)].map((_, i) => (
                  <div key={i} className="bg-[#00b67a]/60 p-0.5 rounded-sm">
                    <Star size={12} className="text-white fill-white" />
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm italic font-light line-clamp-4">"{prevReview.text}"</p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-4">
                <div className="w-8 h-8 rounded-full bg-[#1a359c] flex items-center justify-center text-white font-bold text-xs">
                  {prevReview.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-xs">{prevReview.name}</p>
                  <p className="text-[10px] text-slate-400">{prevReview.company}</p>
                </div>
              </div>
            </div>

            {/* Center Card: Focused Active Card */}
            <div className="relative z-10 w-full min-h-[340px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="bg-white p-8 rounded-[31px] shadow-[0_20px_40px_rgba(15,23,42,0.06)] border border-slate-200 flex flex-col justify-between min-h-[320px] sm:min-h-[340px] w-full"
                >
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                          <Star size={16} className="text-white fill-white" />
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-850 text-lg sm:text-xl leading-relaxed font-light italic mb-8">
                      "{currentReview.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-[#1a359c] border border-slate-200 flex items-center justify-center text-white font-black text-lg shadow-inner">
                      {currentReview.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-base">{currentReview.name}</p>
                      <p className="text-sm text-[#1a359c] font-sans font-semibold">{currentReview.company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Side Card: Right (Next) */}
            <div 
              onClick={() => handleCardClick(nextIndex)}
              className="hidden lg:flex flex-col justify-between p-6 rounded-[24px] bg-white border border-slate-200/65 opacity-35 scale-90 blur-[0.5px] cursor-pointer hover:opacity-50 hover:scale-[0.92] transition-all duration-300 min-h-[280px] shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(nextReview.rating)].map((_, i) => (
                  <div key={i} className="bg-[#00b67a]/60 p-0.5 rounded-sm">
                    <Star size={12} className="text-white fill-white" />
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm italic font-light line-clamp-4">"{nextReview.text}"</p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-4">
                <div className="w-8 h-8 rounded-full bg-[#1a359c] flex items-center justify-center text-white font-bold text-xs">
                  {nextReview.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-xs">{nextReview.name}</p>
                  <p className="text-[10px] text-slate-400">{nextReview.company}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Arrow Right */}
          <button 
            onClick={handleNext}
            className="absolute right-0 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#1a359c] hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2.5 mt-10">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex ? 'w-8 bg-[#1a359c]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
