'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Check, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    desc: 'Perfect for small projects and startups.',
    popular: false,
    features: [
      'Up to 5 projects',
      '10GB storage',
      'Basic analytics',
      'Community support',
      'API access',
      '1 team member',
    ],
    cta: 'Start free trial',
    gradient: 'from-gray-600 to-gray-400',
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    desc: 'For growing teams and businesses.',
    popular: true,
    features: [
      'Unlimited projects',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Full API access',
      '10 team members',
      'Custom domains',
      'SSO integration',
    ],
    cta: 'Start free trial',
    gradient: 'from-purple to-green',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large organizations with custom needs.',
    popular: false,
    features: [
      'Unlimited everything',
      'Dedicated infrastructure',
      'Custom analytics',
      '24/7 phone support',
      'White-label options',
      'Unlimited team members',
      'SLA guarantee',
      'Dedicated manager',
    ],
    cta: 'Contact sales',
    gradient: 'from-gray-600 to-gray-400',
  },
];

const faqs = [
  { q: 'Can I switch plans later?', a: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.' },
  { q: 'Is there a free trial?', a: 'Yes, all plans come with a 14-day free trial. No credit card required for the Starter plan.' },
  { q: 'What payment methods?', a: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.' },
];

export default function PricingPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="floating-blur w-96 h-96 bg-purple top-20 -left-20" />
      <div className="floating-blur w-96 h-96 bg-green bottom-20 -right-20" />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <SectionHeading title="Simple, transparent pricing" subtitle="Choose the plan that fits your needs. No hidden fees." />
        
        {/* Toggle (Visual only) */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className="text-sm text-white">Monthly</span>
          <div className="w-12 h-6 bg-gradient-to-r from-purple to-green rounded-full p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full ml-auto" />
          </div>
          <span className="text-sm text-gray-400">Yearly</span>
          <span className="text-xs text-green bg-green/10 px-2 py-0.5 rounded-full">Save 20%</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple to-green rounded-full text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}
              <div className={`glass-card p-8 h-full ${plan.popular ? 'purple-glow border-purple-500/30' : ''}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <button className={`w-full py-3 bg-gradient-to-r ${plan.gradient} rounded-full font-semibold mb-8 hover:purple-glow transition-all`}>
                  {plan.cta}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="border-t border-white/5 pt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Frequently asked questions</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h4 className="font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
