import styled, { css } from "styled-components";

import thumbPlaceholder from "../../assets/images/thumb-placeholder.png";

export default styled.div`
  display: flex;
  flex-direction: column;
  min-height: 480px;
  margin: -32px;
  overflow: hidden;

  ${state => css`
    & > .thumb {
      flex: 0 0 320px;
      background-image: url(${state.thumb}), url(${thumbPlaceholder});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      filter: grayscale(1);
    }
  `}

  & > main {
    display: flex;
    flex-direction: column;
    padding: 32px;
    overflow: hidden auto;

    & > header,
    & > section {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;

      & > strong {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }

    & > header {
      & > strong {
        font-size: 24px;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    max-height: 480px;

    & > .thumb,
    & > section {
      flex: 0 0 50%;
    }
  }
`;
