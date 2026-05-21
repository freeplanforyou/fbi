import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple to-green rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Nexus</span>
            </Link>
            <p className="text-gray-400 text-sm">Building the future, one block at a time.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/changelog">Changelog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/careers">Careers</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 Nexus Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
