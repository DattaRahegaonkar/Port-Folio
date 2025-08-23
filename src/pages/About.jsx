import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { isDark } = useTheme();

  return (
    <main className={`py-10 px-4 transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-[#F2F2FC] text-black'
    }`}>
      <section id="about" className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className={`text-3xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-[#302e4d]'
          }`}>About Me</h2>
        </div>

        <div className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-[#302e4d]'
          }`}>
            I am Datta Rahegaonkar
          </h2>
          <p className={`text-[16px] leading-[25px] transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-[#504e70]'
          }`}>
            Hello, I'm Datta Rahegaonkar, B.E student at SKNCOE, with strong foundation in DevOps,
            Cloud Computing, and Web Development. Passionate about building efficient, automated,
            and scalable systems that bridge the gap between development and operations. <br />
            With hands-on experience in DevOps tools and practices including Git, GitHub Actions,
            SonarQube, Trivy, OWASP, Argocd, Jenkins, Docker, Kubernetes, and AWS services. Skilled
            in building automated CI/CD pipelines, cloud deployments, and scripting with Python and
            Bash on Linux systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-[#302e4d]'
            }`}>
              Personal Info
            </h3>
            <div className="space-y-3">
              {/* <p className={`border-b pb-2 font-semibold transition-colors duration-300 ${
                isDark ? 'border-gray-600 text-white' : 'border-gray-300 text-[#302e4d]'
              }`}>
                Website :
                <span className={`font-normal transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-[#504e70]'
                }`}> Datta Rahegaonkar</span>
              </p> */}
              <p className={`border-b pb-2 font-semibold transition-colors duration-300 ${
                isDark ? 'border-gray-600 text-white' : 'border-gray-300 text-[#302e4d]'
              }`}>
                Degree :
                <span className={`font-normal transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-[#504e70]'
                }`}> Bachelor of Engineering (B.E)</span>
              </p>
              <p className={`border-b pb-2 font-semibold transition-colors duration-300 ${
                isDark ? 'border-gray-600 text-white' : 'border-gray-300 text-[#302e4d]'
              }`}>
                City :
                <span className={`font-normal transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-[#504e70]'
                }`}> Pune, Maharashtra</span>
              </p>
            </div>
            <div className="mt-6">
              <a
                href="/src/assets/Datta_Rahegaonkar_2025.pdf"
                target="_blank"
                className={`inline-block px-6 py-2 text-white font-semibold rounded transition-colors duration-300 ${
                  isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#6c63ff] hover:bg-[#5a52e8]'
                }`}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-[#302e4d]'
          }`}>Education</h3>
          <div className={`space-y-6 border rounded-lg p-6 transition-colors duration-300 ${
            isDark ? 'border-gray-600 bg-gray-800' : 'border-[#d4d4e3] bg-white'
          }`}>
            {/* B.E. */}
            <div className="relative pl-10">
              <div className={`absolute top-1 left-0 w-4 h-4 rounded-full ${
                isDark ? 'bg-blue-500' : 'bg-[#6c63ff]'
              }`} />
              <h6 className={`text-sm font-normal mb-1 transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-[#504e70]'
              }`}>
                <i className="fa fa-calendar mr-2" /> 2022 to Present
              </h6>
              <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-[#302e4d]'
              }`}>
                Bachelor of Engineering (B.E.)
              </h4>
              <p className={`text-[16px] leading-[25px] transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-[#504e70]'
              }`}>
                <span className={`font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-[#302e4d]'
                }`}>College :</span>{" "}
                Smt. Kashibai Navale College of Engineering (SKNCOE), Pune, Maharashtra <br />
                <span className={`font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-[#302e4d]'
                }`}>Aggregate CGPA :</span> 8.08/10 <br />
                <br />
                Currently pursuing B.E., where I have been actively exploring and building skills
                in DevOps, Cloud Computing, and Web Development through online courses, and personal
                projects alongside my academic curriculum.
              </p>
            </div>

            {/* 12th */}
            <div className="relative pl-10">
              <div className={`absolute top-1 left-0 w-4 h-4 rounded-full ${
                isDark ? 'bg-blue-500' : 'bg-[#6c63ff]'
              }`} />
              <h6 className={`text-sm font-normal mb-1 transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-[#504e70]'
              }`}>
                <i className="fa fa-calendar mr-2" /> 2021 to 2022
              </h6>
              <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-[#302e4d]'
              }`}>12th (HSC)</h4>
              <p className={`text-[16px] leading-[25px] transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-[#504e70]'
              }`}>
                <span className={`font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-[#302e4d]'
                }`}>College :</span>{" "}
                Raireshwar Secondary & Higher Secondary School Dharmapuri, Parbhani <br />
                <span className={`font-semibold transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-[#504e70]'
                }`}>Percentage :</span> 80.50 %
              </p>
            </div>

            {/* 10th */}
            <div className="relative pl-10">
              <div className={`absolute top-1 left-0 w-4 h-4 rounded-full ${
                isDark ? 'bg-blue-500' : 'bg-[#6c63ff]'
              }`} />
              <h6 className={`text-sm font-normal mb-1 transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-[#504e70]'
              }`}>
                <i className="fa fa-calendar mr-2" /> 2019 to 2020
              </h6>
              <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-[#302e4d]'
              }`}>10th (SSC)</h4>
              <p className={`text-[16px] leading-[25px] transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-[#504e70]'
              }`}>
                <span className={`font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-[#302e4d]'
                }`}>College :</span>{" "}
                Bahirji Smarak Vidyalay, Basmath <br />
                <span className={`font-semibold transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-[#504e70]'
                }`}>Percentage :</span> 90.80 %
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
