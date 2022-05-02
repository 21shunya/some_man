import React from "react";
import Shapes from "./Shapes.js";
const styles = {
  langName: {
    fontWeight: 700,
    margin: 0,
    paddingBottom: "5px",
  },
};

export default function Skills(props) {
  return (
    <div className="static-item">
      <div className="static-item-title">
        <div className="title-marker">
          <span className="ellipse"></span>
          {props.skills.title}
        </div>
        <img src="icons.svg" />
      </div>
      <div className="pos-info-item">
        <span className="text-secondary">языки:</span>
        <ul className="static-info-list">
          {props.skills.langs.map((lang, index) => (
            <li className="pos-info-item" key={index}>
              <span style={styles.langName}>{lang.name} </span>
              <span className="text-secondary">{lang.descr}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="text-secondary">навыки:</span>
        <ul className="shape_list">
          {props.skills.skls.map((line, index) => {
            return <Shapes key={index} line={line} index={index}/>;
          })}
        </ul>
      </div>
    </div>
  );
}
