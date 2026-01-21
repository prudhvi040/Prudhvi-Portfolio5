import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import profileImage from 'figma:asset/9077a468be0baf92a502f3cd11cc4311ccf592d9.png';

export function Hero() {
  return (
    <section className="min-h-screen bg-white pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[85vh]">
          {/* Left Side - Text */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-4">
                DATA
                <br />
                ANALYST
                <ArrowUpRight className="inline-block w-12 h-12 md:w-16 md:h-16 ml-2" />
              </h1>
              <div className="h-1 w-32 bg-red-600 mb-6" />
              
              {/* New Tagline Section */}
              <div className="space-y-3 mb-4">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                  INSIGHTS.
                </h2>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                  IMPACT.
                </h2>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                  INNOVATION.
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 max-w-lg"
            >
              <p className="text-sm leading-relaxed text-gray-700 font-medium">
                Turning complex data into meaningful insights and data-driven solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition-colors"
              >
                VIEW PROJECTS
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-black text-black text-sm font-bold hover:bg-black hover:text-white transition-colors"
              >
                GET IN TOUCH
              </a>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Red Gradient Blob */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-full blur-3xl opacity-20" />
            
            <div className="relative">
              <img
                src={profileImage}
                alt="Prudhvi Sai Ramisetti"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              <div className="absolute bottom-0 right-0 bg-black text-white p-6">
                <p className="text-2xl font-black">PRUDHVI SAI</p>
                <p className="text-2xl font-black">RAMISETTI</p>
                <div className="mt-4 flex gap-2">
                  <div className="w-12 h-12 border-2 border-red-600 rounded-full" />
                  <div className="w-12 h-12 border-2 border-white rounded-full" />
                  <div className="w-12 h-12 border-2 border-white rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}