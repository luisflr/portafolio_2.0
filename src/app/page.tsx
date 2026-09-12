import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Hero } from "@/components/sections/hero";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
