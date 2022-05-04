import React from "react";
import styled, {css} from "styled-components";

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
  &:focus {
    font-weight: 700;
    font-size: 31px;
    line-height: 38px;
    color: #535962;
  };

  ${props => props.focus && css `
  font-weight: 700;
  font-size: 31px;
  line-height: 38px;
  color: #535962;
  `}
`;

const FocusBtn = styled(StyledBtn) `
font-weight: 700;
font-size: 31px;
line-height: 38px;
color: #535962;
`;

export default function NavBtn(props) {
    console.log(props.name, props.btnName.btnName)
    if (props.name === props.btnName.btnName){
        return <FocusBtn {...props} />;
    } else {
        console.log('NOT FOCUS')
        return <StyledBtn {...props} />;
    }
}
