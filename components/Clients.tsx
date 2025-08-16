"use client";

import React from "react";

import { certificates } from "@/data";

const Clients = () => {
  return (
    <section id="certificates" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">certificates</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Certificates Grid */}
        <div className="w-full max-w-6xl mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="relative rounded-2xl border border-slate-800 p-6 md:p-8"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Certificate Header with Company Logo */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={certificate.img}
                        alt={certificate.issuer}
                        className="w-8 h-8"
                      />
                      {certificate.nameImg && certificate.nameImg !== certificate.img && (
                        <img
                          src={certificate.nameImg}
                          alt={certificate.issuer}
                          className="h-6"
                        />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {certificate.issuer} • {certificate.date}
                  </p>
                  <p className="text-gray-400 text-sm flex-grow">
                    {certificate.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Clients;
