import styled from 'styled-components';

export const StatisticsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
`;

export const StatisticsEl = styled.span`
  padding: 20px;
  :not(:last-child) {
    border-bottom: 1px solid black;
  }
`;
