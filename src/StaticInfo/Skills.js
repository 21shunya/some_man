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
          <p className="ellipse"></p>
          {props.skills.title}
        </div>
        <img src="icons.svg" />
      </div>
      <div className="pos-info-item">
        <p className="text-secondary">языки:</p>
        <ul className="static-info-list">
          {props.skills.langs.map((lang, index) => (
            <li className="pos-info-item" key={index}>
              <p style={styles.langName}>{lang.name} </p>
              <p className="text-secondary">{lang.descr}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-secondary">навыки:</p>
        <ul className="shape_list">
          {props.skills.skls.map((line, index) => {
            return <Shapes key={index} line={line} index={index}/>;
          })}
        </ul>
      </div>
    </div>
  );
}
