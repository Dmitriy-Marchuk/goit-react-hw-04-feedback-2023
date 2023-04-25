import { useState } from 'react';
import Controls from './Controls/Controls';
import Statistics from './Statistic/Statistics';
import Section from './Section/Section';
import { StyledFeedback } from './Feedback.styled';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = (good / countTotalFeedback) * 100;

  const onButtonLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        throw new Error(`Unkown feedback type = ${type}`);
    }
  };

  return (
    <StyledFeedback>
      <Section title="Please leave feedback">
        <Controls
          options={['good', 'neutral', 'bad']}
          onBtnLeaveFeedback={onButtonLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          countPositive={countPositiveFeedbackPercentage}
          countTotal={countTotalFeedback}
          goodFeedback={good}
          neutralFeedback={neutral}
          badFeedback={bad}
        />
      </Section>
    </StyledFeedback>
  );
};

export default Feedback;
