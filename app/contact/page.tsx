'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  { icon: Mail, title: 'Email', value: 'hello@nexus.dev', link: 'mailto:hello@nexus.dev' },
  { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
  { icon: MapPin, title: 'Office', value: 'San Francisco, CA 94105', link: '#' },
  { icon: Clock, title: 'Hours', value: 'Mon-Fri, 9AM-6PM PST', link: '#' },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="relative overflow-x-hidden">
      <div className="floating-blur w-96 h-96 bg-green top-40 left-1/3" />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <SectionHeading title="Get in touch" subtitle="Have a question or want to work together? We'd love to hear from you." />
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info) => (
            <a key={info.title} href={info.link} className="glass-card p-6 flex items-start gap-4 group hover:border-purple-500/30 transition-all">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-green flex items-center justify-center flex-shrink-0">
                <info.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-400 mb-1">{info.title}</h4>
                <p className="text-white group-hover:gradient-text transition-all">{info.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-6 h-6 text-purple" />
              <h3 className="text-2xl font-semibold">Send us a message</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:border-purple-500/50 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:border-purple-500/50 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:border-purple-500/50 transition-all"
                  placeholder="Project inquiry"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple to-green rounded-full font-semibold text-lg hover:purple-glow transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" /> Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
