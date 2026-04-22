import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAnchor, FaArrowRight, FaHeadset, FaBoxOpen, FaCubes, FaUsers, FaMedal } from 'react-icons/fa';

const typingTexts = [
  'Ship Engine Spares',
  'Marine Engineering',
  'Technical Consulting',
  'Deck Machinery',
  'Navigation Equipment',
];

const heroStats = [
  { icon: <FaBoxOpen />, target: 500, suffix: '+', label: 'Parts in Stock' },
  { icon: <FaCubes />, target: 1000, suffix: '+', label: 'New Spare Items' },
  { icon: <FaUsers />, target: 50, suffix: '+', label: 'Clients Served' },
  { icon: <FaMedal />, target: 10, suffix: '+', label: 'Years of Excellence' },
];

function AnimatedStatNumber({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!start) return;
    const duration = 2500;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, target]);

  return <>{start ? count : 0}{suffix}</>;
}

export default function Hero() {
  const [typingText, setTypingText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Typing effect
  const typeStep = useCallback(() => {
    const currentFullText = typingTexts[textIndex];
    if (!isDeleting) {
      setTypingText(currentFullText.substring(0, typingText.length + 1));
      if (typingText.length + 1 === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setTypingText(currentFullText.substring(0, typingText.length - 1));
      if (typingText.length - 1 === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
        return;
      }
    }
  }, [typingText, textIndex, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(typeStep, speed);
    return () => clearTimeout(timer);
  }, [typeStep, isDeleting]);

  // Trigger stats animation after mount
  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
  }));

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[750px] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/2257010/2257010-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90 z-[1]" />

      {/* Animated grain/noise texture overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Floating particles */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gold/30"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animation: `particleFloat ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(6,22,48,0.5) 100%)',
      }} />

      {/* Center Content */}
      <div className="relative z-[3] text-center max-w-4xl mx-auto px-5">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-full text-gold-light text-sm font-medium tracking-wider uppercase mb-8"
        >
          <FaAnchor className="text-xs animate-pulse" />
          Premium Marine Asset Management
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key="line1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              Harbourline
            </motion.span>
          </AnimatePresence>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold"
          >
            Ship Management
          </motion.span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Leading stockist, trader, and exporter of premium marine spare parts, machinery, and technical consulting services tailored for your vessel's needs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <button
            onClick={() => handleScroll('#services')}
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light text-navy px-10 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-gold/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/40 transition-all relative overflow-hidden"
          >
            <span className="relative z-10">Explore Services</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-600" />
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="group inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-semibold text-sm hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 transition-all"
          >
            <FaHeadset className="group-hover:animate-pulse" />
            Get in Touch
          </button>
        </motion.div>

        {/* Typing Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="text-white/40 text-sm">Specializing in:</span>
          <span className="text-gold-light font-semibold text-base typing-cursor min-h-[1.5em]">
            {typingText}
          </span>
        </motion.div>
      </div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-[3]"
      >
        <div className="bg-navy/60 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-6xl mx-auto px-5 py-6 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x divide-white/10">
            {heroStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
                className="flex items-center justify-center gap-4 px-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-lg group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                  {s.icon}
                </div>
                <div>
                  <div className="font-heading text-2xl lg:text-3xl font-bold text-white leading-none">
                    <AnimatedStatNumber target={s.target} suffix={s.suffix} start={statsVisible} />
                  </div>
                  <div className="text-[0.7rem] text-white/50 uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-[120px] lg:bottom-[110px] left-1/2 z-[4] flex flex-col items-center gap-2"
        style={{ animation: 'bounce 2s ease infinite' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full relative">
          <span
            className="absolute w-1 h-2 bg-gold rounded left-1/2 -translate-x-1/2"
            style={{ animation: 'scrollMouse 1.5s ease infinite', top: '8px' }}
          />
        </div>
        <span className="text-[0.65rem] text-white/40 tracking-[3px] uppercase">Scroll</span>
      </div>

      {/* Side decorative elements */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 z-[3] hidden xl:flex flex-col gap-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.1 }}
            className={`w-1 rounded-full ${i === 2 ? 'h-8 bg-gold' : 'h-4 bg-white/20'}`}
          />
        ))}
      </div>

      <div className="absolute top-1/2 right-6 -translate-y-1/2 z-[3] hidden xl:flex flex-col gap-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.1 }}
            className={`w-1 rounded-full ${i === 2 ? 'h-8 bg-gold' : 'h-4 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
}
