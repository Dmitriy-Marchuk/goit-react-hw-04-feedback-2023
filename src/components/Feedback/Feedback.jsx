import React from 'react';
import Controls from './Controls/Controls';
import Statistics from './Statistic/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import { StyledFeedback } from './Feedback.styled';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalFeedback = () =>
        this.state.good + this.state.neutral + this.state.bad;
    
    countPositiveFeedbackPercentage = () =>
    (this.state.good /
      (this.state.good + this.state.neutral + this.state.bad)) *
        100;
    
    handleIncrement = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
    };
    
    totalCount = () => {
    return Object.values(this.state).reduce((previousValue, newFeedback) => {
      return previousValue + newFeedback;
    }, 0);
  };

  render() {
    return (
      <StyledFeedback>
      <Section  title='Please leave feedback'>
        <Controls options={this.state} onBtnLeaveFeedback={this.handleIncrement} />
      </Section>
      <Section title='Statistics'>
        {this.totalCount() === 0 ? (
              <Notification message="No feedback given" />) :
              (<Statistics
                  countPositive={this.countPositiveFeedbackPercentage() || 0}
                  countTotal={this.countTotalFeedback()}
                  goodFeedback={this.state.good}
                  neutralFeedback={this.state.neutral}
                  badFeedback={this.state.bad}
              />)
            }
      </Section></StyledFeedback>
      )
  }
}


export default Feedback;