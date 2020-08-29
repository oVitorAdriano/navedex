import styled, { css } from "styled-components";

import thumbPlaceholder from "../../assets/images/thumb-placeholder.png";

export default styled.div`
  & > div {
    display: flex;
    flex-direction: column;
    // margin: 0 16px 32px;

    ${state => css`
      & > .thumb {
        display: block;
        width: 280px;
        height: 280px;
        flex: 0 0 280px;
        margin-bottom: 16px;
        background-image: url(${state.thumb}), url(${thumbPlaceholder});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: grayscale(1);
        cursor: pointer;
      }
    `}

    & > strong {
      margin-bottom: 4px;
    }

    & > span {
      margin-bottom: 10px;
    }
  }
`;
