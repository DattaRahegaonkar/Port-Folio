import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white">

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 bg-blue-500"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 bg-purple-500"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full blur-3xl opacity-10 bg-indigo-400"
        />
      </div>

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400 animate-pulse-slow"
          style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Content */}
      <div className="text-center z-10 px-4">

        {/* Profile image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="inline-block animate-float"
        >
          <div className="rounded-full p-[4px] glow-blue" style={{ background: "linear-gradient(135deg, #6c63ff, #3b82f6)" }}>
            <img
              src="/PortFolio.jpeg"
              alt="Datta Rahegaonkar"
              className="w-[220px] h-[220px] rounded-full border-4 border-gray-900"
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
          I'm <span className="gradient-text">Datta Rahegaonkar</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-[18px] font-semibold mt-2 h-8 text-blue-400"
        >
          <TypeAnimation
            sequence={[
              "DevOps Engineer 🚀", 2000,
              "Cloud Computing ☁️", 2000,
              "CI/CD Automation ⚙️", 2000,
              "Kubernetes & Docker 🐳", 2000,
              "Web Developer 💻", 2000,
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
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-[45px] h-[45px] text-white rounded-full flex items-center justify-center shadow-lg bg-gray-700 hover:bg-gray-600"
          >
            <i className="fa-brands fa-github text-[18px]"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/datta-rahegaonkar/"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-[45px] h-[45px] text-white rounded-full flex items-center justify-center shadow-lg bg-blue-600 hover:bg-blue-500"
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
          <span className="text-xs font-medium text-gray-500">scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-gray-600 rounded-full flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 rounded-full bg-blue-400" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
