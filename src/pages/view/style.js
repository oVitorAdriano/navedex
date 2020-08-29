import styled, { css } from "styled-components";

import thumbPlaceholder from "../../assets/images/thumb-placeholder.png";

export default styled.div`
  max-width: 1024px;
  margin: 0 auto 32px;

  & > main {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${state => css`
      & > .thumb {
        width: 320px;
        height: 320px;
        flex: 0 0 320px;
        margin-bottom: 32px;
        background-image: url(${state.thumb}), url(${thumbPlaceholder});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: grayscale(1);
      }
    `}

    & > section {
      display: flex;
      flex-direction: column;
      width: 100%;

      & > section {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

        & > strong {
          font-size: 16px;
          margin-bottom: 10px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    & > main {
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;

      & > .thumb {
        margin-right: 32px;
      }
    }
  }
`;
