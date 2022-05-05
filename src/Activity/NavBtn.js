import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #84a1be;
  padding: 0;
  padding-right: 30px;
  border: none;
  background: transparent;
  &:hover {
    font-weight: 700;
    font-size: 31px;
    line-height: 38px;
    color: #535962;
  }
`;

const FocusBtn = styled(StyledBtn)`
  font-weight: 700;
  font-size: 31px;
  line-height: 38px;
  color: #535962;
`;

export default function NavBtn(props) {
  return props.name === props.btnName.btnName ? (
    <FocusBtn {...props} />
  ) : (
    <StyledBtn {...props} />
  );
}
