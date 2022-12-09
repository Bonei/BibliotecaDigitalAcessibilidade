import React from 'react';
import './feature.css';

const Feature = ({ title, text, image }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature__section">
      <img src={image} />
      <div>
        <div className="gpt3__features-container__feature-title">
          <div />
          <h1 className="gradient__header__title">{title}</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Feature;
