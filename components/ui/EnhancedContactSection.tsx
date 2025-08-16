"use client";

import { useState } from "react";

const EnhancedContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("shreyasubc17@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("Email: shreyasubc17@gmail.com");
    }
  };

  return (
    <section className="relative bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8 overflow-hidden h-full">
      {/* Subtle animated circuit background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full animate-pulse" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="circuitPattern2" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M0 20 H40 M20 0 V40" fill="none" stroke="#0ff" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitPattern2)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center h-full flex flex-col justify-center">
                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
           <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-white bg-clip-text text-transparent drop-shadow-lg">
             Welcoming Opportunities to Create, Learn and Innovate in Design
           </span>
         </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* Copy Email Button */}
          <button 
            onClick={handleCopyEmail}
            className="px-6 py-3 bg-gray-800 border border-cyan-400 text-cyan-300 rounded-lg shadow-md hover:shadow-cyan-400/50 hover:scale-105 transition-all">
            {copied ? "✅ Email copied!" : "📧 Copy my email address"}
          </button>
          {/* Download Resume Button */}
          <a 
            href="/VLSI Resume.pdf" 
            download
            className="px-6 py-3 bg-gray-800 border border-purple-400 text-purple-300 rounded-lg shadow-md hover:shadow-purple-400/50 hover:scale-105 transition-all">
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;
