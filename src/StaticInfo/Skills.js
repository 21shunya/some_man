import React from 'react';
import Shapes from './Shapes.js';
import InfoBlock from './InfoBlock.js';
import ItemTitle from './ItemTitle.js';

const styles = {
  langName: {
    fontWeight: 700,
    margin: 0,
    paddingBottom: '5px',
  },
};

export default function Skills(props) {
  const { mainInfo } = { ...props };
  return (
    <InfoBlock>
      <ItemTitle title={mainInfo.title}></ItemTitle>
      <div className="pos-info-item">
        <span className="text-secondary">языки:</span>
        <ul className="static-info-list">
          {mainInfo.langs.map((lang, index) => (
            <li className="pos-info-item" key={index}>
              <span style={styles.langName}>{lang.name} </span>
              <span className="text-secondary">{lang.descr}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="text-secondary">навыки:</span>
        <ul className="shape_list">
          {mainInfo.skls.map((line, index) => {
            return <Shapes key={index} line={line} index={index} />;
          })}
        </ul>
      </div>
    </InfoBlock>
  );
}
