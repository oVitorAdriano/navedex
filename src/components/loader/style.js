import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25%, 50% {
    transform: rotate(180deg);
  }

  75%, 100% {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-self: center;
  flex: 1;
  margin-top: 32px;
  margin-bottom: 32px;

  & > div {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-bottom: 16px;
    border: 3px solid #212121;
    background: #fff;
    animation: ${spin} 2s ease infinite;
  }

  & > span {
    text-align: center;
    font-weight: 600;
  }
`;
