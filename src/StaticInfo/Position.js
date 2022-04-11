import React from "react";

export default function Position(props) {
  return (
    <div className="static-item">
      <div className="static-item-title">
        <div className="title-marker">
          <p className="ellipse"></p>
          {props.position.title}
        </div>
        <img src="icons.svg" />
      </div>
      <div className="position-info">
        <div className="positiion-name">{props.position.pos}</div>
        <ul className="static-info-list">
          {props.position.info.map((item, index) => (
            <li className="pos-info-item" key={index}>
              <p className="text-secondary">{item.name}:</p> {item.descr}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
