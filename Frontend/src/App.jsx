import React, { Suspense } from "react";
import IntroPage from "./Pages/IntroPage";
import Contact from "./Pages/Contact";
import Counts from "./Pages/Counts";
import SignatureCourses from "./Pages/SignatureCourses";
import Placement from "./Pages/Placement";

// Lazy load the remaining components
const SuccessStrories = React.lazy(() => import("./Pages/SuccessStrories"));
const TestimonialSection = React.lazy(() =>
  import("./Pages/TestimonialSection")
);
const QuestionSection = React.lazy(() => import("./Pages/QuestionSection"));
const Footer = React.lazy(() => import("./Components/Footer"));

import StickOnContent from "./Components/StickOnContents";
import NeonEffect from "./Components/CursorEffect/NeonEffect";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <NeonEffect />
      <StickOnContent />
      {/* Eagerly loaded components */}
      <IntroPage />
      <Contact />
      <Counts />
      <SignatureCourses />
      <Placement />

      {/* Lazy-load remaining components */}
      <Suspense fallback={<div>....</div>}>
        <SuccessStrories />
        <TestimonialSection />
        <QuestionSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
