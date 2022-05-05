import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const HiddenFlex = styled(StyledFlex)`
  color: #c4ccd8 !important;
`;

export default function ActivityItem(props) {
  return props.elemName === props.btnName.btnName ? (
    <StyledFlex {...props} />
  ) : (
    <HiddenFlex {...props}/>
  );
}
