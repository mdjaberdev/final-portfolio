import React from "react";
import Container from "../Container";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "fa-brands fa-html5", color: "text-orange-500" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400" },
    {
      name: "React",
      icon: "fa-brands fa-react",
      color: "text-cyan-400",
      animate: "animate-[spin_10s_linear_infinite]",
    },
    { name: "Tailwind", icon: "fa-solid fa-wind", color: "text-teal-400" },
    { name: "Git", icon: "fa-brands fa-git-alt", color: "text-red-500" },
    { name: "Figma", icon: "fa-brands fa-figma", color: "text-purple-400" },
    { name: "Next.js", icon: "fa-solid fa-n", color: "text-white" },
  ];

  return (
    <section
      id="myskills"
      className="py-24 bg-[#202020] relative border-t border-white/5 font-montserrat"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-200 h-200 bg-[#0ea5e9]/5 rounded-full blur-[100px] -z-10"></div>

      <Container>
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-white text-[29px] font-russo">My Skills</h2>
          <div className="hidden md:block h-1 w-8 bg-white relative text-center mx-auto -left-12 mt-2">
            <div className="h-px w-34 bg-white absolute left-0 top-1/2 -translate-y-1/2"></div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed pt-5">
            I use these modern tools to build fast and user-friendly websites.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-[#1e293b]/20 backdrop-blur-sm border border-white/5 p-8 rounded-2xl text-center hover:border-[#0ea5e9]/50 hover:bg-[#1e293b]/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Effect  */}
              <div className="absolute inset-0 bg-linear-to-br from-[#0ea5e9]/0 to-[#0ea5e9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="mb-6 inline-block relative z-10">
                <i
                  className={`${skill.icon} text-5xl md:text-6xl ${skill.color} drop-shadow-lg group-hover:scale-110 transition-transform duration-300 ${skill.animate || ""}`}
                ></i>
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors relative z-10">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
