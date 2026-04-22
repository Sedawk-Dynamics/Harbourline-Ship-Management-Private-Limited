import { motion } from 'framer-motion';
import { FaCertificate, FaTruckFast, FaDollarSign, FaUserTie } from 'react-icons/fa6';

const items = [
  {
    icon: <FaCertificate />,
    title: 'Quality Assured',
    desc: "All products meet international maritime standards from Lloyd's Register, Bureau Veritas, DNV, and ABS classification societies.",
  },
  {
    icon: <FaTruckFast />,
    title: 'Timely Delivery',
    desc: 'Efficient global logistics network ensuring on-time supply of critical components to vessels at any port worldwide.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Competitive Pricing',
    desc: 'Best value without compromising on quality through strong OEM partnerships and optimized supply chain management.',
  },
  {
    icon: <FaUserTie />,
    title: 'Expert Support',
    desc: 'Experienced marine engineers providing 24/7 technical consulting, survey services, and after-sales support.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 15 },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.6 },
  },
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue uppercase tracking-[3px] mb-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-px bg-gold block"
            />
            Why Choose Us
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-px bg-gold block"
            />
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-5">
            The Harbourline <span className="text-blue">Advantage</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We combine industry expertise with a commitment to quality, ensuring your vessels receive the best marine engineering solutions available.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: '1000px' }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              className="why-us-card p-8 rounded-2xl text-center bg-white border border-gray-100 hover:border-blue-light hover:shadow-2xl transition-all duration-400 relative overflow-hidden group"
            >
              {/* Background fill on hover */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-navy/[0.04] to-transparent group-hover:h-full transition-all duration-700" />

              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-[75px] h-[75px] rounded-full bg-off-white flex items-center justify-center mx-auto mb-5 text-2xl text-blue group-hover:bg-gradient-to-br group-hover:from-navy group-hover:to-blue group-hover:text-gold transition-all duration-400 relative z-10"
              >
                {item.icon}
              </motion.div>
              <h3 className="font-heading text-lg font-bold text-navy mb-2.5 relative z-10">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed relative z-10">{item.desc}</p>

              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-gold transition-all duration-500 rounded" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
