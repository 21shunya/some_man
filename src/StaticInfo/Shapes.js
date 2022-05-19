import React from 'react';
import SkillShape from './SkillShape';
import PropTypes from 'prop-types';

export default function Shapes({ line, index }) {
  let color;

  if (index % 2 === 0) {
    color = 'blue';
  } else color = 'green';

  return (
    <li className="shape_line">
      {line.shapes.map((item, index) => {
        return <SkillShape key={index} item={item} color={color} index={index} />;
      })}
    </li>
  );
}

Shapes.propTypes = {
  line: PropTypes.object,
  index: PropTypes.number
};
