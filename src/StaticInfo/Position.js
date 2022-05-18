import React from "react";
import InfoBlock from "./InfoBlock";
import ItemTitle from "./ItemTitle";

export default function Position(props) {
  const {mainInfo} = {...props}
  
  return (
    <InfoBlock>
      <ItemTitle title={mainInfo.title}></ItemTitle>
      <div className="position-info">
        <div className="positiion-name">{mainInfo.pos}</div>
        <ul className="static-info-list">
          {mainInfo.info.map((item, index) => (
            <li key={index}>
              <span className="text-secondary">{item.name}: </span> {item.descr}
            </li>
          ))}
        </ul>
      </div>
    </InfoBlock>
  );
}
