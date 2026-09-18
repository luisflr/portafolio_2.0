import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { Header } from "@/components/layout/header";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";
import { Nav } from "@/components/layout/navigator";
import { SocialRail } from "@/components/layout/social-rail";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <SocialRail />
      <main className="lg:pl-20">
        <Hero />
        <Experience />
        <Projects />
        <Stack />
      </main>
    </>
  );
}
