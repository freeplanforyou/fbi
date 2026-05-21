import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 bg-[#0F172A]">
      <div className="floating-blur w-96 h-96 bg-purple top-1/4 left-1/4" />
      <div className="floating-blur w-96 h-96 bg-green bottom-1/4 right-1/4" />
      
      <div className="text-center relative z-10">
        <div className="text-[150px] md:text-[200px] font-bold gradient-text leading-none mb-4">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for doesn not exist or has been moved to another location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-purple to-green rounded-full font-semibold hover:purple-glow transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" /> Go home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 glass-effect rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Go back
          </button>
        </div>
      </div>
    </main>
  );
}
