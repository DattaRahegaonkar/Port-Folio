import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Web App (Three Tier)",
    img: "/imgs/projects/signup.png",
    description: "Three-tier architecture e-commerce app deployed on AWS with CI/CD pipeline using Jenkins, Docker, and Kubernetes.",
    github: "https://github.com/DattaRahegaonkar/TWSThreeTierAppChallenge/tree/main/Application-Code-2",
    live: "https://ecommercesignuplogin.netlify.app/",
    tags: ["AWS", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    title: "Climate-Cast Weather App",
    img: "/imgs/projects/climate.png",
    description: "A modern weather app built with React and TailwindCSS using OpenWeatherMap API with real-time forecasts.",
    github: "https://github.com/DattaRahegaonkar/Climate-Cast",
    live: "https://climatewcast.netlify.app/",
    tags: ["React", "TailwindCSS", "API"],
  },
  {
    title: "Chatapp DevSecOps Deployment",
    img: "/imgs/projects/chatapp.png",
    description: "Full DevSecOps pipeline with SonarQube, Trivy, ArgoCD, Prometheus & Grafana monitoring on Kubernetes.",
    github: "https://github.com/DattaRahegaonkar/DevSecOps-Project",
    live: "https://chatappwebapp.netlify.app/",
    tags: ["DevSecOps", "ArgoCD", "Grafana", "K8s"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
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
          <h2 className="text-4xl font-bold gradient-text inline-block">Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "70px" }}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              whileHover={{ y: -8 }}
              className="rounded-2xl overflow-hidden border border-gray-700 bg-gray-800 flex flex-col hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden h-48 group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                      >
                        <i className="fa-brands fa-github mr-1" />GitHub
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-blue-500/80 backdrop-blur-sm text-white text-xs rounded-full hover:bg-blue-500 transition-colors"
                      >
                        <i className="fa fa-external-link mr-1" />Live
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-sm flex-grow leading-relaxed text-gray-300">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex-1 text-center py-2 text-sm font-medium rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-all duration-300"
                    >
                      <i className="fa-brands fa-github mr-1" />GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex-1 text-center py-2 text-sm font-medium rounded-lg text-white transition-all duration-300"
                      style={{ background: "linear-gradient(135deg, #6c63ff, #3b82f6)" }}
                    >
                      <i className="fa fa-external-link mr-1" />Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
