"use client";

const EnhancedVLSISection = () => {
  return (
    <section className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6">
      {/* Subtle animated circuit background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full animate-pulse" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="circuitPatternLeft" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M0 20 H40 M20 0 V40" fill="none" stroke="#0ff" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitPatternLeft)" />
        </svg>
      </div>

             {/* Image */}
       <div className="relative z-10">
         <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 flex items-center justify-center">
           <span className="text-white font-bold text-lg">VLSI</span>
         </div>
         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-30 rounded-lg"></div>
       </div>

      {/* Text */}
      <div className="relative z-10 text-center mt-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">RTL Design and Verification Engineer</h2>
        <p className="mt-2 text-gray-300">Specializing in digital design, RTL development, and functional verification.</p>
      </div>
    </section>
  );
};

export default EnhancedVLSISection;
