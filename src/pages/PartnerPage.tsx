import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Handshake, Globe, Target } from "lucide-react";

export const PartnerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    organization: "",
    contactName: "",
    email: "",
    website: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xgonwlvl", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          organization: "",
          contactName: "",
          email: "",
          website: "",
          message: "",
        });
        alert(
          "Thank you for your interest. Our partnership team will reach out shortly.",
        );
      } else {
        setStatus("error");
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (_error) {
      setStatus("error");
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="w-full h-px bg-black/10 mb-8" />
        <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-black/40">
          <span>03</span>
          <span>Collaboration</span>
          <span className="hidden md:block">Partner with Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-[160px] font-display font-medium leading-[0.85] tracking-[-0.04em] text-black mb-12 uppercase">
              Let's build{" "}
              <ArrowRight className="lucide lucide-arrow-right inline-block w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 ml-4" />
              <br />
              the future.
            </h1>
            <p className="text-xl text-black/60 max-w-md font-light leading-relaxed mb-12">
              We collaborate with organizations that share our vision for an
              accessible world. Partner with VividSense to scale impact and
              innovation.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: Handshake,
                  title: "Strategic Partnerships",
                  desc: "Co-developing hardware solutions.",
                },
                {
                  icon: Globe,
                  title: "Services",
                  desc: "Providing essential expertise and support.",
                },
                {
                  icon: Target,
                  title: "Mission Alignment",
                  desc: "Shared goals in assistive technology.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-sm bg-black/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-black/50 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/5 p-8 md:p-12 rounded-sm border border-black/5"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-black/10 py-3 text-xl font-light focus:outline-none focus:border-black transition-colors"
                  placeholder="Organization Name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-black/10 py-3 text-xl font-light focus:outline-none focus:border-black transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-black/10 py-3 text-xl font-light focus:outline-none focus:border-black transition-colors"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/10 py-3 text-xl font-light focus:outline-none focus:border-black transition-colors"
                  placeholder="https://company.com"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-black/10 py-3 text-xl font-light focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="How can we work together?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group/btn relative w-full flex justify-between items-center bg-black text-white px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm border border-black overflow-hidden transition-colors duration-300 hover:text-black disabled:opacity-50"
              >
                {/* Background Slide Effect */}
                <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out" />

                {/* Content */}
                <span className="relative z-10 flex w-full justify-between items-center">
                  {status === "submitting"
                    ? "Sending..."
                    : "Request Partnership"}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
