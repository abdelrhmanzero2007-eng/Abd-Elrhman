import myImg from "../assets/Img2.png";

export default function About() {
  return (
    <section className="w-full min-h-screen bg-[#F2EFE9] py-16 lg:py-24 overflow-auto">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#4A592C] text-[#F2EFE9] text-sm font-semibold tracking-wider uppercase mb-4 rounded-full">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e1e1e]">
            Get to Know <span className="text-[#4A592C]">Me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#4A592C] rounded-2xl"></div>
              <img
                src={myImg}
                alt="Abd Elrhman - Frontend Developer"
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl relative z-10"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d9b46a] rounded-full opacity-20 -z-0"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#1e1e1e] mb-6">
              I'm a Passionate{" "}
              <span className="text-[#4A592C]">Frontend Developer</span>
            </h3>

            <p className="text-lg text-[#555555] mb-6 leading-relaxed">
              Hi, I'm <strong>Abd Elrhman</strong>, a creative Frontend
              Developer with a passion for building beautiful, responsive, and
              user-friendly web applications. I specialize in turning ideas into
              elegant digital experiences that users love.
            </p>

            <p className="text-lg text-[#555555] mb-8 leading-relaxed">
              With expertise in modern web technologies, I focus on writing
              clean, efficient code and creating seamless user interfaces. I'm
              constantly learning and staying up-to-date with the latest trends
              in web development.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-[#1e1e1e] mb-4">
                My Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#4A592C] text-[#F2EFE9] text-sm font-medium rounded-lg">
                  React
                </span>
                <span className="px-4 py-2 bg-[#4A592C] text-[#F2EFE9] text-sm font-medium rounded-lg">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-[#4A592C] text-[#F2EFE9] text-sm font-medium rounded-lg">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-[#4A592C] text-[#F2EFE9] text-sm font-medium rounded-lg">
                  HTML
                </span>
                <span className="px-4 py-2 bg-[#4A592C] text-[#F2EFE9] text-sm font-medium rounded-lg">
                  CSS
                </span>
                <span className="px-4 py-2 bg-[#4A592C] text-[#F2EFE9] text-sm font-medium rounded-lg">
                  Git
                </span>
                <span className="px-4 py-2 bg-[#4A592C] text-[#F2EFE9] text-sm font-medium rounded-lg">
                  Git Hub
                </span>
                <span className="px-4 py-2 bg-[#4A592C] text-[#F2EFE9] text-sm font-medium rounded-lg">
                  Responsive Design
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8 pt-6 border-t border-[#e8e1d7]">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#4A592C]">2+</p>
                <p className="text-sm text-[#8b8b8b]">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#4A592C]">20+</p>
                <p className="text-sm text-[#8b8b8b]">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#4A592C]">10+</p>
                <p className="text-sm text-[#8b8b8b]">Happy Clients</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-[#d9b46a] text-[#1e1e1e] font-semibold text-lg rounded-lg hover:bg-[#b88a3b] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-center"
              >
                Let's Talk
              </a>
              <a
                href="/"
                className="px-8 py-4 border-2 border-[#4A592C] text-[#4A592C] font-semibold text-lg rounded-lg hover:bg-[#4A592C] hover:text-[#F2EFE9] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-center"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
