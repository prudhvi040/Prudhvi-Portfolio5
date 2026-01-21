import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import secondImage from 'figma:asset/0f67afb74bd95333b872daaeba7c84c5b9b361bb.png';

const languages = [
  { name: 'English', level: 'C1', percentage: 85, color: '#dc2626', description: 'Advanced Professional' },
  { name: 'German', level: 'A2', percentage: 35, color: '#dc2626', description: 'Elementary' },
];

function CircularProgress({ percentage, color }: { percentage: number; color: string }) {
  const data = [
    { value: percentage },
    { value: 100 - percentage }
  ];

  return (
    <ResponsiveContainer width={140} height={140}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={48}
          outerRadius={65}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
        >
          <Cell fill={color} />
          <Cell fill="#f0f0f0" />
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl fill-black font-black"
        >
          {percentage}%
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}

export function About() {
  return (
    <section id="about" className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Red Gradient Blob */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-6xl md:text-7xl font-black mb-8 leading-none">
                  WHAT'S
                  <br />
                  <span className="text-red-600">ABOUT</span>
                  <br />
                  ME
                </h2>

                <div className="space-y-6">
                  <p className="text-sm leading-relaxed text-gray-700">
                    I am a passionate and detail-driven Data Analyst who loves turning raw data into meaningful insights.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    I am proficient in Data Analysis, Python, and Excel and building interactive dashboards that clearly communicate stories hidden in data.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    I enjoy working with large and complex datasets, where I can explore patterns, clean information, and extract valuable business intelligence.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    My strength lies in analyzing huge volumes of data and researching deeply to uncover trends, risks, and opportunities.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    I also have a strong interest in data engineering concepts, building reliable data flows and structured systems.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    With every project, I aim to combine technical skills with real-world problem solving.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 font-medium">
                    For me, data is not just numbers—it's a powerful tool to drive smarter decisions.
                  </p>
                </div>
              </div>

              {/* Language Skills */}
              <div className="border-t-2 border-black pt-12">
                <h3 className="text-3xl font-black mb-8">
                  LANGUAGE
                  <br />
                  <span className="text-red-600">PROFICIENCY</span>
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <CircularProgress percentage={lang.percentage} color={lang.color} />
                        <h4 className="text-xl font-black mt-4 mb-1">{lang.name}</h4>
                        <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold mb-2">
                          {lang.level}
                        </div>
                        <p className="text-xs opacity-70">{lang.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            {/* Photo Container */}
            <div className="relative group overflow-hidden border-2 border-black hover:border-red-600 transition-colors">
              <img
                src={secondImage}
                alt="Prudhvi Sai"
                className="w-full h-auto object-contain bg-white"
              />
              
              {/* Red overlay on hover */}
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
            </div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black text-white p-6 mt-4"
            >
              <p className="text-xs font-bold mb-1 text-gray-400">DATA ANALYST</p>
              <p className="text-lg font-black">PRUDHVI SAI RAMISETTI</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
