import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing or using Nexus services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.',
  },
  {
    title: 'Service Description',
    content: 'Nexus provides cloud infrastructure, API services, and development tools. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time with reasonable notice.',
  },
  {
    title: 'User Accounts',
    content: 'You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately of any unauthorized access. One person or entity may not maintain more than one free account.',
  },
  {
    title: 'Payment Terms',
    content: 'Fees are billed monthly or annually as selected. All payments are non-refundable except as required by law. We may change fees with 30 days notice. Late payments may result in service suspension.',
  },
  {
    title: 'Intellectual Property',
    content: 'You retain all rights to your content. By using our service, you grant us a limited license to host and process your content. Our platform, branding, and technology remain our exclusive property.',
  },
  {
    title: 'Limitation of Liability',
    content: 'Nexus shall not be liable for any indirect, incidental, or consequential damages. Our total liability is limited to the amount paid by you in the past 12 months. Some jurisdictions may not allow these limitations.',
  },
];

export default function TermsPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="floating-blur w-96 h-96 bg-green top-20 -left-20" />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <SectionHeading title="Terms of Service" subtitle="Last updated: May 21, 2026" />
        
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <p className="text-gray-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Acceptance</h3>
          <p className="text-gray-400">
            By using Nexus, you acknowledge that you have read and agree to these terms.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
