"use client";

const EnhancedTimeZoneSection = () => {
  return (
    <div className="relative bg-gray-900 border border-gray-700 rounded-xl shadow-lg overflow-hidden p-6 text-center h-full">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-15 blur-2xl"></div>

      {/* Inline animated globe (no image file needed) */}
      <div className="relative z-10 mx-auto w-48 h-48">
        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#00FFFF" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="url(#glow)"/>
          <circle cx="100" cy="100" r="80" fill="#0b1220" stroke="#1f2937" strokeWidth="2"/>

          {/* latitude */}
          <g stroke="#06b6d4" strokeOpacity="0.7" fill="none" strokeWidth="1.2" strokeDasharray="6 6">
            <ellipse cx="100" cy="100" rx="70" ry="12">
              <animate attributeName="stroke-dashoffset" from="0" to="120" dur="8s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="100" cy="120" rx="60" ry="10">
              <animate attributeName="stroke-dashoffset" from="0" to="120" dur="7s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="100" cy="80" rx="60" ry="10">
              <animate attributeName="stroke-dashoffset" from="120" to="0" dur="7s" repeatCount="indefinite"/>
            </ellipse>
          </g>

          {/* longitude */}
          <g stroke="#8b5cf6" strokeOpacity="0.6" fill="none" strokeWidth="1.2" strokeDasharray="6 10">
            <path d="M100,20 C70,100 70,100 100,180">
              <animate attributeName="stroke-dashoffset" from="0" to="140" dur="6s" repeatCount="indefinite"/>
            </path>
            <path d="M100,20 C130,100 130,100 100,180">
              <animate attributeName="stroke-dashoffset" from="140" to="0" dur="6s" repeatCount="indefinite"/>
            </path>
          </g>
        </svg>
      </div>

      <h3 className="relative z-10 mt-3 text-2xl font-bold text-white">
        Flexible Across Global Time Zones
      </h3>
      <p className="relative z-10 mt-2 text-gray-300">
        Comfortable collaborating with teams in North America, Europe, and Asia.
      </p>
    </div>
  );
};

export default EnhancedTimeZoneSection;
