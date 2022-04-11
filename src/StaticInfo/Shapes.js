import React from "react";
import SkillShape from "./SkillShape";

export default function Shapes({ line, index }) {
  let color;

  if (index % 2 === 0) {
    color = "blue";
  } else color = "green";

  return (
    <li className="shape_line">
        {line.shapes.map((item, index) => {
          return <SkillShape key={index} item={item} color={color} index={index}/>;
        })}
    </li>
  );
}
