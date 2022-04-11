import React from "react";

export default function SkillShape({ item, color, index }) {
  const styles = {
    fontWeight: 700,
    color: "#546C8C",
    borderRadius: "20px",
    padding: "7px 10px",
    margin: "0 15px",
  };

  if (color === "blue") {
    styles.background = "#9CC1D9";
  } else {
    styles.background = "#B0D1D9";
    if (index === 0) {
      styles.marginLeft = "0"
    }
  }

  return <span style={styles}>{item}</span>;
}
