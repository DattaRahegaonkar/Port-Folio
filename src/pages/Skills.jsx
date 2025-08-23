// src/pages/Skills.jsx
import { useTheme } from "../context/ThemeContext";

export default function Skills() {
  const { isDark } = useTheme();
  
  const skills = [
    { name: "Docker", img: "/imgs/skills/docker.png" },
    { name: "Linux", img: "/imgs/skills/linux.png" },
    { name: "Git", img: "/imgs/skills/git.png" },
    { name: "Python", img: "/imgs/skills/python.png" },
    { name: "GitHub", img: "/imgs/skills/github.png" },
    { name: "Scripting", img: "/imgs/skills/shell.png" },
    { name: "AWS", img: "/imgs/skills/aws.png" },
    { name: "Kubernetes", img: "/imgs/skills/kubernetes.png" },
    { name: "Jenkins", img: "/imgs/skills/jenkins.png" },
    { name: "SonarQube", img: "/imgs/skills/sonarqube.png" },
    { name: "Trivy", img: "/imgs/skills/trivy.png" },
    { name: "ArgoCD", img: "/imgs/skills/argocd.png" },
    { name: "HTML5", img: "/imgs/skills/html.png" },
    { name: "CSS", img: "/imgs/skills/css.png" },
    { name: "JavaScript", img: "/imgs/skills/js.png" },
    { name: "Tailwind CSS", img: "/imgs/skills/Tailwind.png" },
    { name: "Node.js", img: "/imgs/skills/nodejs.png" },
    { name: "MongoDB", img: "/imgs/skills/mongodb.png" },
    { name: "MySQL", img: "/imgs/skills/mysql.png" },
  ];

  return (
    <section className={`w-full min-h-screen flex items-center justify-center px-4 py-12 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-[#F2F2FC]'
    }`}>
      <div className="max-w-6xl w-full">
        <h2 className={`text-3xl font-bold text-center mb-10 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-[#302e4d]'
        }`}>
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border border-gray-600 shadow-gray-900/50' 
                  : 'bg-white border border-[#d4d4e3]'
              }`}
            >
              <div className="w-20 h-20 mb-4">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className={`font-medium text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-[#504e70]'
              }`}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
