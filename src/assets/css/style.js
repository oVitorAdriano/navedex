import styled, { createGlobalStyle, css } from "styled-components";

const errorMessage = css`
  margin: -16px 0 16px;
  color: #f44336;
  font-size: 14px;
  font-weight: 600;
`;

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box; 
  }

  html,
  body,
  #app {
    height: 100%;
  }

  body {
    background: #fff;
    color: #212121;
  }

  body,
  button,
  input,
  select,
  textarea {
    font-family: "Montserrat", sans-serif;
  }

  a:hover,
  button:hover,
  label:hover,
  select:hover {
    cursor: pointer
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 16px;
  }
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

export const StyledNaverForm = styled.div`
  max-width: 640px;
  margin: 0 auto;

  & > form {
    display: flex;
    flex-direction: column;

    & > .errorMessage {
      ${errorMessage};
    }

    & > button {
      margin-left: auto;
    }
  }

  @media (min-width: 540px) {
    & > form {
      & > div {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 16px;
      }
    }
  }
`;
