import React from "react";
import Position from "./Position";
import Skills from "./Skills";

export default function MainInfo() {
  const position = {
    title: "Желаемая должность и зарплата",
    pos: "Junior+/начинающий middle разработчик",
    info: [
      { name: "Специализации", descr: "Программист, разработчик" },
      { name: "Занятость", descr: "полная занятость" },
      {
        name: "График работы",
        descr: "удаленная работа, гибкий график, полный день",
      },
      {
        name: "Желательное время в пути до работы",
        descr: "не имеет значения",
      },
    ],
  };

  const skills = {
    title: "Ключевые навыки",
    langs: [
      { name: "Русский", descr: "— Родной" },
      { name: "Английский", descr: "— B1 — Средний" },
    ],
    skls: [
      { shapes: ["Node.js", "Node.js", "Node.js", "Node.js"] },
      { shapes: ["Node.js", "Node.js", "Node.js", "Node.js", "Node.js"] },
      { shapes: ["Node.js", "Node.js", "Node.js", "Node.js" ]},
      { shapes: ["Node.js", "Node.js", "Node.js", "Node.js", "Node.js"] },
    ],
  };

  return (
    <div className="static-list-wrapper">
      <Position position={position} />
      <Skills skills={skills} />
    </div>
  );
}
