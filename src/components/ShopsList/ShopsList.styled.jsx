import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ShopButton = styled(NavLink)`
  margin: 10px 0;
  padding: 15px 0;
  text-align: center;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: var(--button-color-skyblue);
`;
