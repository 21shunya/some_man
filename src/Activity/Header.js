import React from "react";
import NavBtn from "./NavBtn";

export default function Header(btnName) {
let name = 'exp'
    function scrollToSection(arg) {
        const experience = document.getElementById(arg);
        experience.scrollIntoView({block: "start", behavior: "smooth"});
    }

  return (
    <div className="activity-header-wrapper">
      <div className="nav-caption">
        <div className="activity-nav">
          <NavBtn name={'exp'} btnName={btnName} onClick={scrollToSection.bind(this, "exp")}>Опыт работы</NavBtn>
          <NavBtn name={'education'} btnName={btnName} onClick={scrollToSection.bind(this, "education")}>Образование</NavBtn>
          <NavBtn name={'about'} btnName={btnName} onClick={scrollToSection.bind(this, "about")}>Обо мне</NavBtn>
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
