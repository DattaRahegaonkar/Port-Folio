import { motion } from "framer-motion";

const skills = [
  { name: "Docker",       img: "/imgs/skills/docker.png" },
  { name: "Linux",        img: "/imgs/skills/linux.png" },
  { name: "Git",          img: "/imgs/skills/git.png" },
  { name: "Python",       img: "/imgs/skills/python.png" },
  { name: "GitHub",       img: "/imgs/skills/github.png" },
  { name: "Scripting",    img: "/imgs/skills/shell.png" },
  { name: "AWS",          img: "/imgs/skills/aws.png" },
  { name: "Kubernetes",   img: "/imgs/skills/kubernetes.png" },
  { name: "Jenkins",      img: "/imgs/skills/jenkins.png" },
  { name: "SonarQube",    img: "/imgs/skills/sonarqube.png" },
  { name: "Trivy",        img: "/imgs/skills/trivy.png" },
  { name: "ArgoCD",       img: "/imgs/skills/argocd.png" },
  { name: "HTML5",        img: "/imgs/skills/html.png" },
  { name: "CSS",          img: "/imgs/skills/css.png" },
  { name: "JavaScript",   img: "/imgs/skills/js.png" },
  { name: "Tailwind CSS", img: "/imgs/skills/Tailwind.png" },
  { name: "Node.js",      img: "/imgs/skills/nodejs.png" },
  { name: "MongoDB",      img: "/imgs/skills/mongodb.png" },
  { name: "MySQL",        img: "/imgs/skills/mysql.png" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-16 bg-gray-900">
      <div className="max-w-6xl w-full">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text inline-block">Skills</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 mx-auto mt-3 rounded-full"
            style={{ background: "linear-gradient(135deg, #6c63ff, #3b82f6)" }}
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-2xl p-5 flex flex-col items-center text-center cursor-pointer border border-gray-700 bg-gray-800 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-16 h-16 mb-3">
                <img src={skill.img} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <p className="font-semibold text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
