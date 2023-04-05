import React from 'react';
import Controls from './Controls';
import Statistics from './Statistics';

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
          <section>
            <Controls title='Please leave feedback' options={this.state} onBtnLeaveFeedback={this.handleIncrement} />
            <section title='Statistics'>
                <Statistics
                  countPositive={this.countPositiveFeedbackPercentage().toFixed(1)}
                  countTotal={this.countTotalFeedback()}
                  goodFeedback={this.state.good}
                  neutralFeedback={this.state.neutral}
                  badFeedback={this.state.bad} />
            </section>
          </section>
      )
  }
}


export default Feedback;