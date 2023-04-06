import React from "react";
import { StatisticsEl,StatisticsWrapper } from "./Statistic.styled";

const Statistics = ({ goodFeedback, neutralFeedback, badFeedback, countTotal, countPositive }) => (
    <StatisticsWrapper>
        <StatisticsEl>Good: {goodFeedback}</StatisticsEl>
        <StatisticsEl>Neutral: {neutralFeedback}</StatisticsEl>
        <StatisticsEl>Bad: {badFeedback}</StatisticsEl>
        <StatisticsEl>Total: {countTotal}</StatisticsEl>
        <StatisticsEl>Positive feedback: {countPositive.toFixed(1)}%</StatisticsEl>
    </StatisticsWrapper>
)

export default Statistics;