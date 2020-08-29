import styled from "styled-components";

export default styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  place-self: center;

  & > strong,
  & > span {
    margin-bottom: 16px;
  }

  & > strong {
    font-size: 96px;
  }
`;
