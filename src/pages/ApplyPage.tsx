import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ApplyPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    interests: [] as string[],
    otherInterest: "",
    experience: "",
    message: "",
    socials: "",
  });

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      const response = await fetch("https://formspree.io/f/xovgkvro", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thank you for your application!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          department: "",
          interests: [],
          otherInterest: "",
          experience: "",
          message: "",
          socials: "",
        });
      }
    } catch {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="pt-40 pb-24 bg-white min-h-screen text-black"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="w-full h-px bg-black/10 mb-8" />
        <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-black/40">
          <span>04</span>
          <span>Recruitment</span>
          <span className="hidden md:block">Join Our Team</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Column - Title & Description */}
          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 md:mb-12"
            >
              <h1 className="text-7xl md:text-[120px] lg:text-[140px] font-display font-medium leading-[0.85] tracking-[-0.04em] text-black uppercase">
                Join Our
                <br />
                Team
                <ArrowRight className="lucide lucide-arrow-right inline-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 translate-y-2 md:translate-y-4 ml-4 md:ml-8" />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-lg text-black/50 max-w-sm font-light leading-relaxed">
                We're looking for passionate individuals who want to make a
                difference in the accessibility space. Join us in our mission to
                empower independence.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-black/10 py-2 text-lg font-light focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-black/10 py-2 text-lg font-light focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-black/10 py-2 text-lg font-light focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Department of Interest */}
              <div className="space-y-4 relative">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30">
                  Department of Interest*
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-black/10 py-2 text-lg font-light focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled></option>
                  <option value="marketing">Marketing</option>
                  <option value="content_creation">Content Creation</option>
                  <option value="outreach">Outreach</option>
                </select>
                <div className="absolute right-0 bottom-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-black/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4 relative">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30">
                  Interests*
                </label>
                <div className="flex flex-wrap gap-3">
                  {["CAD", "Programming", "AI", "Engineering", "Designing", "Finance", "Others"].map((interest) => {
                    const isSelected = formData.interests.includes(interest);
                    return (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                          isSelected
                            ? "border-black bg-black text-white"
                            : "border-black/20 text-black/60 hover:border-black/50"
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
                {/* Hidden input to pass data to Formspree */}
                <input type="hidden" name="interests" value={formData.interests.join(", ")} />

                {/* Other Interest Input */}
                {formData.interests.includes("Others") && (
                  <div className="pt-2 space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30">
                      Please Specify Other Interests*
                    </label>
                    <input
                      type="text"
                      name="otherInterest"
                      value={formData.otherInterest}
                      onChange={handleChange}
                      placeholder="e.g. Data Science, Robotics"
                      required
                      className="w-full bg-transparent border-b border-black/10 py-2 text-lg font-light focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* Years of Experience */}
              <div className="space-y-4 relative">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30">
                  Years of Experience*
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-black/10 py-2 text-lg font-light focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled selected></option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
                <div className="absolute right-0 bottom-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-black/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Social Media (Optional) */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30">
                  Social Media Usernames (Optional)
                </label>
                <input
                  type="text"
                  name="socials"
                  value={formData.socials}
                  onChange={handleChange}
                  placeholder="e.g. LinkedIn, Twitter (separate with commas)"
                  className="w-full bg-transparent border-b border-black/10 py-2 text-lg font-light focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Question */}
              <div className="pt-8">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={
                    "Why do you want to join VIVIDSENSE?*\n\nTell us about your experience in your field, tools you are proficient with, and your passion for accessibility and how you'd contribute to our mission. Feel free to include any additional information you believe strengthens your application..."
                  }
                  className="w-full bg-transparent border-b border-black/10 py-4 text-xl font-light focus:outline-none focus:border-black transition-colors resize-none placeholder:text-black/30"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="group/btn relative w-full md:w-auto inline-flex justify-between items-center bg-black text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm border border-black overflow-hidden transition-colors duration-300 hover:text-black"
                >
                  {/* Background Slide Effect */}
                  <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out" />

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-4">
                    SUBMIT APPLICATION
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
