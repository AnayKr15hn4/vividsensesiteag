import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Anay Krishna",
    role: "Co-President",
    image: "/people/profilePicFace.JPG",
    linkedin: "https://www.linkedin.com/in/anay-krishna-b39183359/",
    mail: "iamanaykrishna@gmail.com",
  },
  {
    name: "Eshaan Revankar",
    role: "Co-President",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEHUlMvwak7Ng/profile-displayphoto-shrink_200_200/B4DZXf5AY6HIAY-/0/1743218018403?e=1774483200&v=beta&t=ekM3Qw9jw6kOn8GUut_OQCx12DRoQzMwDeLLTGRBQ40",
    linkedin: "https://www.linkedin.com/in/eshaan-revankar/",
    mail: "eshaan0825@gmail.com",
  },
  {
    name: "Advay Pingle",
    role: "Associate",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEP4tRjSr1Y3w/profile-displayphoto-shrink_400_400/B4DZtyWDOyHQAg-/0/1767149942070?e=1774483200&v=beta&t=ig8n2C2whAyFtnXOYcldYRNW4kBMFrA91FekWBC6iRY",
    linkedin: "https://www.linkedin.com/in/advay-pingle-0561833a2/",
    mail: "pingleadvay@gmail.com",
  },
];

const employees = [
  {
    name: "Samuel Asefa",
    role: "Mentor",
    linkedin: "https://www.linkedin.com/in/samuelasefa/",
    mail: "samuelasefa20@gmail.com",
  },
  {
    name: "Wasim Vorvoi",
    role: "AI Engineer",
    linkedin: "https://www.linkedin.com/feed/",
    mail: "wasim@example.com",
  },
  {
    name: "Vishwesh Hariprasad",
    role: "Software Engineer",
    linkedin: "linkedin.com/in/vishwesh-hariprasad-50aa6b342",
    mail: "vhariprasa@gmail.com",
  },
];

export const TeamPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-dark min-h-screen text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="w-full h-px bg-white/10 mb-8" />

        <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-white/40">
          <span>02</span>
          <span>Personnel</span>
          <span className="hidden md:block">The Minds Behind VividSense</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <h1 className="text-7xl md:text-[160px] font-display font-medium leading-[0.85] tracking-[-0.04em] text-white mb-12 uppercase">
            Meet the <br />
            Team.
          </h1>

          <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl leading-relaxed">
            We are a group of engineers and designers working to build
            technology that increases independence and accessibility.
          </p>
        </motion.div>

        {/* Leadership / Core Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 bg-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-6 right-6 flex flex-col gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#c1c1c1] transition-colors shadow-xl"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${member.mail}`}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#c1c1c1] transition-colors shadow-xl"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white">
                {member.role}
              </span>

              <h3 className="text-3xl font-display font-medium mt-1">
                {member.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Additional Employees */}
        <div className="mt-32">
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-12 uppercase">
            Additional Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((emp, i) => (
              <motion.div
                key={emp.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 border border-white/10 rounded-sm bg-white/5 flex flex-col items-center gap-4"
              >
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70">
                  {emp.role}
                </span>

                <h3 className="text-2xl font-display font-medium mt-2">
                  {emp.name}
                </h3>

                <div className="flex gap-4 mt-2">
                  <a
                    href={emp.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#c1c1c1] transition-colors shadow-xl"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${emp.mail}`}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#c1c1c1] transition-colors shadow-xl"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
