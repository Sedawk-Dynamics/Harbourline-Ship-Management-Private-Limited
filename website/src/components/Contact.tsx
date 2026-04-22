import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaCheck,
} from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
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
            Get In Touch
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-px bg-gold block"
            />
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-5">
            Contact <span className="text-blue">Us</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Have a question or need a quote? Reach out to us and our team will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: 5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="p-10 bg-gradient-to-br from-navy to-blue rounded-2xl text-white relative overflow-hidden"
          >
            <div className="absolute -top-1/2 -right-1/2 w-[300px] h-[300px] border border-gold/15 rounded-full" />
            <div className="absolute bottom-[-30%] left-[-20%] w-[200px] h-[200px] border border-white/5 rounded-full" />
            <h3 className="font-heading text-2xl font-bold mb-2">Let's Talk</h3>
            <p className="text-white/70 text-sm mb-9">
              We're here to help with all your maritime engineering needs.
            </p>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  label: 'Our Office',
                  content: (
                    <p>240/A Sagar Complex, Jashonath Circle,<br />Motibaug Road, Bhavnagar,<br />Gujarat - 364001, India</p>
                  ),
                },
                {
                  icon: <FaPhoneAlt />,
                  label: 'Phone',
                  content: (
                    <>
                      <a href="tel:+919825645515" className="hover:text-gold transition-colors">+91 98256 45515</a><br />
                      <a href="tel:+919714514014" className="hover:text-gold transition-colors">+91 97145 14014</a>
                    </>
                  ),
                },
                {
                  icon: <FaEnvelope />,
                  label: 'Email',
                  content: (
                    <>
                      <a href="mailto:info@harbourline.com" className="hover:text-gold transition-colors">info@harbourline.com</a><br />
                      <a href="mailto:sales@harbourline.com" className="hover:text-gold transition-colors">sales@harbourline.com</a>
                    </>
                  ),
                },
                {
                  icon: <FaClock />,
                  label: 'Working Hours',
                  content: <p>Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>,
                },
              ].map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center shrink-0 text-gold group-hover:bg-gold/25 group-hover:scale-110 transition-all">
                    {d.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">{d.label}</h4>
                    <div className="text-white/85 text-sm leading-relaxed">{d.content}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3 mt-9">
              {[
                { icon: <FaFacebookF />, label: 'Facebook', href: '#' },
                { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#' },
                { icon: <FaInstagram />, label: 'Instagram', href: '#' },
                { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me/919825645515' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-navy transition-all"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-xs text-blue font-medium z-10">Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" required className="w-full px-5 py-4 border-2 border-gray-100 rounded-xl text-sm text-gray-800 focus:border-blue focus:ring-4 focus:ring-blue/10 outline-none transition-all hover:border-gray-200" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-xs text-blue font-medium z-10">Email Address</label>
                  <input type="email" name="email" placeholder="john@example.com" required className="w-full px-5 py-4 border-2 border-gray-100 rounded-xl text-sm text-gray-800 focus:border-blue focus:ring-4 focus:ring-blue/10 outline-none transition-all hover:border-gray-200" />
                </motion.div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-xs text-blue font-medium z-10">Phone Number</label>
                  <input type="tel" name="phone" placeholder="+91 98765 43210" className="w-full px-5 py-4 border-2 border-gray-100 rounded-xl text-sm text-gray-800 focus:border-blue focus:ring-4 focus:ring-blue/10 outline-none transition-all hover:border-gray-200" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-xs text-blue font-medium z-10">Subject</label>
                  <select name="subject" required defaultValue="" className="w-full px-5 py-4 border-2 border-gray-100 rounded-xl text-sm text-gray-800 focus:border-blue focus:ring-4 focus:ring-blue/10 outline-none transition-all bg-white hover:border-gray-200">
                    <option value="" disabled>Select a Service</option>
                    <option value="ship-machinery">Ship Machinery</option>
                    <option value="engine-spares">Engine Spares</option>
                    <option value="navigation">Navigation Equipment</option>
                    <option value="electrical">Electrical Machinery</option>
                    <option value="automation">Automation Products</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="deck-machinery">Deck Machinery</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-xs text-blue font-medium z-10">Your Message</label>
                <textarea name="message" placeholder="Tell us about your requirements..." required rows={5} className="w-full px-5 py-4 border-2 border-gray-100 rounded-xl text-sm text-gray-800 focus:border-blue focus:ring-4 focus:ring-blue/10 outline-none transition-all resize-y hover:border-gray-200" />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`self-start inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-semibold text-sm text-white shadow-lg transition-all group ${
                  submitted
                    ? 'bg-gradient-to-br from-green to-green-light shadow-green/30'
                    : 'bg-gradient-to-br from-navy to-blue shadow-navy/30 hover:shadow-xl'
                }`}
              >
                {submitted ? (
                  <>
                    <FaCheck /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
