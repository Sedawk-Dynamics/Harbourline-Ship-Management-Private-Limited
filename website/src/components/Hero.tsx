import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaAnchor, FaArrowRight, FaHeadset } from 'react-icons/fa';

const typingTexts = [
  'Ship Engine Spares',
  'Marine Engineering',
  'Technical Consulting',
  'Deck Machinery',
  'Navigation Equipment',
];

export default function Hero() {
  const [typingText, setTypingText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  // Generate particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
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
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
        >
          <source src="/harbourline-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-blue/70 to-navy/80 z-[1]" />

      {/* Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gold/40"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animation: `particleFloat ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-[3] max-w-3xl pl-[5%] pr-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-5 py-2 rounded-full text-gold-light text-sm font-medium tracking-wider uppercase mb-6"
        >
          <FaAnchor className="text-xs" />
          Trusted Maritime Partner
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-5"
        >
          Powering the{' '}
          <span className="text-gold relative">
            Maritime
            <motion.span
              className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-gold rounded"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{ transformOrigin: 'left' }}
            />
          </span>{' '}
          Industry with Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/85 text-base sm:text-lg mb-8 max-w-xl"
        >
          Leading supplier of ship engine spares, marine machinery, and technical consulting services. Your one-stop solution for all maritime engineering needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => handleScroll('#services')}
            className="inline-flex items-center gap-2.5 bg-gradient-to-br from-gold to-gold-light text-navy px-9 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-gold/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/50 transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Services</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="inline-flex items-center gap-2.5 border-2 border-white/40 text-white px-9 py-4 rounded-full font-semibold text-sm hover:border-white hover:bg-white/10 hover:-translate-y-1 transition-all"
          >
            <FaHeadset />
            Contact Us
          </button>
        </motion.div>

        {/* Typing Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex items-center gap-2.5"
        >
          <span className="text-white/50 text-sm">Specializing in:</span>
          <span className="text-gold-light font-semibold text-base typing-cursor min-h-[1.5em]">
            {typingText}
          </span>
        </motion.div>
      </div>

      {/* Hero Stats */}
      <div className="absolute bottom-28 left-[5%] z-[3] hidden md:flex gap-10">
        {[
          { num: '500+', label: 'Products' },
          { num: '50+', label: 'Clients' },
          { num: '24/7', label: 'Support' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-heading text-3xl lg:text-4xl font-bold text-gold leading-none">{s.num}</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 z-[3] flex flex-col items-center gap-2" style={{ animation: 'bounce 2s ease infinite' }}>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full relative">
          <span
            className="absolute w-1 h-2 bg-gold rounded left-1/2 -translate-x-1/2"
            style={{ animation: 'scrollMouse 1.5s ease infinite', top: '8px' }}
          />
        </div>
        <span className="text-[0.7rem] text-white/60 tracking-widest uppercase">Scroll</span>
      </div>

      {/* Waves */}
      <div className="absolute bottom-0 left-0 w-full z-[2] overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-[calc(100%+2px)] h-20">
          <path className="wave-1" fill="rgba(255,255,255,0.1)" d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,42.7C672,43,768,53,864,53.3C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z" />
          <path className="wave-2" fill="rgba(255,255,255,0.2)" d="M0,48L48,53.3C96,59,192,69,288,64C384,59,480,37,576,32C672,27,768,37,864,48C960,59,1056,69,1152,64C1248,59,1344,37,1392,27L1440,16L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z" />
          <path className="wave-3" fill="white" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
}
