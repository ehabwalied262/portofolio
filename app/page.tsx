'use client'
import NavBar from "@/components/NavBar";
import Blob from "@/components/Blob";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="">
     <NavBar />
     <div className="flex gap-8 items-center justify-center mt-12">
      <Header />
      <Blob />
     </div>
  
    </main>
  );
}
