import styled, { css } from "styled-components";

const errorMessage = css`
  margin: -16px 0 16px;
  color: #f44336;
  font-size: 14px;
  font-weight: 600;
`;

export const StyledAuthentication = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 0 32px;

  & > div {
    padding: 32px;
    border: 2px solid #212121;
    width: 100%;
    max-width: 450px;

    & > img {
      display: block;
      width: 100%;
      max-width: 235px;
      margin: 0 auto 32px;
    }

    & > form {
      display: flex;
      flex-direction: column;

      & > .errorMessage {
        ${errorMessage};
      }
    }
  }
`;

export const StyledApplication = styled.div`
  min-height: 100%;
  padding: 0 32px;
`;
