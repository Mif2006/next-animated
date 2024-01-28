import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black w-screen h-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
}
