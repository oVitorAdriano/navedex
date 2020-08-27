import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  & > label {
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 600;
  }

  & > input {
    width: 100%;
    height: 40px;
    padding: 0 8px;
    border: 2px solid #212121;
    font-size: 16px;
    background: #fff;
    color: #212121;
  }
`;
