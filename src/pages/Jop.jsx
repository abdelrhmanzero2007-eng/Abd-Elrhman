import jopImg from "../assets/Jop.png";

export default function Jop() {
  return (
    <section className="w-full min-h-screen bg-[#F2EFE9] py-16 lg:py-24 overflow-auto">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#4A592C] text-[#F2EFE9] text-sm font-semibold tracking-wider uppercase mb-4 rounded-full">
            How to Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e1e1e]">
            How It <span className="text-[#4A592C]">Works</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#4A592C] rounded-2xl"></div>
              <img
                src={jopImg}
                alt="How It Works"
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl relative z-10"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d9b46a] rounded-full opacity-20 -z-0"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#1e1e1e] mb-6">
              Choose Your <span className="text-[#4A592C]">Option</span>
            </h3>

            <p className="text-lg text-[#555555] mb-8 leading-relaxed">
              Whether you already have a design or need one created, I've got you covered. Here's how we can work together:
            </p>

            {/* Options Cards */}
            <div className="space-y-6">
              {/* Option 1 */}
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#4A592C]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4A592C] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#F2EFE9] font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1e1e1e] mb-2">
                      You Have a Figma Design
                    </h4>
                    <p className="text-[#555555]">
                      If you already have a Figma design, I can implement it into a fully functional website. Just send me your design and I'll bring it to life!
                    </p>
                  </div>
                </div>
              </div>

              {/* Option 2 */}
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#d9b46a]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d9b46a] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1e1e1e] font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1e1e1e] mb-2">
                      Create & Implement
                    </h4>
                    <p className="text-[#555555]">
                      Don't have a design? No problem! I can create a beautiful Figma design for you and then implement it into a stunning website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Option 3 */}
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#8b8b8b]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8b8b8b] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#F2EFE9] font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1e1e1e] mb-2">
                      Design Only
                    </h4>
                    <p className="text-[#555555]">
                      If you only need the Figma design and want to implement it yourself, you can take the design and go. It's entirely up to you!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="/contact"
                className="px-8 py-4 bg-[#d9b46a] text-[#1e1e1e] font-semibold text-lg rounded-lg hover:bg-[#b88a3b] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-center"
              >
                Get Started
              </a>
              <a
                href="/shop"
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
