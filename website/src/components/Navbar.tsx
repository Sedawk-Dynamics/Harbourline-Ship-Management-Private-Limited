import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        const id = el.getAttribute('id')!;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-[1000] transition-all duration-400 ${
        scrolled
          ? 'bg-white/98 shadow-lg backdrop-blur-2xl'
          : 'bg-white/95 shadow-sm backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center py-3">
        {/* Logo */}
        <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Harbourline"
            className={`transition-all duration-400 ${scrolled ? 'h-14' : 'h-20'}`}
          />
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold text-navy tracking-wide leading-tight">
              HARBOURLINE
            </span>
            <span className="text-[0.65rem] text-blue tracking-[3px] uppercase font-medium">
              Ship Management
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all relative ${
                  activeSection === item.href.slice(1)
                    ? 'text-navy'
                    : 'text-gray-500 hover:text-navy'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gold rounded-full transition-transform duration-400 ${
                    activeSection === item.href.slice(1) ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-2 bg-gradient-to-br from-navy to-blue text-white px-7 py-3 rounded-full text-sm font-semibold shadow-lg shadow-blue/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue/40 transition-all"
            >
              Get a Quote
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1.5 z-[1001]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-7 h-0.5 bg-navy rounded transition-all duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-7 h-0.5 bg-navy rounded transition-all duration-300 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`w-7 h-0.5 bg-navy rounded transition-all duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 w-4/5 max-w-[350px] h-screen bg-white shadow-2xl transition-transform duration-400 z-[1000] pt-20 px-6 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-4 py-4 text-base font-medium rounded-xl transition-all ${
                    activeSection === item.href.slice(1)
                      ? 'text-navy bg-off-white'
                      : 'text-gray-500 hover:bg-off-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full mt-4 bg-gradient-to-br from-navy to-blue text-white py-4 rounded-full text-base font-semibold text-center"
              >
                Get a Quote
              </button>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {mobileOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/30 z-[999]"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
