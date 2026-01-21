import { motion } from 'motion/react';
import { ExternalLink, Download, Github } from 'lucide-react';

const projects = [
  {
    title: 'LIBRARY MANAGEMENT',
    subtitle: 'SYSTEM',
    description: 'Database-driven system built with Java in Eclipse, featuring comprehensive book tracking, user management, and automated workflows.',
    tech: ['JAVA', 'DATABASE', 'ECLIPSE'],
    category: 'DATABASE SYSTEM',
    links: {
      view: 'https://github.com/prudhvi040/LibraryManagementSystem',
      download: 'https://github.com/prudhvi040/LibraryManagementSystem/archive/refs/heads/main.zip'
    }
  },
  {
    title: 'DATA SCIENCE',
    subtitle: 'JOB ANALYSIS',
    description: 'Comprehensive skill demand analysis using real-world job data, uncovering trends and insights in the data science employment landscape.',
    tech: ['DATA ANALYSIS', 'VISUALIZATION'],
    category: 'MARKET RESEARCH',
    links: {
      view: 'https://docs.google.com/spreadsheets/d/1TEzH5u4rVHSG6AeIQxVCawG-mhvdFaIL6Gj-eCr4nw/edit'
    }
  },
  {
    title: 'JOB ADVISOR',
    subtitle: 'EXPERT SYSTEM',
    description: 'Intelligent rule-based recommendation system that matches candidates with optimal career paths using expert knowledge algorithms.',
    tech: ['PYTHON'],
    category: 'EXPERT SYSTEM',
    links: {
      view: 'https://github.com/prudhvi040/JobExpertSystem',
      download: 'https://github.com/prudhvi040/JobExpertSystem/archive/refs/heads/main.zip'
    }
  },
  {
    title: 'EMPLOYEE',
    subtitle: 'ATTRITION PREDICTION',
    description: 'Machine learning-based churn prediction system that identifies at-risk employees and provides actionable retention insights.',
    tech: ['MACHINE LEARNING', 'PYTHON'],
    category: 'PREDICTIVE ANALYTICS',
    links: {
      view: 'https://github.com/prudhvi040/Attrition-ML',
      download: 'https://github.com/prudhvi040/Attrition-ML/archive/refs/heads/main.zip'
    }
  },
  {
    title: 'AI RECRUITMENT',
    subtitle: 'SCREENING AGENT',
    description: 'Automated resume screening and ranking tool powered by AI, streamlining the recruitment process with intelligent candidate evaluation.',
    tech: ['AI', 'AUTOMATION', 'NLP'],
    category: 'AI SYSTEM',
    links: {
      view: 'https://run.relay.app/workflows/cmk76s5ii02nc00knfzqx7zb2/edit'
    }
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-4 leading-none">
            FEATURED
            <br />
            <span className="text-red-600">PROJECTS</span>
          </h2>
          <div className="h-1 w-32 bg-red-600" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="border-2 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 h-full flex flex-col">
                {/* Category Tag */}
                <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold mb-6 self-start">
                  {project.category}
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-3xl font-black leading-tight">
                    {project.title}
                  </h3>
                  <h3 className="text-3xl font-black leading-tight">
                    {project.subtitle}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm mb-6 opacity-80 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-current text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.links.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    VIEW
                  </a>
                  {project.links.download && (
                    <a
                      href={project.links.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-current text-sm font-bold hover:bg-white hover:text-black transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      CODE
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative Pattern (shows on hover) */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-red-600 rounded-full" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-2 border-white p-12 relative overflow-hidden group"
        >
          {/* Red Gradient Blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-red-500 to-red-600 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-4xl font-black mb-4">DOWNLOAD MY RESUME</h3>
              <p className="text-sm opacity-80">
                Get a comprehensive overview of my education and achievements
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://drive.google.com/file/d/1fkiVS5BuPbLnl00g8XWbCFBdgKgTwVs2/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition-colors"
              >
                VIEW RESUME
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1fkiVS5BuPbLnl00g8XWbCFBdgKgTwVs2"
                className="px-8 py-4 border-2 border-white text-white text-sm font-bold hover:bg-white hover:text-black transition-colors"
              >
                DOWNLOAD PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}