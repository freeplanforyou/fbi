import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Cloud, Code, Palette, Smartphone, Database, Shield, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Serverless edge computing with auto-scaling capabilities. Deploy globally in seconds.' },
  { icon: Code, title: 'API Development', desc: 'Design and deploy RESTful and GraphQL APIs in minutes with built-in documentation.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Create stunning interfaces with our component library and design system.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Cross-platform mobile applications with native performance and beautiful animations.' },
  { icon: Database, title: 'Data Analytics', desc: 'Real-time analytics and insights with custom dashboards and reporting tools.' },
  { icon: Shield, title: 'Security Suite', desc: 'Enterprise-grade security with DDoS protection, SSL, and compliance tools.' },
];

const process = ['Discovery', 'Architecture', 'Development', 'Launch'];

const features = [
  '24/7 Priority Support',
  '99.9% Uptime SLA',
  'Custom Integrations',
  'Team Training',
  'Dedicated Manager',
  'Regular Updates',
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="floating-blur w-96 h-96 bg-green -top-20 left-1/2" />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <SectionHeading title="Services tailored for innovation" subtitle="From concept to deployment, we cover the entire product lifecycle." />
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <div key={service.title} className="gradient-border group cursor-pointer">
              <div className="glass-card p-8 h-full">
                <service.icon className="w-12 h-12 text-purple mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>
                <Link href="/contact" className="flex items-center gap-2 text-sm font-medium text-purple group-hover:text-green transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="border-t border-white/5 pt-16 mb-24">
          <h3 className="text-2xl font-semibold mb-12 text-center">How we work</h3>
          <div className="grid grid-cols-4 gap-4">
            {process.map((step, index) => (
              <div key={step} className="text-center relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple to-green flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  {index + 1}
                </div>
                <div className="text-sm font-medium">{step}</div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-gradient-to-r from-purple to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="glass-card p-10">
          <h3 className="text-2xl font-semibold mb-8 text-center">All plans include</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
