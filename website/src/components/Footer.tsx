import { FaPaperPlane } from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact Us', href: '#contact' },
];

const serviceLinks = [
  'Ship Machinery',
  'Engine Spares',
  'Navigation Equipment',
  'Electrical Machinery',
  'Technical Consulting',
];

const socials = [
  { icon: <FaFacebookF />, label: 'Facebook' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn' },
  { icon: <FaInstagram />, label: 'Instagram' },
  { icon: <FaXTwitter />, label: 'Twitter' },
  { icon: <FaYoutube />, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300 pt-12 sm:pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Harbourline" className="h-16" />
              <span className="font-heading text-xl font-bold text-white">Harbourline</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Leading supplier of ship engine spares, marine machinery, and technical consulting services. Your trusted maritime engineering partner.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 border border-white/15 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-navy hover:-translate-y-1 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6 pb-3 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold rounded" />
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-400 hover:text-gold hover:translate-x-1 transition-all inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 border-r border-b border-gold rotate-[-45deg]" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6 pb-3 relative">
              Services
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold rounded" />
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-gold hover:translate-x-1 transition-all inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 border-r border-b border-gold rotate-[-45deg]" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6 pb-3 relative">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold rounded" />
            </h4>
            <p className="text-sm text-gray-400 mb-5">Subscribe to our newsletter for the latest updates on products and services.</p>
            <form
              className="flex rounded-xl overflow-hidden shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                const input = (e.target as HTMLFormElement).querySelector('input') as HTMLInputElement;
                input.value = '';
                alert('Thank you for subscribing!');
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3.5 bg-white/8 text-white text-sm border-none outline-none placeholder:text-gray-400"
              />
              <button type="submit" className="bg-gradient-to-br from-gold to-gold-light text-navy px-5 hover:brightness-110 transition-all">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">&copy; 2024 Harbourline Ship Management Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
