'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Future of Edge Computing in 2026',
    excerpt: 'Explore how edge computing is transforming the way we build and deploy applications globally.',
    author: 'Alex Johnson',
    date: 'May 15, 2026',
    category: 'Technology',
    readTime: '5 min read',
    image: 'purple',
  },
  {
    title: 'Designing for Performance: A Complete Guide',
    excerpt: 'Learn the principles of performance-first design and how to implement them in your projects.',
    author: 'Sarah Williams',
    date: 'May 12, 2026',
    category: 'Design',
    readTime: '8 min read',
    image: 'green',
  },
  {
    title: 'Building Scalable APIs with Next.js',
    excerpt: 'A step-by-step tutorial on creating production-ready APIs that can handle millions of requests.',
    author: 'Michael Chen',
    date: 'May 10, 2026',
    category: 'Development',
    readTime: '12 min read',
    image: 'purple',
  },
  {
    title: 'Security Best Practices for Modern Apps',
    excerpt: 'Essential security measures every developer should implement in their applications.',
    author: 'Emily Davis',
    date: 'May 8, 2026',
    category: 'Security',
    readTime: '6 min read',
    image: 'green',
  },
  {
    title: 'The Rise of AI-Powered Development Tools',
    excerpt: 'How artificial intelligence is changing the software development landscape forever.',
    author: 'Alex Johnson',
    date: 'May 5, 2026',
    category: 'AI',
    readTime: '7 min read',
    image: 'purple',
  },
  {
    title: 'Mastering TypeScript for Large Projects',
    excerpt: 'Tips and tricks for using TypeScript effectively in enterprise-scale applications.',
    author: 'Sarah Williams',
    date: 'May 1, 2026',
    category: 'Development',
    readTime: '10 min read',
    image: 'green',
  },
];

const categories = ['All', 'Technology', 'Design', 'Development', 'Security', 'AI'];

export default function BlogPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="floating-blur w-96 h-96 bg-purple top-20 right-0" />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <SectionHeading title="Latest insights & articles" subtitle="Stay updated with the latest trends in technology and design." />
        
        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                cat === 'All' 
                  ? 'bg-gradient-to-r from-purple to-green text-white' 
                  : 'glass-effect text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group cursor-pointer overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${post.image === 'purple' ? 'from-purple/20 to-purple/5' : 'from-green/20 to-green/5'} flex items-center justify-center`}>
                <div className="text-6xl opacity-20 font-bold">{post.category[0]}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Tag className="w-3 h-3" /> {post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <User className="w-3 h-3" /> {post.author}
                    <span>•</span>
                    <Calendar className="w-3 h-3" /> {post.date}
                  </div>
                  <Link href="/blog/1" className="text-purple group-hover:text-green transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 glass-effect rounded-full font-semibold hover:bg-white/10 transition-all">
            Load more articles
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
