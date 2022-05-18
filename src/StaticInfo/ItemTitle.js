import React, { useContext, useState } from "react";
import styled from "styled-components";
import visibilityContext from "../VisibilityContext";

const StyledTitle = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 620px;
  font-family: "Bellota Text";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0.08em;
  color: #f2f2f2;
  margin-bottom: 10px;
`;

const StyledIconButton = styled.button`
  background: transparent;
  border: none;
  padding: 2px;
  transform: rotate(${(props) => props.rotation});
  transition: 0.6s ease-out;
`;

export default function ItemTitle(props) {
  const { changeVisibility, rotation } = useContext(visibilityContext);

  return (
    <StyledTitle>
      <div className="title-marker">
        <span className="ellipse"></span>
        {props.title}
      </div>
      <StyledIconButton rotation={rotation} onClick={changeVisibility}>
        <img src="icons.svg" />
      </StyledIconButton>
    </StyledTitle>
  );
}
