import React, { useState } from "react";
import Header from "./Header";
import Experience from "./Experience";
import About from "./About";
import Education from "./Education";

export default function Activity() {
  const [btnName, setBtnName] = useState("exp");

  function listenScrollEvent() {
    const elemBottom = 800;
    if (
      document.getElementById("education").getBoundingClientRect().bottom <=
      elemBottom
    ) {
      setBtnName("about");
    } else if (
      document.getElementById("exp").getBoundingClientRect().bottom <=
      elemBottom
    ) {
      setBtnName("education");
    } else setBtnName("exp");
  }

  return (
    <div className="activity-wrapper">
      <Header btnName={btnName} />
        <div className="activity-content-wrapper" onScroll={listenScrollEvent}>
          <Experience btnName={btnName} />
          <Education btnName={btnName} />
          <About btnName={btnName} />
        </div>
    </div>
  );
}
