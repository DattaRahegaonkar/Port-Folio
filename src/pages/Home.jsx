export default function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex items-center justify-center bg-[#F2F2FC] text-[#302e4d]"
    >
      <div className="text-center">
        <img
          src="/Datta Rahegaonkar 2.png"
          alt="Datta Rahegaonkar"
          className="w-[250px] h-[250px] rounded-full border-[8px] border-white inline-block shadow-md"
        />
        <h1 className="mt-6 text-[30px] font-bold text-black font-[Rubik]">
          I'm Datta Rahegaonkar
        </h1>
        <p className="text-[16px] font-medium text-[#333] leading-[22px]">
          DevOps | Cloud Computing | Web Development Enthusiast
        </p>

        <div className="social-links mt-6 flex justify-center gap-3">
          <a
            href="https://github.com/DattaRahegaonkar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[35px] h-[35px] bg-[#333] text-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <i className="fa-brands fa-github text-[16px]"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/datta-rahegaonkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[35px] h-[35px] bg-[#0a66c2] text-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <i className="fa-brands fa-linkedin-in text-[16px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
