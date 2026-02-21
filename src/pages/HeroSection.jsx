import myImg from "../assets/Image.png";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center bg-[#F2EFE9] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4A592C] rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#d9b46a] rounded-full opacity-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
        {/* Image Content */}
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
          <div className="relative z-10">
            <img 
              src={myImg} 
              className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl" 
              alt="Abd Elrhman - Frontend Developer" 
            />
          </div>
          {/* Decorative overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#4A592C]/5 to-[#d9b46a]/5 rounded-full -z-0 blur-3xl"></div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10 order-2 lg:order-1">
          <span className="inline-block px-4 py-2 bg-[#4A592C] text-[#F2EFE9] text-sm font-semibold tracking-wider uppercase mb-6 rounded-full">
            Frontend Developer
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-[#1e1e1e] mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-[#4A592C]">Abd Elrhman</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#555555] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A passionate Frontend Developer specializing in building stunning, responsive, and user-friendly web applications. I turn ideas into elegant digital experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-[#d9b46a] text-[#1e1e1e] font-semibold text-lg rounded-lg hover:bg-[#b88a3b] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              View Projects
            </button>
            <button className="px-8 py-4 border-2 border-[#4A592C] text-[#4A592C] font-semibold text-lg rounded-lg hover:bg-[#4A592C] hover:text-[#F2EFE9] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              Contact Me
            </button>
          </div>

          {/* Tech Stack / Skills */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8 pt-8 border-t border-[#e8e1d7]">
               <span className="px-4 py-2 bg-[#4A592C]/10 text-[#4A592C] text-sm font-medium rounded-full">Html</span>
            <span className="px-4 py-2 bg-[#4A592C]/10 text-[#4A592C] text-sm font-medium rounded-full">Css</span>
            <span className="px-4 py-2 bg-[#4A592C]/10 text-[#4A592C] text-sm font-medium rounded-full">Bootstrap</span>

            <span className="px-4 py-2 bg-[#4A592C]/10 text-[#4A592C] text-sm font-medium rounded-full">React</span>
            <span className="px-4 py-2 bg-[#4A592C]/10 text-[#4A592C] text-sm font-medium rounded-full">JavaScript</span>
            <span className="px-4 py-2 bg-[#4A592C]/10 text-[#4A592C] text-sm font-medium rounded-full">Tailwind CSS</span>
         
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#4A592C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
