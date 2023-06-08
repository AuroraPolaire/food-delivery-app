import styled from "styled-components";
import { DeleteIcon } from "@chakra-ui/icons";

export const CartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid black;
  transition: all var(--transition-dur-and-func);

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

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
  & .amount-container {
    display: flex;
    justify-content: center;
  }

  & .amount-input {
    padding: 10px;
    border-radius: 5px;
    width: 50px;
    border: 1px solid black;
    text-align: center;
  }

  & .amount-button {
    margin: 0 7px;
    border: 0px;
    background-color: transparent;
    transition: all var(--transition-dur-and-func);

    &:hover {
      transform: scale(1.2);
      color: var(--accent-color-orange);
    }
  }
`;

export const StyledIcon = styled(DeleteIcon)`
  cursor: pointer;
  transition: all var(--transition-dur-and-func);

  &:hover {
    color: red;
  }
`;
