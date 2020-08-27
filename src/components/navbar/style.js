import styled from "styled-components";

export default styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 40px;

  & > a > img {
    width: 145.12px;
  }

  & > button {
    border: 0;
    background: transparent;
    font-size: 14px;
    font-weight: 600;
  }
`;
