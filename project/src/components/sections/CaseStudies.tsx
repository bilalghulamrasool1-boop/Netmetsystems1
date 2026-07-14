import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Heart, 
  ShoppingBag, 
  GraduationCap, 
  TrendingUp, 
  Truck, 
  Volume2, 
  FileText 
} from 'lucide-react';
import { companyData } from '../../data/content';

export default function CaseStudies() {
  const [activeVideo, setActiveVideo] = useState(false);
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Helper to render case study specific visualizations
  const renderCaseVisual = (type: string, title: string) => {
    switch (type) {
      case 'ai-twin':
        return (
          <div className="relative w-full aspect-square flex items-center justify-center bg-slate-950 rounded-[31px] overflow-hidden border border-slate-800">
            {/* Concentric expanding voice waves */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.6, opacity: 0.8 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.75,
                    ease: "easeOut"
                  }}
                  className="absolute w-44 h-44 rounded-full border border-sky-400/30"
                />
              ))}
            </div>
            
            <div className="relative z-10 text-center px-6">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-400/40 flex items-center justify-center mx-auto mb-4"
              >
                <Cpu className="text-sky-400 w-8 h-8" />
              </motion.div>
              <h4 className="text-xl font-bold text-sky-400 tracking-wide uppercase font-display mb-1">Real-Time Voice Processing</h4>
              <p className="text-xs text-slate-400 font-mono">Status: Replicating Vocal Cadence...</p>
            </div>
          </div>
        );

      case 'healthcare':
        return (
          <div className="relative w-full aspect-square flex flex-col justify-between p-8 bg-slate-950 rounded-[31px] overflow-hidden border border-slate-800">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#00b67a] font-bold bg-[#00b67a]/10 px-3 py-1 rounded-full flex items-center gap-1">
                <Heart size={12} className="fill-[#00b67a]" /> Live Vitals
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: Med-4091</span>
            </div>

            {/* Medical Heartrate Waveform */}
            <div className="h-28 flex items-center justify-center">
              <svg className="w-full h-full text-emerald-400" viewBox="0 0 300 100" fill="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  d="M0,50 L50,50 L60,20 L70,80 L80,50 L120,50 L130,10 L140,90 L150,50 L200,50 L210,30 L220,70 L230,50 L300,50"
                />
              </svg>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-4">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Accessibility Index</span>
                <span className="text-emerald-400 font-bold">98.2%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "98.2%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="bg-emerald-400 h-full rounded-full"
                />
              </div>
            </div>
          </div>
        );

      case 'retail':
        return (
          <div className="relative w-full aspect-square flex flex-col justify-between p-8 bg-slate-950 rounded-[31px] overflow-hidden border border-slate-800">
            <div className="flex justify-between items-center">
              <span className="text-xs text-amber-400 font-bold bg-amber-400/10 px-3 py-1 rounded-full flex items-center gap-1">
                <ShoppingBag size={12} /> Analytics Panel
              </span>
              <span className="text-xs text-slate-400 font-mono">APEX-STORE</span>
            </div>

            {/* Checkout Conversion Funnel Bars */}
            <div className="space-y-4 my-auto">
              {[
                { label: "Product Views", pct: "100%", count: "124,000" },
                { label: "Add To Cart", pct: "64%", count: "79,360" },
                { label: "Checkout Sales", pct: "18.5%", count: "22,940" }
              ].map((bar, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>{bar.label}</span>
                    <span className="font-mono text-white font-semibold">{bar.count} ({bar.pct})</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: bar.pct }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.15 }}
                      className="bg-amber-400 h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <span className="text-sm font-bold text-white uppercase tracking-wider block">Headless Store Efficiency</span>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="relative w-full aspect-square flex flex-col justify-between p-8 bg-slate-950 rounded-[31px] overflow-hidden border border-slate-800">
            <div className="flex justify-between items-center">
              <span className="text-xs text-indigo-400 font-bold bg-indigo-400/10 px-3 py-1 rounded-full flex items-center gap-1">
                <GraduationCap size={12} /> Active LMS
              </span>
              <span className="text-xs text-slate-400 font-mono">FERPA COMPLIANT</span>
            </div>

            {/* Attendance & Completion Circle */}
            <div className="flex items-center justify-around my-auto">
              <div className="relative flex items-center justify-center">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="38" stroke="rgba(99,102,241,0.1)" strokeWidth="8" fill="transparent" />
                  <motion.circle 
                    cx="48" cy="48" r="38" 
                    stroke="#818cf8" strokeWidth="8" 
                    fill="transparent" 
                    strokeDasharray="238"
                    initial={{ strokeDashoffset: 238 }}
                    whileInView={{ strokeDashoffset: 238 - (238 * 0.95) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-lg font-black text-white font-display">95%</span>
                  <span className="text-[8px] text-indigo-400 block tracking-widest uppercase">Engaged</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                  <span className="text-xs text-slate-300 font-light">Interactive Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-slate-300 font-light">Peer Mentoring</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-950/40 border border-indigo-900/40 rounded-xl p-3 text-center">
              <p className="text-[11px] text-indigo-300 font-mono font-bold uppercase tracking-wider">SmartSchool Platform Live</p>
            </div>
          </div>
        );

      case 'finance':
        return (
          <div className="relative w-full aspect-square flex flex-col justify-between p-8 bg-slate-950 rounded-[31px] overflow-hidden border border-slate-800">
            <div className="flex justify-between items-center">
              <span className="text-xs text-teal-400 font-bold bg-teal-400/10 px-3 py-1 rounded-full flex items-center gap-1">
                <TrendingUp size={12} /> Crypto & Fiat
              </span>
              <span className="text-xs text-slate-400 font-mono">SECURE WALLET</span>
            </div>

            {/* Credit Card Graphic */}
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: -5 }}
              className="w-full h-36 bg-gradient-to-br from-teal-500 via-emerald-600 to-indigo-950 rounded-2xl p-5 text-white flex flex-col justify-between relative shadow-xl overflow-hidden border border-teal-400/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="flex justify-between items-start">
                <span className="text-xs tracking-wider font-light text-teal-100 uppercase">FinSecure Premium</span>
                <span className="text-xs font-mono font-bold text-teal-200">ISO-27001</span>
              </div>
              <div>
                <span className="text-xs font-mono block text-teal-200">ACTIVE BALANCE</span>
                <span className="text-2xl font-bold font-display">$12,450.80</span>
              </div>
            </motion.div>

            <div className="flex justify-between text-[11px] text-slate-400 font-mono border-t border-slate-800/80 pt-3">
              <span>TX SECURITY ID: OK</span>
              <span className="text-teal-400 font-bold">● PROTECTED</span>
            </div>
          </div>
        );

      case 'logistics':
        return (
          <div className="relative w-full aspect-square flex flex-col justify-between p-8 bg-slate-950 rounded-[31px] overflow-hidden border border-slate-800">
            <div className="flex justify-between items-center">
              <span className="text-xs text-purple-400 font-bold bg-purple-400/10 px-3 py-1 rounded-full flex items-center gap-1">
                <Truck size={12} /> Fleet tracking
              </span>
              <span className="text-xs text-slate-400 font-mono">AI OPTIMIZATION</span>
            </div>

            {/* Simulated Logistics Transit Lines */}
            <div className="relative h-28 border border-slate-900 rounded-2xl bg-slate-900/40 p-4 overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono z-10">
                <span>Origin: SFO</span>
                <span>Destination: NYC</span>
              </div>
              
              <div className="relative w-full h-1 bg-slate-800 rounded-full my-auto z-10">
                <motion.div 
                  animate={{ left: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1.5 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center shadow-lg border border-white/20"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                </motion.div>
              </div>

              <div className="flex justify-between text-[10px] text-purple-300 font-mono z-10">
                <span>ETA: 12m</span>
                <span>Optimized Path: active</span>
              </div>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400">Total Route Savings: </span>
              <span className="text-xs text-purple-400 font-bold">25% Fuel Saved</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Abstract Grid Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      {/* Radial glow background lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1a359c]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header and Video Showcase Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
          
          {/* Header Texts */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 bg-[#1a359c]/20 border border-[#1a359c]/30 rounded-full text-[#38BDF8] text-xs font-black uppercase tracking-widest">
              💼 Project Portfolio
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95]">
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-[#38BDF8] to-[#1a359c]">Studies</span>
            </h2>
            
            <p className="text-lg md:text-xl font-light text-slate-300 leading-relaxed max-w-2xl">
              Explore how {companyData.name} transforms visionary ideas into impactful digital realities. 
              Our case studies showcase bespoke solutions tailored for innovation, quality, and success.
            </p>
          </div>

          {/* Case Studies Video Platform Showcase Card */}
          <div className="lg:col-span-5">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video lg:aspect-square bg-slate-900 rounded-[31px] border border-slate-800 overflow-hidden flex items-center justify-center group shadow-2xl cursor-pointer"
              onClick={() => setActiveVideo(true)}
            >
              {/* Background poster/image of video */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
              
              {/* Animated pulsating Play Button */}
              <div className="relative z-20 flex flex-col items-center gap-4">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-sky-500/20 rounded-full blur-md"
                  />
                  <div className="relative w-16 h-16 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center group-hover:bg-white group-hover:scale-110 active:scale-95 transition-all shadow-xl">
                    <Play size={26} className="fill-slate-950 stroke-none ml-1" />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold tracking-widest uppercase block text-white group-hover:text-sky-400 transition-colors">Play Agency Tour Video</span>
                  <span className="text-xs text-slate-400 font-mono mt-1 block">Digital Ecosystem Showcase</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* 6 Case Studies Grid Section */}
        <div className="space-y-32">
          {companyData.caseStudies?.map((study, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Panel Side */}
                <div className={`w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {renderCaseVisual(study.type, study.title)}
                </div>

                {/* Info Text Side */}
                <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Category badging */}
                  <div className="flex flex-wrap gap-2.5">
                    <span className="px-3.5 py-1 bg-slate-900 border border-slate-800 text-[#38BDF8] text-xs font-black tracking-wider rounded-full uppercase">
                      {study.category}
                    </span>
                    <span className="px-3.5 py-1 bg-[#1a359c]/20 border border-[#1a359c]/30 text-white text-xs font-light tracking-wide rounded-full uppercase">
                      {study.subCategory}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-white font-display">
                    {study.title.split(' ').map((word, wIdx) => {
                      // Color alternate words
                      const highlight = wIdx >= study.title.split(' ').length - 2;
                      return (
                        <span key={wIdx} className={highlight ? "text-[#38BDF8]" : "text-white"}>
                          {word}{' '}
                        </span>
                      );
                    })}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                    {study.description}
                  </p>

                  {/* Metrics Badges */}
                  <div className="space-y-3.5 pt-2">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/40 p-3.5 rounded-2xl hover:border-sky-500/20 transition-colors">
                        <CheckCircle2 className="text-[#38BDF8] flex-shrink-0" size={18} />
                        <span className="text-sm font-semibold text-slate-200">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Case Study Button */}
                  <div className="pt-4">
                    <button 
                      onClick={() => setSelectedCase(study.id)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a359c] hover:bg-sky-500 hover:text-slate-950 text-white rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      View Case Study <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Video Lightbox Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(false)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-slate-900 rounded-[31px] max-w-4xl w-full border border-slate-800 overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveVideo(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/40 transition-colors z-30 cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="aspect-video w-full relative bg-black">
                <video 
                  ref={videoRef}
                  src="/1118318_1080p_4k_2k_3840x2160.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 uppercase font-display">{companyData.name} Innovation Suite</h3>
                <p className="text-sm text-slate-400 font-light">Watch how we architect advanced digital systems, custom applications, and secure cloud networks for global clients.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Case Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedCase(null)}
          >
            {(() => {
              const study = companyData.caseStudies?.find(s => s.id === selectedCase);
              if (!study) return null;
              return (
                <motion.div 
                  initial={{ scale: 0.95, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 20 }}
                  className="bg-slate-900 rounded-[31px] max-w-2xl w-full border border-slate-800 overflow-hidden shadow-2xl relative my-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button 
                    onClick={() => setSelectedCase(null)}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/40 transition-colors z-30 cursor-pointer"
                  >
                    <X size={20} />
                  </button>

                  {/* Header image/banner */}
                  <div className="h-48 bg-gradient-to-br from-[#1a359c] to-sky-950 flex items-end p-8 relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                    <div className="relative z-10">
                      <span className="text-xs bg-sky-500 text-slate-950 font-black tracking-wider uppercase px-3 py-1 rounded-full mb-3 inline-block">
                        {study.category}
                      </span>
                      <h3 className="text-3xl font-black text-white font-display uppercase leading-tight">{study.title}</h3>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold tracking-widest text-sky-400 uppercase">Project Objective</h4>
                      <p className="text-slate-300 font-light text-base leading-relaxed">
                        To deploy high-performing digital frameworks, streamline workflow orchestration, and deliver automated real-time services.
                        This custom system is tailored to {companyData.name} enterprise excellence standards.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs font-bold tracking-widest text-sky-400 uppercase">Accomplishments & Metrics</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-start gap-3">
                            <CheckCircle2 className="text-[#38BDF8] mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-xs font-semibold text-slate-300">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold tracking-widest text-sky-400 uppercase">Security & Deployment Standards</h4>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        Fully integrated with industry compliance policies (such as HIPAA, FERPA, GDPR, and ISO standards). Implemented under military-grade TLS 1.3 encryption protocols, continuous cloud endpoint monitoring, and automatic failovers.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex justify-end gap-4">
                      <button 
                        onClick={() => setSelectedCase(null)}
                        className="px-6 py-2.5 bg-slate-950 hover:bg-slate-800 text-slate-300 font-medium text-xs tracking-wider uppercase rounded-full border border-slate-800 transition-all cursor-pointer"
                      >
                        Close Details
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedCase(null);
                          setActiveVideo(true);
                        }}
                        className="px-6 py-2.5 bg-[#1a359c] hover:bg-sky-500 hover:text-slate-950 text-white font-bold text-xs tracking-wider uppercase rounded-full transition-all cursor-pointer flex items-center gap-2"
                      >
                        Watch Agency Tour <Play size={12} className="fill-current" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
