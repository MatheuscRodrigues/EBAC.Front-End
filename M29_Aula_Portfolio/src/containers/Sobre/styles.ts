import styled from "styled-components";

export const GitHubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }

  img {
    height: 157px;
  }
`;
