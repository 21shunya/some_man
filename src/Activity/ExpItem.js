import React from "react";

export default function ExpItem({ item }) {
  return (
    <div className="exp-item">
      <div className="exp-duration">
        <div>{item.startDate} —</div>
        <div>{item.endDate}</div>
        <div>{item.duration} </div>
      </div>
      <div className="exp-info-wrapper">
        <div className="exp-info-title">
          <span className="exp-companyName">{item.name} </span>
          <span className="exp-companyInfo">
            {" "}
            ({item.city}, {item.link})
          </span>
        </div>
        <div className="exp-positon">{item.position}</div>
        <ul className="exp-stack-list">
            <span className="exp-stack-title">Stack:</span>
          {item.stack.map((st, index) => (
            <li key={index}>{st}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
