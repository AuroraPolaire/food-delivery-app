import styled from "styled-components";
import { DeleteIcon } from "@chakra-ui/icons";

export const CartBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid black;
  transition: all var(--transition-dur-and-func);

  &:hover {
    box-shadow: 0 1px 8px 2px rgba(0, 0, 0, 0.245);
  }

  & img {
    margin: 0;
    width: 350px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  .cart-item-data {
    text-align: center;
    font-size: 16px;
  }

  & p {
    padding-bottom: 15px;
    overflow-wrap: break-word;
  }

  & .price {
    font-weight: bold;
  }

  & input {
    padding: 8px;
    border-radius: 5px;
    height: 35px;
    width: 50%;
    border: 1px solid black;
  }
`;

export const StyledIcon = styled(DeleteIcon)`
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
