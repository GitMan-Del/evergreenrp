"use client"

import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-[var(--background)] flex flex-col items-center justify-center px-4">
      {/* Logo */}
     

      {/* 404 Content */}
      <div className="text-center max-w-md mx-auto">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>
        </div>

        {/* Error Number */}
        <h1 className="text-7xl md:text-8xl font-black text-[var(--green)] mb-4 leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Ne pare rău, pagina pe care o cauți nu există sau a fost mutată.
        </p>

        {/* Back Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-[var(--green)] text-black font-bold px-8 py-4 rounded-br-2xl rounded-tl-2xl hover:scale-105 transition-all duration-200 text-lg shadow-lg hover:shadow-xl hover:shadow-[var(--green)]/25"
        >
          <Home className="w-5 h-5" />
          Înapoi la Home
        </Link>
      </div>

    </div>
  );
}
