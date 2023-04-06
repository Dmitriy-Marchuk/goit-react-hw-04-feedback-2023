import React from "react";
import { StyledButton } from "./Controls.styled";

const Controls = ({ onBtnLeaveFeedback, options,title }) => {
    const feedbacks = Object.keys(options);
    return (
        <div>
            <h2>{title}</h2>
            {feedbacks.map(feedback => (
                <StyledButton type='button'
                    key={feedback}
                    name={feedback}
                    onClick={() => onBtnLeaveFeedback(feedback)}
                >{feedback}</StyledButton>
            ))}
        </div>
    )
}

export default Controls;