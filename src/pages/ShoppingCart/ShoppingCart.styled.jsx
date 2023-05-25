import styled from "styled-components";

export const StyledCartBox = styled.div`
  /* display: flex;
  gap: 10px; */

  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 10px;
  }

  & .form-box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;
    flex: 1 1 0;
    margin: 20px 0;
    padding: 20px;
    height: 70vh;
    border: 1px solid black;
    border-radius: 10px;

    & div {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  & .cart-box {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1 1 0;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 20px 0;
    padding: 20px;
    height: 70vh;
    border: 1px solid black;
    border-radius: 10px;
  }
`;

export const StyledTotal = styled.div`
  display: flex;
  gap: 50px;
  justify-content: right;
  align-items: center;

  & :first-child {
    font-size: 20px;
  }

  & .price {
    font-weight: bold;
  }

  & button {
    padding: 10px 20px;
    text-align: center;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: var(--button-color-skyblue);
    transition: background-color var(--transition-dur-and-func);

    &:hover {
      background-color: var(--accent-color-yellow);
    }
  }
`;
