import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <div>
      <div className="border-t border-gray-200 bg-white/80 backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">

      {/* Left */}
      <p className="flex items-center gap-2 text-center md:text-left">
        © 2026 <span className="font-semibold text-gray-900">Alumnee</span>.
        All rights reserved.
        <span className="hidden sm:flex items-center gap-1 ml-2 text-gray-500">
          Built with
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
        </span>
      </p>

      {/* Right */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a
          href="/privacy"
          className="hover:text-red-500 transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="hover:text-red-500 transition-colors duration-200"
        >
          Terms of Service
        </a>
        <a
          href="/cookies"
          className="hover:text-red-500 transition-colors duration-200"
        >
          Cookie Policy
        </a>
      </div>

    </div>
  </div>
</div>

    </div>
  )
}
