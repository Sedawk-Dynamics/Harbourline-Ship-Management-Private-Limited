import { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-navy to-blue text-white rounded-full flex items-center justify-center text-base sm:text-lg shadow-xl cursor-pointer z-[999] transition-all duration-400 hover:from-gold hover:to-gold-light hover:text-navy hover:-translate-y-1 ${
          showTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-5 invisible'
        }`}
      >
        <FaChevronUp />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919825645515"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-4 sm:bottom-8 sm:left-8 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl sm:text-2xl z-[999] hover:scale-110 transition-transform"
        style={{ animation: 'whatsappPulse 2s ease infinite' }}
      >
        <FaWhatsapp />
      </a>
    </>
  );
}
