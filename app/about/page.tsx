'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, Zap } from 'lucide-react';

const timeline = [
  { year: '2022', title: 'Founded', desc: 'Started in a garage with a vision to democratize cloud infrastructure.' },
  { year: '2023', title: 'Launch', desc: 'Released our first beta to 5,000 developers worldwide.' },
  { year: '2024', title: 'Series A', desc: 'Raised $20M to build the future of serverless computing.' },
  { year: '2025', title: 'Global', desc: 'Expanded to 15 regions with over 100,000 customers.' },
];

const team = [
  { name: 'Alex Johnson', role: 'CEO & Co-Founder' },
  { name: 'Sarah Williams', role: 'CTO & Co-Founder' },
  { name: 'Michael Chen', role: 'Head of Design' },
  { name: 'Emily Davis', role: 'VP Engineering' },
];

const values = [
  { icon: Target, title: 'Mission', desc: 'Democratize access to enterprise-grade infrastructure.' },
  { icon: Eye, title: 'Vision', desc: 'A world where anyone can build and scale globally.' },
  { icon: Heart, title: 'Community', desc: 'Built by developers, for developers worldwide.' },
  { icon: Zap, title: 'Innovation', desc: 'Pushing boundaries of what is possible on the web.' },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="floating-blur w-96 h-96 bg-purple top-40 -right-20" />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <SectionHeading title="Our story is just beginning" subtitle="We're on a mission to make the internet faster and more beautiful." />
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h3 className="text-2xl font-semibold mb-4">The mission</h3>
            <p className="text-gray-400 leading-relaxed">
              We believe software development should be an experience of joy. By combining cutting-edge performance with an intuitive interface, we empower creators to focus on what matters most: building incredible products.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Core values</h3>
            <div className="flex flex-wrap gap-3">
              {['Transparency', 'Speed', 'Design', 'Community'].map((value) => (
                <span key={value} className="px-4 py-2 glass-effect rounded-full text-sm">{value}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-24">
          {values.map((value) => (
            <div key={value.title} className="glass-card p-6 text-center">
              <value.icon className="w-8 h-8 text-purple mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{value.title}</h4>
              <p className="text-gray-400 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold mb-8 text-center">Meet the team</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass-card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple to-green mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-semibold mb-12 text-center">Our journey</h3>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple to-green" />
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex items-center w-full mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="w-1/2 p-6">
                <div className="glass-card p-6">
                  <span className="text-green font-bold">{item.year}</span>
                  <h4 className="text-xl font-semibold mt-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-purple rounded-full relative z-10 border-2 border-white" />
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
