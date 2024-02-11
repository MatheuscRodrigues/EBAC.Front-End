import styled from "styled-components";

export const StyleAvatar = styled.div`
  img {
    max-width: 70%;
    border-radius: 50%;

    @media (max-width: 768px) {
      max-width: 50%;
    }
  }

  h3 {
    margin-bottom: 5px;
  }

  p {
    text-align: center;
    margin-bottom: 24px;
  }
`;
