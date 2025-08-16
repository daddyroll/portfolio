"use client";

const EnhancedSkillsSection = () => {
  return (
    <section className="relative bg-gray-900 border border-gray-700 rounded-xl shadow-lg overflow-hidden p-6 h-full">
      {/* ---- radar sweep + twinkle nodes ---- */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(6,182,212,0.25), transparent 25%, transparent 75%, rgba(139,92,246,0.25))",
          }}
        />
        <div
          className="absolute inset-0 rounded-xl animate-[spin_14s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 10%, rgba(6,182,212,0.18) 30%, transparent 50%, rgba(139,92,246,0.18) 70%, transparent 90%)",
          }}
        />
        {/* twinkle nodes */}
        <span className="absolute left-10 top-10 h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span className="absolute right-12 top-16 h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping [animation-duration:3s]" />
        <span className="absolute left-1/2 bottom-8 h-1.5 w-1.5 rounded-full bg-cyan-300 animate-ping [animation-duration:2.5s]" />
      </div>

      {/* header */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white">My Technical Skills</h3>
        <p className="mt-1 text-sm text-gray-400">
          Constantly improving tools, flows, and methodologies.
        </p>
      </div>

      {/* categories */}
      <div className="relative z-10 mt-6 grid gap-6 md:grid-cols-2">
        {/* Languages & Methodologies */}
        <div>
          <h4 className="text-cyan-300 font-semibold mb-3">Languages & Methodologies</h4>
          <div className="flex flex-wrap gap-2">
            {["SystemVerilog", "UVM", "VHDL", "Verilog-A/AMS", "RTL Design", "Testbenches"].map(
              (s, i) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-gray-800/90 rounded-full text-gray-200 ring-1 ring-gray-700 hover:ring-cyan-400/70 transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                >
                  {s}
                  {i < 2 && (
                    <sup className="ml-1 text-[10px] text-cyan-300 animate-pulse">•</sup>
                  )}
                </span>
              )
            )}
          </div>
        </div>

                 {/* Tools (Mentor removed) */}
         <div>
           <h4 className="text-cyan-300 font-semibold mb-3">Tools</h4>
          <div className="flex flex-wrap gap-2">
            {["Synopsys VCS", "Cadence Virtuoso", "Intel Quartus", "LTSpice"].map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-gray-800/90 rounded-full text-gray-200 ring-1 ring-gray-700 hover:ring-purple-400/70 transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Platforms & Hardware */}
        <div>
          <h4 className="text-cyan-300 font-semibold mb-3">Platforms & Hardware</h4>
          <div className="flex flex-wrap gap-2">
            {["FPGA Prototyping", "Raspberry Pi", "HMI/PLC (LAD, SFC)"].map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-gray-800/90 rounded-full text-gray-200 ring-1 ring-gray-700 hover:ring-cyan-400/70 transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

                 {/* Build, Code & Verification Utilities (UVM added here too) */}
         <div>
           <h4 className="text-cyan-300 font-semibold mb-3">
             Build, Code &amp; Verification Utilities
           </h4>
          <div className="flex flex-wrap gap-2">
            {["Git", "Gradle", "Google Test", "Python", "C/C++", "MATLAB/Simulink"].map(
              (s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-gray-800/90 rounded-full text-gray-200 ring-1 ring-gray-700 hover:ring-purple-400/70 transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                >
                  {s}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* custom spin keyframes (if needed) */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default EnhancedSkillsSection;
