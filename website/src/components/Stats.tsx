import { type ReactNode, useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShip, FaHandshake, FaGlobe, FaAward } from 'react-icons/fa';

interface StatItem {
  icon: ReactNode;
  target: number;
  suffix: string;
  label: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.85 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6 },
  },
};

function AnimatedNumber({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, target]);

  return <>{start ? count : 0}{suffix}</>;
}

function StatCard({ item, inView }: { item: StatItem; inView: boolean }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
      className="text-center p-5 sm:p-8 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 transition-all group"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-5 text-navy text-xl"
      >
        {item.icon}
      </motion.div>
      <div className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-none mb-2">
        <AnimatedNumber target={item.target} suffix={item.suffix} start={inView} />
      </div>
      <div className="text-xs text-gray-300 uppercase tracking-wider">{item.label}</div>
      <div className="w-0 group-hover:w-12 h-0.5 bg-gold mx-auto mt-3 transition-all duration-500 rounded" />
    </motion.div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats: StatItem[] = [
    { icon: <FaShip />, target: 500, suffix: '+', label: 'Products Supplied' },
    { icon: <FaHandshake />, target: 50, suffix: '+', label: 'Happy Clients' },
    { icon: <FaGlobe />, target: 25, suffix: '+', label: 'Countries Served' },
    { icon: <FaAward />, target: 10, suffix: '+', label: 'Years Experience' },
  ];

  return (
    <section
      ref={ref}
      className="py-14 sm:py-20 bg-gradient-to-br from-navy to-navy-dark relative overflow-hidden"
    >
      <div
        className="absolute -top-1/2 -right-[20%] w-[500px] h-[500px] border border-gold/10 rounded-full"
        style={{ animation: 'rotateSlow 30s linear infinite' }}
      />
      <div
        className="absolute -bottom-1/2 -left-[20%] w-[600px] h-[600px] border border-blue-light/10 rounded-full"
        style={{ animation: 'rotateSlow 40s linear infinite reverse' }}
      />
      <div className="absolute top-10 left-10 grid grid-cols-4 gap-3 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-gold rounded-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10"
        >
          {stats.map((s) => (
            <StatCard key={s.label} item={s} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
