import styled from "styled-components";

export const ShopPageContainer = styled.div`
  display: flex;
  gap: 10px;

  & .shopsList {
    flex: 1 1 0;
    margin: 20px 0;
    padding: 20px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
  }

  & .productsList {
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
    flex: 3 1 0;
    flex-wrap: wrap;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 20px 0;
    padding: 20px;
    height: 80vh;
    border: 1px solid black;
    border-radius: 10px;
  }
`;
