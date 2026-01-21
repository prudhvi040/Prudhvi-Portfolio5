import { motion } from 'motion/react';
import { Linkedin, Github } from 'lucide-react';

const contactDetails = [
  {
    label: 'EMAIL',
    value: 'prudhvimj888@gmail.com',
    href: 'mailto:prudhvimj888@gmail.com'
  },
  {
    label: 'PHONE',
    value: '+91 9182573471',
    href: 'tel:+919182573471'
  },
  {
    label: 'LINKEDIN PROFILE',
    value: 'linkedin.com/in/prudhvi77',
    href: 'https://www.linkedin.com/in/prudhvi77'
  },
  {
    label: 'GITHUB PORTFOLIO',
    value: 'github.com/prudhvi040',
    href: 'https://github.com/prudhvi040'
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/prudhvi77' },
  { icon: Github, href: 'https://github.com/prudhvi040' },
];

export function Contact() {
  return (
    <section id="contact" className="bg-white relative overflow-hidden py-24">
      {/* Red Gradient Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-full blur-3xl opacity-20" />

      {/* Contact Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-7xl font-black mb-4 leading-none">
            LET'S
            <br />
            <span className="text-red-600">CONNECT</span>
          </h2>
          <div className="h-1 w-32 bg-red-600" />
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b-2 border-black pb-4 hover:border-red-600 transition-colors group"
            >
              <p className="text-xs font-bold mb-2 text-gray-600">{detail.label}</p>
              <a
                href={detail.href}
                target={detail.href.startsWith('http') ? '_blank' : undefined}
                rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-lg font-bold group-hover:text-red-600 transition-colors"
              >
                {detail.value}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold tracking-wider">
              PRUDHVI SAI RAMISETTI
            </div>

            <div className="flex gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <p className="text-xs text-gray-400">
              © 2026 ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}