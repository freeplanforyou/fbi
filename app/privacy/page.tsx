import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SectionHeading from '@/components/ui/SectionHeading';

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect information you provide directly, such as your name, email address, and payment information when you create an account. We also automatically collect certain technical data including IP addresses, browser type, and usage patterns.',
  },
  {
    title: 'How We Use Information',
    content: 'Your information is used to provide, maintain, and improve our services. This includes processing payments, sending updates, providing support, and personalizing your experience. We never sell your personal data to third parties.',
  },
  {
    title: 'Data Security',
    content: 'We implement industry-standard security measures including encryption at rest and in transit, regular security audits, and strict access controls. Your data is stored on SOC 2 compliant infrastructure with automated backups.',
  },
  {
    title: 'Cookies Policy',
    content: 'We use essential cookies for authentication and security. Optional analytics cookies help us understand usage patterns. You can control cookie preferences through your browser settings at any time.',
  },
  {
    title: 'Third-Party Services',
    content: 'We may share data with trusted third-party service providers for payment processing, analytics, and infrastructure. All providers are vetted and bound by strict data processing agreements.',
  },
  {
    title: 'Your Rights',
    content: 'You have the right to access, correct, or delete your personal data. You can export your data at any time. To exercise these rights, contact our privacy team at privacy@nexus.dev.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="floating-blur w-96 h-96 bg-purple top-20 -right-20" />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <SectionHeading title="Privacy Policy" subtitle="Last updated: May 21, 2026" />
        
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <p className="text-gray-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Questions?</h3>
          <p className="text-gray-400 mb-4">Contact our privacy team for any questions about this policy.</p>
          <a href="mailto:privacy@nexus.dev" className="text-purple hover:text-green transition-colors">
            privacy@nexus.dev
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
