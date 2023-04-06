import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 900px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
  h1 {
    color: rgb(109, 96, 198);
    padding: 10px;
  }
`;
