import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  padding: 25px 0;
  width: 100%;
  height: 70px;
  background-color: #9e9eea51;
  box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  color: var(--font-color);
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }

  &:not(-last-child) {
    margin-right: 30px;
    @media screen and (min-width: 768px) {
      margin-right: 60px;
    }
  }

  &:nth-child(-n + 2)::after {
    content: "";
    position: absolute;
    top: -10px;
    right: -15px;
    height: 40px;
    width: 2px;
    background-color: var(--font-color);

    @media screen and (min-width: 768px) {
      right: -35px;
    }
  }
`;
