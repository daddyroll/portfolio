"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    des: string;
    tools: string[];
    img: string;
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#13162D] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/[0.1]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.1]">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-purple transition-colors"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Image */}
          <div className="mb-6">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">{project.des}</p>
          </div>

          {/* Tools Used */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple/20 text-purple rounded-full text-sm border border-purple/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

                     {/* Project Details based on ID */}
           <div className="mb-6">
             <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
             <ul className="text-gray-300 space-y-2">
               {project.id === 1 && (
                 <>
                   <li>• Created a custom 16-bit instruction format with opcode and register addressing.</li>
                   <li>• Built a robust testbench for comprehensive simulation and verification.</li>
                   <li>• Analyzed waveforms in EPWave to confirm design accuracy.</li>
                 </>
               )}
               {project.id === 2 && (
                 <>
                   <li>• Performed controllability and stability analysis to optimize system behavior.</li>
                   <li>• Reduced Integral Squared Error (ISE) for improved tracking accuracy.</li>
                   <li>• Integrated feedback and feedforward control for enhanced responsiveness.</li>
                 </>
               )}
               {project.id === 3 && (
                 <>
                   <li>• Achieved targeted cutoff frequencies and stable gain across operating conditions.</li>
                   <li>• Performed parametric analyses to optimize resistance, capacitance, and gain.</li>
                   <li>• Integrated switched-capacitor filters, reducing noise by ~20%.</li>
                 </>
               )}
               {project.id === 4 && (
                 <>
                   <li>• Implemented ripple-carry adders, 2's complement logic, and FSMs.</li>
                   <li>• Validated designs through simulation and FPGA deployment.</li>
                   <li>• Optimized designs for accurate signal propagation and synthesis.</li>
                 </>
               )}
             </ul>
           </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-white/[0.1]">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-purple text-white rounded-lg hover:bg-purple/80 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
