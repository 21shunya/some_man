import React, { useState } from "react";
import styled from "styled-components";
import Context from "../Context";

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
  const [height, setHeigt] = useState("85px");
  const [rotation, setRotate] = useState("0deg");

  function changeVisibility() {
    if (visibility === "false") {
      setVisibility("true");
      setHeigt("100%");
      setRotate("180deg");
    } else {
      setVisibility("false");
      setHeigt("85px");
      setRotate("0deg");
    }
  }

  return (
    <Context.Provider value={{ changeVisibility, rotation }}>
      <StyledBlock {...props} height={height}></StyledBlock>
    </Context.Provider>
  );
}
