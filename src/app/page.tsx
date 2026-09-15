import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Hero } from "@/components/sections/hero";
import { Header } from "@/components/layout/header";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Stack />
      </main>
    </>
  );
}
