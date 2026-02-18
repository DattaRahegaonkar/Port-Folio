import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={`w-full h-screen flex items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-[#F2F2FC] text-[#302e4d]'
      }`}
    >
      <div className="text-center">
        <img
          src="/Datta Rahegaonkar 2.png"
          alt="Datta Rahegaonkar"
          className={`w-[250px] h-[250px] rounded-full border-[8px] inline-block shadow-md transition-all duration-300 ${
            isDark ? 'border-gray-700 shadow-gray-800/50' : 'border-white shadow-md'
          }`}
        />
        <h1 className={`mt-6 text-[30px] font-bold font-[Rubik] transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-black'
        }`}>
          I'm Datta Rahegaonkar
        </h1>
        <p className={`text-[16px] font-medium leading-[22px] transition-colors duration-300 ${
          isDark ? 'text-gray-300' : 'text-[#333]'
        }`}>
          DevOps | Cloud Computing
        </p>

        <div className="social-links mt-6 flex justify-center gap-3">
          <a
            href="https://github.com/DattaRahegaonkar"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[35px] h-[35px] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-[#333] hover:bg-gray-800'
            }`}
          >
            <i className="fa-brands fa-github text-[16px]"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/datta-rahegaonkar/"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[35px] h-[35px] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark ? 'bg-blue-600 hover:bg-blue-500' : 'bg-[#0a66c2] hover:bg-blue-700'
            }`}
          >
            <i className="fa-brands fa-linkedin-in text-[16px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
