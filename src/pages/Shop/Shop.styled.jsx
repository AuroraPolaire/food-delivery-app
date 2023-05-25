import styled from "styled-components";

export const ShopPageContainer = styled.div`
  display: flex;
  gap: 10px;

  & .shopsList {
    flex: 1 1 0;
    margin: 20px 0;
    padding: 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
  }

  & .productsList {
    display: flex;
    gap: 30px;
    justify-content: space-around;
    flex: 3 1 0;
    flex-wrap: wrap;
    overflow: scroll;
    margin: 20px 0;
    padding: 20px;
    height: 100vh;
    border: 1px solid black;
    border-radius: 10px;
  }
`;
