"use client";

import { navItems } from "@/data";
import dynamicImport from "next/dynamic";

const Hero = dynamicImport(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamicImport(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamicImport(() => import("@/components/Footer"), { ssr: false });
const Clients = dynamicImport(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamicImport(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamicImport(() => import("@/components/Experience"), { ssr: false });
const RecentProjects = dynamicImport(() => import("@/components/RecentProjects"), { ssr: false });
const FloatingNav = dynamicImport(() => import("@/components/ui/FloatingNavbar").then(mod => ({ default: mod.FloatingNav })), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 scroll-mt-20">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <section id="projects">
          <RecentProjects />
        </section>
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

export const dynamic = "force-dynamic";
export const revalidate = 0; // belt & suspenders while we debug
