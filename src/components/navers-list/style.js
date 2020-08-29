import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(280px, max-content));
  justify-content: center;
  margin-bottom: 32px;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const EmptyList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 64px;

  & > span {
    flex: 0 0 100%;
    margin-bottom: 16px;
    text-align: center;
    font-weight: 600;
  }
`;
