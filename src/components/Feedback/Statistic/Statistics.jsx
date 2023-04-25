import React from 'react';
import { StatisticsEl, StatisticsWrapper } from './Statistic.styled';
import Notification from '../Notification/Notification';

const Statistics = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  countTotal,
  countPositive,
}) => {
  return countTotal ? (
    <StatisticsWrapper>
      <StatisticsEl>Good: {goodFeedback}</StatisticsEl>
      <StatisticsEl>Neutral: {neutralFeedback}</StatisticsEl>
      <StatisticsEl>Bad: {badFeedback}</StatisticsEl>
      <StatisticsEl>Total: {countTotal}</StatisticsEl>
      <StatisticsEl>
        Positive feedback: {countPositive ? countPositive.toFixed(1) + '%' : 0}
      </StatisticsEl>
    </StatisticsWrapper>
  ) : (
    <Notification message="No feedback given!" />
  );
};

export default Statistics;
