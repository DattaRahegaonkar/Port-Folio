import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const { isDark } = useTheme();

  const education = [
    {
      period: "2022 to Present",
      degree: "Bachelor of Engineering (B.E.)",
      college: "Smt. Kashibai Navale College of Engineering (SKNCOE), Pune, Maharashtra",
      score: "CGPA: 8.08/10",
      desc: "Actively exploring DevOps, Cloud Computing, and Web Development through online courses and personal projects.",
    },
    {
      period: "2021 to 2022",
      degree: "12th (HSC)",
      college: "Raireshwar Secondary & Higher Secondary School Dharmapuri, Parbhani",
      score: "80.50 %",
    },
    {
      period: "2019 to 2020",
      degree: "10th (SSC)",
      college: "Bahirji Smarak Vidyalay, Basmath",
      score: "90.80 %",
    },
  ];

  return (
    <main className={`py-16 px-4 transition-colors duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-[#F2F2FC] text-black"}`}>
      <section id="about" className="max-w-5xl mx-auto">

        {/* Title */}
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold gradient-text inline-block">About Me</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 mx-auto mt-3 rounded-full"
              style={{ background: "linear-gradient(135deg, #6c63ff, #3b82f6)" }}
            />
          </div>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection delay={0.1}>
          <div className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-[#302e4d]"}`}>
              I am Datta Rahegaonkar
            </h2>
            <p className={`text-[16px] leading-[28px] ${isDark ? "text-gray-300" : "text-[#504e70]"}`}>
              Hello, I'm Datta Rahegaonkar, B.E student at SKNCOE, with strong foundation in DevOps,
              Cloud Computing, and Web Development. Passionate about building efficient, automated,
              and scalable systems that bridge the gap between development and operations.{" "}
              <br /><br />
              With hands-on experience in DevOps tools and practices including Git, GitHub Actions,
              SonarQube, Trivy, OWASP, ArgoCD, Jenkins, Docker, Kubernetes, and AWS services. Skilled
              in building automated CI/CD pipelines, cloud deployments, and scripting with Python and
              Bash on Linux systems.
            </p>
          </div>
        </AnimatedSection>

        {/* Personal Info */}
        <AnimatedSection delay={0.2}>
          <div className="mb-10">
            <h3 className={`text-xl font-semibold mb-6 ${isDark ? "text-white" : "text-[#302e4d]"}`}>Personal Info</h3>
            <div className="space-y-3">
              {[
                ["Degree", "Bachelor of Engineering (B.E)"],
                ["City", "Pune, Maharashtra"],
              ].map(([label, value], i) => (
                <motion.p
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`border-b pb-2 font-semibold ${isDark ? "border-gray-700 text-white" : "border-gray-300 text-[#302e4d]"}`}
                >
                  {label} :{" "}
                  <span className={`font-normal ${isDark ? "text-gray-400" : "text-[#504e70]"}`}>{value}</span>
                </motion.p>
              ))}
            </div>
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href="https://drive.google.com/file/d/1Zh1Ot-iHysUShTWIxyqCKTTevtm7Kz6d/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-8 py-3 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ${
                  isDark ? "bg-blue-600 hover:bg-blue-700 glow-blue" : "bg-[#6c63ff] hover:bg-[#5a52e8] glow-purple"
                }`}
              >
                <i className="fa fa-download mr-2" /> Download CV
              </a>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Education Timeline */}
        <AnimatedSection delay={0.3}>
          <h3 className={`text-xl font-semibold mb-8 ${isDark ? "text-white" : "text-[#302e4d]"}`}>Education</h3>
          <div className="relative">
            {/* Vertical line */}
            <div className={`absolute left-[7px] top-0 bottom-0 w-[2px] ${isDark ? "bg-gray-700" : "bg-gray-300"}`} />

            <div className="space-y-8">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    className={`absolute top-1 left-0 w-4 h-4 rounded-full border-2 ${
                      isDark ? "bg-blue-500 border-blue-400" : "bg-[#6c63ff] border-[#6c63ff]"
                    }`}
                  />
                  <div className={`rounded-xl p-5 border transition-all duration-300 hover:shadow-lg ${
                    isDark ? "bg-gray-800 border-gray-700 hover:border-blue-500/50" : "bg-white border-[#d4d4e3] hover:border-[#6c63ff]/50"
                  }`}>
                    <h6 className={`text-sm mb-1 ${isDark ? "text-gray-400" : "text-[#504e70]"}`}>
                      <i className="fa fa-calendar mr-2" />{item.period}
                    </h6>
                    <h4 className={`text-lg font-bold mb-1 ${isDark ? "text-white" : "text-[#302e4d]"}`}>{item.degree}</h4>
                    <p className={`text-sm ${isDark ? "text-gray-300" : "text-[#504e70]"}`}>
                      <span className="font-semibold">College:</span> {item.college}
                    </p>
                    <p className={`text-sm mt-1 ${isDark ? "text-blue-400" : "text-[#6c63ff]"} font-semibold`}>
                      {item.score}
                    </p>
                    {item.desc && (
                      <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-[#504e70]"}`}>{item.desc}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </section>
    </main>
  );
}
