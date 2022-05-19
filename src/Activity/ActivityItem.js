import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import PropTypes from 'prop-types';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.8s;
`;

export default function ActivityItem(props) {

  return props.elemName === props.btnName.btnName ? (
    <Fade bottom>
      <StyledFlex {...props} opacity="1" />
    </Fade>
  ) : (
    <Fade bottom>
      <StyledFlex {...props} opacity="0.1" />
    </Fade>
  );
}

ActivityItem.propTypes = {
  btnName: PropTypes.object,
  elemName: PropTypes.string
};
