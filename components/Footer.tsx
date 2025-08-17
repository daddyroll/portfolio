"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Driven to push boundaries in digital design and verification
          </span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          From idea to silicon without the guesswork.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/daddyroll"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-90 transition-all duration-200"
          >
            <img src="/git.svg" alt="GitHub" width={20} height={20} />
          </a>
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shreypathak"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-90 transition-all duration-200"
          >
            <img src="/link.svg" alt="LinkedIn" width={20} height={20} />
          </a>
          
          {/* Email */}
          <button
            onClick={() => {
              if (typeof window === "undefined") return; // guard
              navigator.clipboard.writeText("shreyasubc17@gmail.com").then(() => {
                if (typeof window !== "undefined") {
                  alert("Email address copied to clipboard: shreyasubc17@gmail.com");
                }
              }).catch(() => {
                if (typeof window !== "undefined") {
                  alert("Email: shreyasubc17@gmail.com");
                }
              });
            }}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-90 transition-all duration-200"
            title="Click to copy email address"
          >
            <img src="/mail.svg" alt="Email" width={20} height={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
