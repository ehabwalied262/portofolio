'use client'
import NavBar from "@/components/NavBar";
import Blob from "@/components/Blob";
import Header from "@/components/Header";
import ProjectsSection from "@/components/Projects_section";
import BooksSection from "@/components/Books_section";

export default function Home() {
  return (
    <main className="">
     <NavBar />
     <div className="flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center mt-24">
        <Blob />
        <Header />
        <div className="mt-40"></div>
      <ProjectsSection />
      <div className="mt-96 pt-96">
      <BooksSection />

      </div>
      </div>
    </div>
  
    </main>
  );
}
