import contactImg from "../assets/Contact.png";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-MinWarmWhite py-16 lg:py-24 overflow-auto">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#4A592C] text-MinWarmWhite text-sm font-semibold tracking-wider uppercase mb-4 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-MinTextPrimary">
            Contact <span className="text-[#4A592C]">Me</span>
          </h2>
          <p className="text-lg text-MinTextSecondary mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#4A592C] rounded-2xl"></div>
              <img
                src={contactImg}
                alt="Contact Abd Elrhman"
                className="w-full h-auto max-h-125 object-cover rounded-2xl shadow-2xl relative z-10"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-MinWoodYellow rounded-full opacity-20 -z-0"></div>
            </div>
          </div>

          {/* Contact Form & Info */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-bold text-MinTextPrimary mb-6">
              Let's <span className="text-[#4A592C]">Connect</span>
            </h3>
            
            <p className="text-lg text-MinTextSecondary mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to contact me through any of the following platforms.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#4A592C] rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-MinWarmWhite text-xl" />
                </div>
                <div>
                  <p className="text-sm text-MinTextMuted">Email</p>
                  <p className="text-MinTextPrimary font-medium">abdelrhman.zero.2007@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#4A592C] rounded-full flex items-center justify-center">
                  <FaPhone className="text-MinWarmWhite text-xl" />
                </div>
                <div>
                  <p className="text-sm text-MinTextMuted">Phone</p>
                  <p className="text-MinTextPrimary font-medium">+20 1014050596</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#4A592C] rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-MinWarmWhite text-xl" />
                </div>
                <div>
                  <p className="text-sm text-MinTextMuted">Location</p>
                  <p className="text-MinTextPrimary font-medium">Egypt</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-MinTextPrimary mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-[#4A592C] rounded-full flex items-center justify-center text-MinWarmWhite hover:bg-MinGreenDark transition-colors duration-300"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-[#4A592C] rounded-full flex items-center justify-center text-MinWarmWhite hover:bg-MinGreenDark transition-colors duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-[#4A592C] rounded-full flex items-center justify-center text-MinWarmWhite hover:bg-MinGreenDark transition-colors duration-300"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-MinBorder rounded-lg focus:outline-none focus:border-[#4A592C] focus:ring-1 focus:ring-[#4A592C] bg-white text-MinTextPrimary placeholder-[#8b8b8b]"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 border border-MinBorder rounded-lg focus:outline-none focus:border-[#4A592C] focus:ring-1 focus:ring-[#4A592C] bg-white text-MinTextPrimary placeholder-[#8b8b8b]"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-4 py-3 border border-MinBorder rounded-lg focus:outline-none focus:border-[#4A592C] focus:ring-1 focus:ring-[#4A592C] bg-white text-MinTextPrimary placeholder-[#8b8b8b]"
              />
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className="w-full px-4 py-3 border border-MinBorder rounded-lg focus:outline-none focus:border-[#4A592C] focus:ring-1 focus:ring-[#4A592C] bg-white text-MinTextPrimary placeholder-[#8b8b8b] resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-MinWoodYellow text-MinTextPrimary font-semibold text-lg rounded-lg hover:bg-MinWoodGold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
