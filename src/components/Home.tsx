import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              id="user-detail-name"
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Deepak Dilip Patil
            </h1>
            <p
              id="user-detail-intro"
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Full Stack Developer specializing in MERN stack with a passion for
              creating beautiful, responsive web applications. Experienced in
              React, Node.js, and modern web technologies.
            </p>
            <div className="flex space-x-4 mb-8">
              <a
                href="https://drive.google.com/file/d/1OeqBZAmzwtP52YG0wyd7KPWqcLTUHxZr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                id="resume-link-2"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Download Resume
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/deepakpatil26"
                id="contact-github"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/deepak-patil-28542b280"
                id="contact-linkedin"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:deepakpatil2612@gmail.com"
                id="contact-email"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+918805991606"
                id="contact-phone"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dc7cezsyp/image/upload/v1734321970/ProfilePic_lj6ien.png"
              alt="Professional headshot"
              className="home-img rounded-full w-80 h-80 object-cover shadow-lg"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://via.placeholder.com/320?text=Profile+Image";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
