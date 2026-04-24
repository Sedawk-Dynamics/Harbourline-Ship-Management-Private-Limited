import { motion } from 'framer-motion';
import { FaCogs, FaGlobeAmericas, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const features = [
  { icon: <FaCogs />, text: 'OEM Quality Spares' },
  { icon: <FaGlobeAmericas />, text: 'Global Supply Network' },
  { icon: <FaHeadset />, text: '24/7 Technical Support' },
  { icon: <FaShieldAlt />, text: 'Certified Standards' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div
              className="absolute -top-5 -left-5 w-24 h-24 border-[3px] border-gold rounded-2xl opacity-30"
              style={{ animation: 'floatShape 6s ease-in-out infinite' }}
            />
            {/* Decorative dots */}
            <motion.div
              className="absolute -top-8 right-10 grid grid-cols-5 gap-2 opacity-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-navy rounded-full" />
              ))}
            </motion.div>

            <div className="rounded-2xl overflow-hidden shadow-2xl group relative">
              <img
                src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80"
                alt="Ship Engine Room"
                className="w-full h-[280px] sm:h-[350px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Shine overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-5 bg-gradient-to-br from-gold to-gold-light text-navy p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl text-center z-10"
            >
              <div className="font-heading text-3xl sm:text-5xl font-bold leading-none">10+</div>
              <div className="text-xs font-semibold uppercase tracking-wider mt-1">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 'auto' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue uppercase tracking-[3px] mb-4 overflow-hidden"
            >
              <span className="w-8 h-px bg-gold" />
              About Us
              <span className="w-8 h-px bg-gold" />
            </motion.div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-5">
              Your Trusted Partner in <span className="text-blue">Maritime Engineering</span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 mb-4 leading-relaxed"
            >
              Harbourline Ship Management Private Limited is a premier maritime engineering company specializing in the trading and supply of ship engine spares, auxiliary engines, generators, and ship machinery.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-500 mb-8 leading-relaxed"
            >
              Based in Bhavnagar, Gujarat, India, we serve the global maritime industry with reliable, high-quality marine engineering solutions backed by expert technical consulting and survey services.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((f) => (
                <motion.div
                  key={f.text}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(10,38,71,0.12)' }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-off-white hover:bg-white transition-all cursor-default"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-navy to-blue rounded-xl flex items-center justify-center text-gold text-lg shrink-0">
                    {f.icon}
                  </div>
                  <span className="text-sm font-semibold text-navy">{f.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
