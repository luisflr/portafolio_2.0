import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Hero } from "@/components/sections/hero";
import { Header } from "@/components/layout/header";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";
import { Nav } from "@/components/layout/navigator";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="lg:pl-20">
        <Hero />
        <Experience />
        <Projects />
        <Stack />
      </main>
    </>
  );
}
