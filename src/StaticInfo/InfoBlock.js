import React, { useState } from "react";
import styled from "styled-components";
import visibilityContext from "../VisibilityContext";

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  height: ${(props) => props.height};
  overflow: hidden;
  transition: height 0.6s;
`;

export default function InfoBlock(props) {
  const [visibility, setVisibility] = useState("false");
  const [height, setH] = useState("85px");
  function changeVisibility() {
    if (visibility === "false") {
      setVisibility("true");
      setH("100%");
    } else {
      setVisibility("false");
      setH("85px");
    }
    console.log(visibility);
  }

  return (
    <visibilityContext.Provider value={{ changeVisibility }}>
      <StyledBlock {...props} height={height}></StyledBlock>
    </visibilityContext.Provider>
  );
}
