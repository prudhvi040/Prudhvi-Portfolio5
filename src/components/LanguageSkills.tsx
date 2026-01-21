import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Globe } from 'lucide-react';

const languages = [
  { 
    name: 'English', 
    level: 'C1',
    percentage: 85,
    color: '#a855f7',
    description: 'Advanced Professional'
  },
  { 
    name: 'German', 
    level: 'A2',
    percentage: 35,
    color: '#ec4899',
    description: 'Elementary'
  },
];

function CircularProgress({ percentage, color }: { percentage: number; color: string }) {
  const data = [
    { value: percentage },
    { value: 100 - percentage }
  ];

  return (
    <ResponsiveContainer width={180} height={180}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
        >
          <Cell fill={color} />
          <Cell fill="rgba(255,255,255,0.1)" />
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-3xl fill-white font-bold"
        >
          {percentage}%
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}

export function LanguageSkills() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <Globe className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 text-sm">Global Communication</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Language Proficiency
          </h2>
          <p className="text-gray-400 text-lg">Multilingual capabilities for international collaboration</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <CircularProgress percentage={language.percentage} color={language.color} />
                  <h3 className="text-3xl text-white mt-6 mb-2">{language.name}</h3>
                  <div className="px-4 py-1 rounded-full text-sm mb-2" style={{ backgroundColor: `${language.color}20`, color: language.color }}>
                    {language.level}
                  </div>
                  <p className="text-gray-400">{language.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
