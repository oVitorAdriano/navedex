import styled from "styled-components";

export default styled.div`
  & > a,
  & > button {
    margin-right: 10px;
    border: 0;
    background: transparent;

    & > svg {
      width: 24px;
      height: 24px;
      fill: #212121;
    }
  }
`;
