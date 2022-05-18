import React, { useState } from "react";
import InfoBlock from "./InfoBlock";
import ItemTitle from "./ItemTitle";

export default function Position(props) {

  return (
    <InfoBlock>
      <ItemTitle props={props}></ItemTitle>
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
    </InfoBlock>
  );
}
