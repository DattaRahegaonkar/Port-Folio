import { useTheme } from "../context/ThemeContext";

export default function Projects() {
  const { isDark } = useTheme();
  
  const projects = [
    {
      title: "E-Commerce Web App ( Three Tier )",
      img: "/imgs/projects/signup.png",
      description: "A portfolio site showcasing my DevOps skills and projects using React, TailwindCSS, and CI/CD tools A portfolio site showcasing my DevOps skills and projects using React, TailwindCSS, and CI/CD tools.",
      github: "https://github.com/DattaRahegaonkar/TWSThreeTierAppChallenge/tree/main/Application-Code-2",
      live: "https://ecommercesignuplogin.netlify.app/",
    },
    {
      title: "Climate-Cast Weather Web App",
      img: "/imgs/projects/climate.png",
      description: "A modern weather app built with React and TailwindCSS using OpenWeatherMap API.",
      github: "https://github.com/DattaRahegaonkar/Climate-Cast",
      live: "https://climate-cast-mu.vercel.app/",
    },
    {
      title: "Chatapp DevSecOps Deployment",
      img: "/imgs/projects/chatapp.png",
      description: "Prometheus & Grafana setup for full-stack monitoring of Kubernetes workloads.",
      github: "https://github.com/DattaRahegaonkar/DevSecOps-Project",
      live: "https://chatappwebapp.netlify.app/",
    },
    
  ];

  return (
    <section className={`w-full min-h-screen flex items-center justify-center px-4 py-12 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-[#F2F2FC]'
    }`}>
      <div className="max-w-6xl w-full">
        <h2 className={`text-3xl font-bold text-center mb-10 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-[#302e4d]'
        }`}>
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md border p-4 flex flex-col transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border-gray-600 shadow-gray-900/50' 
                  : 'bg-white border-[#d4d4e3]'
              }`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-[#302e4d]'
              }`}>
                {project.title}
              </h3>
              <p className={`text-sm flex-grow transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-[#504e70]'
              }`}>{project.description}</p>
              <div className="mt-4 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 text-sm text-white rounded transition-colors duration-300 ${
                      isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-[#333] hover:bg-black'
                    }`}
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 text-sm text-white rounded transition-colors duration-300 ${
                      isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#0a66c2] hover:bg-[#084d9e]'
                    }`}
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
