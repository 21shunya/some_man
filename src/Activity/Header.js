import React from "react";

export default function Header() {

    function scrollToSection(arg) {
        const experience = document.getElementById(arg);
        experience.scrollIntoView({block: "start", behavior: "smooth"});
    }

  return (
    <div className="activity-header-wrapper">
      <div className="nav-caption">
        <div className="activity-nav">
          <button className="nav-btn" onClick={scrollToSection.bind(this, "exp")}>Опыт работы</button>
          <button className="nav-btn" onClick={scrollToSection.bind(this, "education")}>Образование</button>
          <button className="nav-btn" onClick={scrollToSection.bind(this, "about")}>Обо мне</button>
        </div>
        <span>1 год и 5 месяцев</span>
      </div>
      <div>
        <img className="link" src="hh.svg" />
        <img className="link" src="linkedin.svg" />
        <img className="link" src="telegram.svg" />
      </div>
    </div>
  );
}
