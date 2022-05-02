import React from "react";
import Header from "./Header";
import Experience from "./Experience";
import About from "./About";
import Education from "./Education";

export default function Activity() {
  return (
    <div className="activity-wrapper">
      <Header />
      <div className="activity-content-wrapper">
        <Experience />
        <Education />
        <About />
      </div>
    </div>
  );
}
