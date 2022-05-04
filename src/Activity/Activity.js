import React, { useState } from "react";
import Header from "./Header";
import Experience from "./Experience";
import About from "./About";
import Education from "./Education";

export default function Activity() {
  const [btnName, setBtnName] = useState("exp");

  function listenScrollEvent() {
    const elemBottom = 600;

    if (
      document.getElementById("education").getBoundingClientRect().bottom <=
      elemBottom
    ) {
      setBtnName("about")
      console.log("educationColor");
    } else if (
      document.getElementById("exp").getBoundingClientRect().bottom <=
      elemBottom
    ) {
      setBtnName("education")
    } else setBtnName("exp");

    // console.log(
    //   document.getElementById("education").getBoundingClientRect().bottom
    // );
  }

  return (
    <div className="activity-wrapper">
      <Header btnName={btnName} />
      <div className="activity-content-wrapper" onScroll={listenScrollEvent}>
        <Experience />
        <Education />
        <About />
      </div>
    </div>
  );
}
