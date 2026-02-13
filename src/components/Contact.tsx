import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-40%" });
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    experience: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    try {
      const response = await fetch('https://formspree.io/f/xovgkvro', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('Thank you for your application!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          position: '',
          experience: '',
          message: ''
        });
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.2 }
    }
  };

  return (
    <section id="join" className="bg-white py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Title */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
            className="flex flex-col justify-start"
          >
            <div className="mb-8">
              <span className="text-[11px] font-bold tracking-widest uppercase text-black/40">JOIN OUR TEAM</span>
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-black leading-none tracking-tighter text-black">
              Join Our <ArrowRight className="inline-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ml-4" />
              <br />
              Team
            </h2>
            <p className="mt-8 text-base text-black/60 max-w-md">
              We're looking for passionate individuals who want to make a difference in the accessibility space. Join us in our mission to empower independence.
            </p>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* First Name & Last Name */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name*"
                    required
                    className="w-full bg-transparent border-b border-black/20 py-3 text-base text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name*"
                    required
                    className="w-full bg-transparent border-b border-black/20 py-3 text-base text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </motion.div>

              {/* Email Address */}
              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  required
                  className="w-full bg-transparent border-b border-black/20 py-3 text-base text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
                />
              </motion.div>

              {/* Position of Interest */}
              <motion.div variants={itemVariants}>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-black/20 py-3 text-base text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
                >
                  <option value="" disabled>Position of Interest*</option>
                  <option value="engineer">Software Engineer</option>
                  <option value="designer">Product Designer</option>
                  <option value="hardware">Hardware Engineer</option>
                  <option value="marketing">Marketing Specialist</option>
                  <option value="sales">Sales Representative</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* Years of Experience */}
              <motion.div variants={itemVariants}>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-black/20 py-3 text-base text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
                >
                  <option value="" disabled>Years of Experience*</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </motion.div>

              {/* Why do you want to join VIVIDSENSE? */}
              <motion.div variants={itemVariants}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Why do you want to join VIVIDSENSE?*&#10;Tell us about your passion for accessibility and how you'd contribute to our mission..."
                  required
                  rows={6}
                  className="w-full bg-transparent border-b border-black/20 py-3 text-base text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-3 text-base font-bold tracking-wider uppercase text-black hover:text-black/60 transition-colors"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
