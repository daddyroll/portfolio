"use client";

import { useEffect, useRef } from "react";

const EnhancedRiscVSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // <-- guard
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const letters = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0ff";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative bg-black text-white py-16 px-8 overflow-hidden rounded-3xl border border-white/[0.1] h-full">
      {/* Matrix Binary Rain Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 rounded-3xl"
      />
      
      {/* Animated Circuit Overlay */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl">
        <svg className="w-full h-full opacity-10 animate-pulse rounded-3xl" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M0 20 H40 M20 0 V40" fill="none" stroke="#0ff" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center h-full">
        
        {/* Text Side */}
        <div className="relative z-10">
          <h2 className="text-sm font-light text-cyan-300 uppercase tracking-wider">Functional Verification & Design</h2>
                                                                                       <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">
               <span className="text-cyan-300 drop-shadow-lg">
                 Engineering the Future of Chips
               </span>
             </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Currently building a <span className="font-semibold text-gray-300">5-stage pipelined RISC-V processor</span> 
            and designing a <span className="font-semibold text-purple-400">precision PWM generator</span> in SystemVerilog.
            Focused on pushing performance, accuracy, and scalability—turning advanced digital design principles 
            into verified, high-reliability hardware.
          </p>
        </div>

        {/* Visual Side */}
        <div className="relative group z-10">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          {/* Main Visual Container */}
          <div className="relative bg-gray-900 rounded-lg p-6 border border-gray-700 shadow-lg flex flex-col items-center gap-8">
            
            {/* Animated Processor Pipeline */}
            <svg width="320" height="80" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#0ff" fill="none" strokeWidth="2">
                <rect x="10" y="10" width="50" height="60" rx="6">
                  <animate attributeName="fill" values="#0ff;transparent;#0ff" dur="3s" repeatCount="indefinite" />
                </rect>
                <rect x="70" y="10" width="50" height="60" rx="6">
                  <animate attributeName="fill" values="transparent;#0ff;transparent" dur="3s" repeatCount="indefinite" />
                </rect>
                <rect x="130" y="10" width="50" height="60" rx="6">
                  <animate attributeName="fill" values="#0ff;transparent;#0ff" dur="3s" repeatCount="indefinite" />
                </rect>
                <rect x="190" y="10" width="50" height="60" rx="6">
                  <animate attributeName="fill" values="transparent;#0ff;transparent" dur="3s" repeatCount="indefinite" />
                </rect>
                <rect x="250" y="10" width="50" height="60" rx="6">
                  <animate attributeName="fill" values="#0ff;transparent;#0ff" dur="3s" repeatCount="indefinite" />
                </rect>
              </g>
            </svg>

            {/* Animated PWM Waveform */}
            <svg width="320" height="60" xmlns="http://www.w3.org/2000/svg">
              <polyline points="0,60 0,0 40,0 40,60 80,60 80,0 120,0 120,60 160,60 160,0 200,0 200,60 240,60 240,0 280,0 280,60 320,60"
                fill="none" stroke="#a855f7" strokeWidth="3">
                <animate attributeName="points" 
                         values="0,60 0,0 40,0 40,60 80,60 80,0 120,0 120,60 160,60 160,0 200,0 200,60 240,60 240,0 280,0 280,60 320,60;
                                 0,60 0,0 60,0 60,60 100,60 100,0 140,0 140,60 180,60 180,0 220,0 220,60 260,60 260,0 300,0 300,60 320,60"
                         dur="1.5s" repeatCount="indefinite" />
              </polyline>
            </svg>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedRiscVSection;
