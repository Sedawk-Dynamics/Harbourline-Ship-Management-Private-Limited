import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-navy to-blue text-center relative overflow-hidden">
      {/* Decorative compass */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/10 rounded-full"
        style={{ animation: 'rotateSlow 60s linear infinite' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-gold/8 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-gold/5 rounded-full" />
      </div>

      {/* Floating particles */}
      <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-gold/20 rounded-full" style={{ animation: 'floatShape 4s ease-in-out infinite' }} />
      <div className="absolute top-[60%] right-[20%] w-2 h-2 bg-gold/15 rounded-full" style={{ animation: 'floatShape 5s ease-in-out infinite reverse' }} />
      <div className="absolute bottom-[30%] left-[25%] w-4 h-4 bg-blue-light/10 rounded-full" style={{ animation: 'floatShape 6s ease-in-out infinite' }} />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-5"
        >
          Ready to Set Sail with Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-white/75 text-base sm:text-lg max-w-xl mx-auto mb-7 sm:mb-9 px-4 sm:px-0"
        >
          Get in touch today for a free consultation and discover how Harbourline can keep your fleet running at peak performance.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2.5 bg-gradient-to-br from-gold to-gold-light text-navy px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-lg shadow-gold/40 transition-shadow hover:shadow-xl hover:shadow-gold/50 group relative overflow-hidden"
        >
          <span className="relative z-10">Request a Quote</span>
          <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
          <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-600" />
        </motion.a>
      </div>
    </section>
  );
}
