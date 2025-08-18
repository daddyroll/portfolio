"use client";

const EnhancedPassionSection = () => {
  return (
    <section className="relative bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8 overflow-hidden h-full">
      {/* Subtle animated circuit background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full animate-pulse" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="circuitPattern" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M0 20 H40 M20 0 V40" fill="none" stroke="#0ff" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitPattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center h-full flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-white mb-4">Passionate about Semiconductor Design & Verification</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I thrive on building high-performance, reliable chip designs and solving complex verification challenges. 
          My work focuses on precision, scalability, and turning cutting-edge digital design principles into real-world silicon.
        </p>
      </div>
    </section>
  );
};

export default EnhancedPassionSection;



