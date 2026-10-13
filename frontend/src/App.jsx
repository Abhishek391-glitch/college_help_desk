import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import ChatSection from "./components/sections/ChatSection";
import CoursesSection from "./components/sections/CoursesSection";
import AdmissionsSection from "./components/sections/AdmissionsSection";
import PlacementSection from "./components/sections/PlacementSection";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [pendingQuestion, setPendingQuestion] = useState("");

  function askFromSearch(question) {
    setChatOpen(true);
    setPendingQuestion(question);
  }

  return (
    <>
      <Navbar onSearch={askFromSearch} />
      <main className="pt-20">
        <HeroSection />
        <CoursesSection />
        <AdmissionsSection />
        <PlacementSection />
      </main>
      <ChatSection
        open={chatOpen}
        onOpenChange={setChatOpen}
        pendingQuestion={pendingQuestion}
        onQuestionConsumed={() => setPendingQuestion("")}
      />
      <Footer />
    </>
  );
}
