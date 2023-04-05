import React from "react";

const Statistics = ({goodFeedback, neutralFeedback,badFeedback,countTotal,countPositive}) => (
    <div>
        <span>Good:{goodFeedback}</span>
        <span>Neutral:{neutralFeedback}</span>
        <span>Bad:{badFeedback}</span>
        <span>Total:{countTotal}</span>
        <span>Positive feedback:{countPositive || 0}%</span>
    </div>
)

export default Statistics;