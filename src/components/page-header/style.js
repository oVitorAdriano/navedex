import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 32px;

  & > a {
    margin-right: 24px;

    & > svg {
      display: block;
      width: 32px;
      height: 32px;
      fill: #212121;
    }
  }

  & > h3 {
    margin-bottom: 0;
    font-size: 24px;
    line-height: 36px;
  }
`;
