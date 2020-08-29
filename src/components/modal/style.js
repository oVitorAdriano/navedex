import styled from "styled-components";

export default styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 50px 32px;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden auto;

  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 480px;
    padding: 32px;
    margin: 0 auto;
    background: #fff;

    & > button {
      position: absolute;
      top: 24px;
      right: 24px;
      border: 0;
      background: transparent;
      z-index: 10000;

      & > svg {
        width: 24px;
        height: 24px;
        fill: #212121;
        pointer-events: none;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 100px 32px;

    & > div {
      max-width: 960px;
    }
  }
`;
