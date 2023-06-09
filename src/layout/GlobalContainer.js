import styled from "styled-components";

export const GlobalContainer = styled.div`
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }

  // 768px//

  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0px 16px;
  }

  // 1240px//

  @media screen and (min-width: 1240px) {
    width: 1240px;
    padding: 0px 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 16px;
  }
`;
