import React from "react";

export default function Position(props) {
  return (
    <div className="static-item">
      <div className="static-item-title">
        <div className="title-marker">
          <span className="ellipse"></span>
          {props.position.title}
        </div>
        <img src="icons.svg" />
      </div>
      <div className="position-info">
        <div className="positiion-name">{props.position.pos}</div>
        <ul className="static-info-list">
          {props.position.info.map((item, index) => (
            <li key={index}>
              <span className="text-secondary">{item.name}: </span> {item.descr}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
