import { motion } from 'motion/react';
import { FileText, Download, ExternalLink } from 'lucide-react';

export function Resume() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
          
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-12 h-12 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Resume
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  Download my comprehensive resume to learn more about my experience, education, and achievements.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://drive.google.com/file/d/1fkiVS5BuPbLnl00g8XWbCFBdgKgTwVs2/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Resume
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1fkiVS5BuPbLnl00g8XWbCFBdgKgTwVs2"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full text-white hover:bg-white/5 transition-all duration-300"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
