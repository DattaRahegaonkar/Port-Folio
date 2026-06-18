import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={`relative w-full h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-[#F2F2FC] text-[#302e4d]"
      }`}
    >
      {/* Background animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${
            isDark ? "bg-blue-500" : "bg-purple-400"
          }`}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className={`absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDark ? "bg-purple-500" : "bg-blue-400"
          }`}
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={`absolute top-1/2 left-1/3 w-48 h-48 rounded-full blur-3xl opacity-10 ${
            isDark ? "bg-indigo-400" : "bg-pink-300"
          }`}
        />
      </div>

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${isDark ? "bg-blue-400" : "bg-purple-400"} animate-pulse-slow`}
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
          }}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Main content */}
      <div className="text-center z-10 px-4">
        {/* Profile image with floating + glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="inline-block animate-float"
        >
          <div className={`relative inline-block rounded-full p-1 ${isDark ? "glow-blue" : "glow-purple"}`}
            style={{
              background: "linear-gradient(135deg, #6c63ff, #3b82f6)",
              padding: "4px",
            }}
          >
            <img
              src="/PortFolio.jpeg"
              alt="Datta Rahegaonkar"
              className={`w-[220px] h-[220px] rounded-full border-4 ${
                isDark ? "border-gray-900" : "border-white"
              }`}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-6 text-[32px] sm:text-[40px] font-bold font-[Rubik]"
        >
          I'm{" "}
          <span className="gradient-text">Datta Rahegaonkar</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className={`text-[18px] font-semibold mt-2 h-8 ${isDark ? "text-blue-400" : "text-[#6c63ff]"}`}
        >
          <TypeAnimation
            sequence={[
              "DevOps Engineer 🚀",
              2000,
              "Cloud Computing ☁️",
              2000,
              "CI/CD Automation ⚙️",
              2000,
              "Kubernetes & Docker 🐳",
              2000,
              "Web Developer 💻",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <motion.a
            href="https://github.com/DattaRahegaonkar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className={`w-[45px] h-[45px] text-white rounded-full flex items-center justify-center shadow-lg ${
              isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-[#333] hover:bg-gray-800"
            }`}
          >
            <i className="fa-brands fa-github text-[18px]"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/datta-rahegaonkar/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className={`w-[45px] h-[45px] text-white rounded-full flex items-center justify-center shadow-lg ${
              isDark ? "bg-blue-600 hover:bg-blue-500" : "bg-[#0a66c2] hover:bg-blue-700"
            }`}
          >
            <i className="fa-brands fa-linkedin-in text-[18px]"></i>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-12 flex flex-col items-center gap-1"
        >
          <span className={`text-xs font-medium ${isDark ? "text-gray-500" : "text-gray-400"}`}>scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-5 h-8 border-2 rounded-full flex items-start justify-center pt-1 ${
              isDark ? "border-gray-600" : "border-gray-400"
            }`}
          >
            <div className={`w-1 h-2 rounded-full ${isDark ? "bg-blue-400" : "bg-[#6c63ff]"}`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
