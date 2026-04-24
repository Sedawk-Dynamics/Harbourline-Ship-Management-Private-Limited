import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaCogs, FaWrench, FaWind, FaTachometerAlt, FaFan,
  FaAnchor, FaBolt, FaSatelliteDish, FaMicrochip, FaDharmachakra,
} from 'react-icons/fa';

const products = [
  { icon: <FaCogs />, title: 'Ship Machinery', desc: 'Main engine components & propulsion systems' },
  { icon: <FaWrench />, title: 'Engine Spares', desc: 'Cylinder liners, pistons, turbochargers & kits' },
  { icon: <FaWind />, title: 'Air Compressors', desc: 'High-pressure & low-pressure marine compressors' },
  { icon: <FaTachometerAlt />, title: 'Governors', desc: 'Electronic, hydraulic & mechanical speed governors' },
  { icon: <FaFan />, title: 'Air Starters', desc: 'Pneumatic starting systems for marine engines' },
  { icon: <FaAnchor />, title: 'Anchor Chain', desc: 'Marine grade chains, anchors & mooring equipment' },
  { icon: <FaBolt />, title: 'Electrical Machinery', desc: 'Generators, alternators & switchboards' },
  { icon: <FaSatelliteDish />, title: 'Navigation Equipment', desc: 'GPS, radar, ECDIS & communication systems' },
  { icon: <FaMicrochip />, title: 'Automation Products', desc: 'PLC systems, monitoring & control equipment' },
  { icon: <FaDharmachakra />, title: 'Deck Machinery', desc: 'Winches, windlasses, capstans & hatch covers' },
];

export default function Products() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track && track.children.length === products.length) {
      const items = Array.from(track.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        track.appendChild(clone);
      });
    }
  }, []);

  return (
    <section id="products" className="py-14 sm:py-20 lg:py-24 bg-off-white relative">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue uppercase tracking-[3px] mb-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-px bg-gold block"
            />
            Our Products
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-px bg-gold block"
            />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-5">
            Marine <span className="text-blue">Products</span> Range
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Browse our extensive catalogue of marine engineering products sourced from world-class manufacturers.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="overflow-hidden py-5 relative"
      >
        <div className="absolute top-0 left-0 w-36 h-full bg-gradient-to-r from-off-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-36 h-full bg-gradient-to-l from-off-white to-transparent z-10" />

        <div ref={trackRef} className="products-track">
          {products.map((p) => (
            <div
              key={p.title}
              className="product-card shrink-0 w-[220px] sm:w-[260px] lg:w-[280px] bg-white rounded-2xl p-5 sm:p-7 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:border-blue-light transition-all duration-300 group relative overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="w-16 h-16 bg-gradient-to-br from-off-white to-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-navy group-hover:from-navy group-hover:to-blue group-hover:text-gold transition-all duration-400 group-hover:scale-110">
                {p.icon}
              </div>
              <h4 className="font-heading text-base font-bold text-navy mb-2">{p.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
