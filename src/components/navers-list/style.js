import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit, 280px);
  justify-content: center;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, 320px);
    justify-content: space-between;
  }
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
