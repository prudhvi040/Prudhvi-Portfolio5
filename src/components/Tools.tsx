import { motion } from 'motion/react';
import { Github, Server, Terminal, Blocks } from 'lucide-react';

const tools = [
  { 
    name: 'GITHUB', 
    icon: Github
  },
  { 
    name: 'POSTMAN', 
    icon: Server
  },
  { 
    name: 'VS CODE', 
    icon: Terminal
  },
  { 
    name: 'SUPABASE', 
    icon: Blocks
  },
  
];

export function Tools() {
  return (
    <section id="tools" className="bg-white py-24 relative overflow-hidden">
      {/* Red Gradient Blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-4 leading-none">
            TOOLS
          </h2>
          <div className="h-1 w-32 bg-red-600" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-4 min-h-[120px]">
                  <Icon className="w-10 h-10 flex-shrink-0 group-hover:text-red-600 transition-colors" />
                  <h3 className="text-2xl font-black">{tool.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}