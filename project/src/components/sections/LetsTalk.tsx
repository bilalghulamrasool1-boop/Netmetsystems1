import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface LetsTalkProps {
  title?: string;
  subtitle?: string;
}

export default function LetsTalk({ 
  title = "Ready to Build a Best-in-Class Solution?",
  subtitle = "Let us help you transform your ideas into seamless, high-performance systems that engage users and drive results. Get in touch today to start building the future."
}: LetsTalkProps) {
  return (
    <section className="py-24 bg-brand-gradient relative overflow-hidden z-10">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent" />
        {/* Dynamic network-like digital grid */}
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 1px), radial-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px, 20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#101c4c]/60 to-[#152c89]/40 border border-[#1e2f75]/50 rounded-[40px] p-8 md:p-16 text-center overflow-hidden shadow-[0_20px_50px_rgba(11,18,47,0.8)] group"
        >
          {/* Internal glowing elements */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#1a359c]/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Icon Badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-bold tracking-widest uppercase mb-8"
          >
            <Sparkles size={14} className="animate-pulse" />
            Let's Collaborate
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
            {subtitle}
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, shadow: "0 0 25px rgba(56, 189, 248, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4.5 bg-[#1a359c] hover:bg-[#38BDF8] hover:text-[#0b122f] text-white rounded-full font-bold text-base transition-all duration-300 shadow-xl flex items-center gap-3.5 group cursor-pointer"
              >
                <MessageSquare size={18} className="text-white group-hover:text-[#0b122f] transition-colors" />
                Let's Talk Today
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </motion.button>
            </Link>
          </div>

          {/* Interactive digital wave overlay (subtle decoration matching mockup) */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
