'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const openings = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$150k - $200k',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130k - $170k',
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$140k - $190k',
  },
  {
    title: 'Technical Writer',
    department: 'Content',
    location: 'Remote',
    type: 'Contract',
    salary: '$80k - $110k',
  },
  {
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$130k - $175k',
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    salary: '$110k - $150k',
  },
];

const perks = [
  { title: 'Remote First', desc: 'Work from anywhere in the world' },
  { title: 'Health Benefits', desc: 'Full medical, dental, and vision' },
  { title: 'Learning Budget', desc: '$5,000/year for courses & books' },
  { title: 'Equity', desc: 'Stock options for all employees' },
  { title: 'Flexible Hours', desc: 'Work when you are most productive' },
  { title: 'Retreats', desc: 'Annual company retreats worldwide' },
];

export default function CareersPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="floating-blur w-96 h-96 bg-purple top-30 -left-20" />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <SectionHeading title="Join our team" subtitle="Help us build the future of cloud infrastructure." />
        
        {/* Perks */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {perks.map((perk) => (
            <div key={perk.title} className="glass-card p-6 text-center">
              <h4 className="font-semibold mb-2">{perk.title}</h4>
              <p className="text-gray-400 text-sm">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <h3 className="text-2xl font-semibold mb-8">Open positions</h3>
        <div className="space-y-4">
          {openings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 group cursor-pointer hover:border-purple-500/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:gradient-text transition-all">{job.title}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {job.salary}</span>
                  </div>
                </div>
                <Link
                  href="/careers/1"
                  className="px-6 py-2.5 bg-gradient-to-r from-purple to-green rounded-full font-medium text-sm hover:purple-glow transition-all flex items-center gap-2 flex-shrink-0"
                >
                  Apply now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
