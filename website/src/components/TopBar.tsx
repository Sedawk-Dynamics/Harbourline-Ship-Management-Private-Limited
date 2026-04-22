import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function TopBar() {
  return (
    <div className="bg-navy text-white py-2.5 text-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center flex-wrap gap-2.5">
        <div className="flex items-center gap-6 flex-wrap">
          <a href="tel:+919825645515" className="flex items-center gap-1.5 text-gray-300 hover:text-gold transition-colors">
            <FaPhoneAlt className="text-gold text-xs" />
            +91 98256 45515
          </a>
          <a href="mailto:info@harbourline.com" className="flex items-center gap-1.5 text-gray-300 hover:text-gold transition-colors">
            <FaEnvelope className="text-gold text-xs" />
            info@harbourline.com
          </a>
          <span className="flex items-center gap-1.5 text-gray-300">
            <FaMapMarkerAlt className="text-gold text-xs" />
            Bhavnagar, Gujarat, India
          </span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: <FaFacebookF />, label: 'Facebook' },
            { icon: <FaLinkedinIn />, label: 'LinkedIn' },
            { icon: <FaInstagram />, label: 'Instagram' },
            { icon: <FaXTwitter />, label: 'Twitter' },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-300 hover:text-gold hover:bg-gold/10 transition-all hover:-translate-y-0.5"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
