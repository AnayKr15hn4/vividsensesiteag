import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ApplyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our team will contact you shortly.');
  };

  return (
    <section id="inquiry" className="bg-white py-16 md:py-32 relative overflow-hidden">
      {/* Top Divider */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="w-full h-px bg-black/10 mb-24 md:mb-32" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 md:gap-24 relative">
          {/* Large Index */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="select-none"
          >
            <span className="text-[140px] md:text-[320px] font-display font-medium leading-none text-black/5 tracking-tighter">
              04
            </span>
          </motion.div>

          {/* Form Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-12">
                <span className="w-2 h-2 bg-black rounded-sm" />
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold">004</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-display font-medium tracking-tight mb-24 leading-[0.95]">
                General <br />
                Inquiry
              </h2>

              <form onSubmit={handleSubmit} className="max-w-xl space-y-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-black/10 py-4 text-xl md:text-2xl font-light focus:outline-none focus:border-black transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-black/10 py-4 text-xl md:text-2xl font-light focus:outline-none focus:border-black transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40">Inquiry Type</label>
                  <select 
                    className="w-full bg-transparent border-b border-black/10 py-4 text-xl md:text-2xl font-light focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Select an option</option>
                    <option value="partnership">Partnership</option>
                    <option value="product">Product Info</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-black/10 py-4 text-xl md:text-2xl font-light focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Tell us about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-6 pt-12 text-xl font-bold tracking-widest uppercase hover:translate-x-4 transition-transform duration-500"
                >
                  Send Message <span className="text-3xl">→</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
