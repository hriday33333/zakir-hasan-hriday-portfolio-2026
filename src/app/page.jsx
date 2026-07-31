import HeaderSection from "@/components/HeaderSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar></Navbar>
       <div ClassName="container mx-auto px-12 py-4">
        <HeaderSection></HeaderSection>
       </div>
      </main>
  );
}
