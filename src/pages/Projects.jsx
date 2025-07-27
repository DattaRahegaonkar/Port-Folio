export default function Projects() {
  const projects = [
    {
      title: "DevOps Portfolio",
      img: "/imgs/projects/devops-portfolio.png",
      description: "A portfolio site showcasing my DevOps skills and projects using React, TailwindCSS, and CI/CD tools A portfolio site showcasing my DevOps skills and projects using React, TailwindCSS, and CI/CD tools.",
      github: "https://github.com/DattaRahegaonkar/devops-portfolio",
      live: "https://datta.dev",
    },
    {
      title: "Weather App",
      img: "/imgs/projects/weather-app.png",
      description: "A modern weather app built with React and TailwindCSS using OpenWeatherMap API.",
      github: "https://github.com/DattaRahegaonkar/weather-app",
      live: "https://weather.datta.dev",
    },
    {
      title: "Kubernetes Monitoring",
      img: "/imgs/projects/k8s-monitor.png",
      description: "Prometheus & Grafana setup for full-stack monitoring of Kubernetes workloads.",
      github: "https://github.com/DattaRahegaonkar/k8s-monitoring",
      live: "https://weather.datta.dev",
    },
    
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#F2F2FC] px-4 py-12">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center text-[#302e4d] mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-[#d4d4e3] p-4 flex flex-col"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-[#302e4d] mb-2">
                {project.title}
              </h3>
              <p className="text-[#504e70] text-sm flex-grow">{project.description}</p>
              <div className="mt-4 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm text-white bg-[#333] rounded hover:bg-black transition"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm text-white bg-[#0a66c2] rounded hover:bg-[#084d9e] transition"
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
