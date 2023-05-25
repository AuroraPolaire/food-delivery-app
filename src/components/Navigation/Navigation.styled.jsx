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
  font-size: 22px;

  color: var(--font-color);
  position: relative;

  &:first-child {
    margin-right: 70px;
  }

  &:first-child::after {
    content: "";
    position: absolute;
    top: -10px;
    right: -70%;
    height: 40px;
    width: 2px;
    background-color: var(--font-color);
  }
`;
