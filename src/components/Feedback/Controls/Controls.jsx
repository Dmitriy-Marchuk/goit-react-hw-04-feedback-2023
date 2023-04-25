import React from 'react';
import { StyledButton } from './Controls.styled';

const Controls = ({ onBtnLeaveFeedback, options, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {options.map(feedback => (
        <StyledButton
          type="button"
          key={feedback}
          name={feedback}
          onClick={() => onBtnLeaveFeedback(feedback)}
        >
          {feedback}
        </StyledButton>
      ))}
    </div>
  );
};

export default Controls;
