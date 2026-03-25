const About = () => {
  return (
    <section
      id="about"
      className="about section py-20 bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 dark:text-gray-300">
            I'm a dedicated Software Engineer and AI-Enabled Full Stack
            Developer with a strong foundation in the MERN stack and a growing
            focus on Generative AI. Over the past 2 years, I've transformed my
            passion for technology into a successful freelance career,
            delivering 15+ production-ready web applications to satisfied
            clients.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            I specialize in building intelligent, scalable solutions using
            React, TypeScript, Node.js, and cutting-edge AI technologies like
            OpenAI API, RAG (Retrieval-Augmented Generation), and Qdrant. My
            approach combines robust architecture with intuitive user
            experiences.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Beyond coding, I'm an active contributor to open-source and
            constantly exploring the frontier of AI to build tools that matter.
            I'm committed to writing clean, maintainable code and staying ahead
            of the curve in the rapidly evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
