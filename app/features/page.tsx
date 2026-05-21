'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { 
  Zap, Shield, BarChart3, Cloud, Code, Palette, 
  Smartphone, Database, Lock, Globe, Users, Settings 
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: 'Lightning Performance',
    desc: 'Edge computing delivers content in milliseconds worldwide with automatic optimization.',
    color: 'text-purple',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'SOC 2 compliant with end-to-end encryption, DDoS protection, and regular security audits.',
    color: 'text-green',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    desc: 'Real-time dashboards with custom reports, user behavior tracking, and predictive insights.',
    color: 'text-purple',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    desc: 'Auto-scaling serverless architecture that grows with your application seamlessly.',
    color: 'text-green',
  },
  {
    icon: Code,
    title: 'API First',
    desc: 'Comprehensive REST and GraphQL APIs with automatic documentation and versioning.',
    color: 'text-purple',
  },
  {
    icon: Palette,
    title: 'Design System',
    desc: 'Beautiful, customizable components built with accessibility and performance in mind.',
    color: 'text-green',
  },
  {
    icon: Database,
    title: 'Managed Databases',
    desc: 'Fully managed PostgreSQL, Redis, and MongoDB with automatic backups and scaling.',
    color: 'text-purple',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    desc: 'Content delivery across 300+ points of presence for optimal performance everywhere.',
    color: 'text-green',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Built-in tools for code reviews, project management, and real-time collaboration.',
    color: 'text-purple',
  },
];

export default function FeaturesPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="floating-blur w-96 h-96 bg-purple top-20 right-0" />
      <div className="floating-blur w-96 h-96 bg-green bottom-20 left-0" />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <SectionHeading title="Powerful features for modern teams" subtitle="Everything you need to build, deploy, and scale your applications." />
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Details */}
        <div className="border-t border-white/5 pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h3 className="text-3xl font-bold mb-6 gradient-text">Built for scale</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our infrastructure automatically scales from zero to millions of requests without any configuration. 
                Built on modern serverless technology, you only pay for what you use.
              </p>
              <div className="space-y-3">
                {['Auto-scaling', 'Zero downtime deploys', 'Instant rollbacks', 'Global load balancing'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="text-6xl font-bold gradient-text mb-4">99.9%</div>
              <p className="text-gray-400">Uptime SLA guaranteed</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 text-center order-2 md:order-1">
              <div className="text-6xl font-bold gradient-text mb-4">&lt;50ms</div>
              <p className="text-gray-400">Average response time</p>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Blazing fast</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Edge computing ensures your users get the fastest experience possible, 
                no matter where they are in the world.
              </p>
              <div className="space-y-3">
                {['300+ edge locations', 'Automatic optimization', 'Smart caching', 'Image optimization'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
