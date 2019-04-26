import styled from '@emotion/styled/macro';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 75px;
  width: 150px;
  margin: 20px;

  background-color: #1e90ff;
  outline: none;

  color: #ffffff;
  font-size: xx-large;

  &:not(:disabled):hover {
    background-color: #1c7fe5;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export default Button;
