import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(-360deg)
  }
`;

export default styled.div`
  display: flex;
  flex-direction: column;

  & > header {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    & > h2 {
      margin-bottom: 0;
      font-size: 40px;
      line-height: 44px;
    }

    & > svg {
      position: absolute;
      top: 12px;
      right: 0;
      flex: 0 0 20px;
      width: 20px;
      height: 20px;
      margin-left: 10px;
      animation: ${rotate} 1500ms infinite linear;
    }
  }

  & > section {
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 32px;
    grid-template-columns: repeat(auto-fit, minmax(280px, max-content));
    justify-content: center;
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    & > header {
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;

      & > svg {
        position: relative;
        top: initial;
        right: initial;
      }

      & > a {
        margin-left: auto;
      }
    }
  }
`;
