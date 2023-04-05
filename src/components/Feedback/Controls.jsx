import React from "react";

const Controls = ({ onBtnLeaveFeedback, options,title }) => {
    const feedbacks = Object.keys(options);
    return (
        <div>
            <h2>{title}</h2>
            {feedbacks.map(feedback => (
                <button type='button'
                    key={feedback}
                    name={feedback}
                    onClick={() => onBtnLeaveFeedback(feedback)}
                >{feedback}</button>
            ))}
        </div>
    )
}

export default Controls;