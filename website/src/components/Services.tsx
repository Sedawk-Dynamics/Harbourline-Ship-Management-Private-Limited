import { motion } from 'framer-motion';
import { FaCogs, FaTools, FaSatelliteDish, FaBolt, FaRobot, FaClipboardCheck } from 'react-icons/fa';

const services = [
  {
    icon: <FaCogs />,
    title: 'Ship Machinery',
    desc: 'Complete range of ship machinery solutions including main engine components, propulsion systems, and vessel machinery parts from leading manufacturers.',
  },
  {
    icon: <FaTools />,
    title: 'Engine Spares',
    desc: 'Comprehensive inventory of spare parts for main propulsion engines and auxiliary power units including cylinder liners, pistons, turbochargers, and overhaul kits.',
  },
  {
    icon: <FaSatelliteDish />,
    title: 'Navigation Equipment',
    desc: 'Modern navigation instruments including GPS receivers, radar systems, ECDIS, autopilot systems, AIS transponders, and marine communication systems.',
  },
  {
    icon: <FaBolt />,
    title: 'Electrical Machinery',
    desc: 'Marine-grade electrical equipment including generators, alternators, switchboards, transformers, electric motors, and complete electrical panel solutions.',
  },
  {
    icon: <FaRobot />,
    title: 'Automation Products',
    desc: 'Marine automation and control systems including engine monitoring, alarm & safety systems, remote control equipment, and PLC-based automation solutions.',
  },
  {
    icon: <FaClipboardCheck />,
    title: 'Technical Consulting',
    desc: 'Professional marine consulting including vessel condition surveys, machinery inspections, pre-purchase surveys, damage assessments, and fleet management advisory.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-off-white relative"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A2647' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
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
            Our Services
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-px bg-gold block"
            />
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-5">
            Comprehensive <span className="text-blue">Maritime</span> Solutions
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From ship engine spares to complete marine engineering solutions, we deliver excellence across every aspect of maritime operations.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="service-card bg-white rounded-2xl p-10 relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 group cursor-pointer"
            >
              {/* Top gradient bar */}
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-blue to-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600" />

              {/* Glow effect on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/0 group-hover:bg-gold/5 rounded-full blur-3xl transition-all duration-500" />

              {/* Number */}
              <span className="absolute top-4 right-5 font-heading text-6xl font-bold text-off-white group-hover:text-gold/15 transition-colors duration-500">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-navy to-blue rounded-2xl flex items-center justify-center mb-6 text-gold text-2xl group-hover:from-gold group-hover:to-gold-light group-hover:text-navy transition-all duration-500 group-hover:[transform:rotateY(180deg)]">
                <span className="group-hover:[transform:rotateY(-180deg)] transition-transform duration-500">
                  {s.icon}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-5 text-navy font-semibold text-sm group-hover:text-gold transition-colors"
              >
                Learn More
                <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
              </a>

              {/* Bottom line animation */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
