import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const baseButton = css`
  display: inline-block;
  min-width: 176px;
  padding: 0 16px;
  line-height: 40px;
  border: 2px solid #212121;
  font-size: 14px;
  font-weight: 600;
  text-align: center;

  ${state => [
    state.theme === "light" &&
      css`
        background: #fff;
        color: #212121;
      `,
    state.theme === "dark" &&
      css`
        background: #212121;
        color: #fff;
      `
  ]}
`;

export const StyledButton = styled.button`
  ${baseButton};
`;

export const StyledLinkButton = styled(Link)`
  ${baseButton};
  text-decoration: none;
`;
