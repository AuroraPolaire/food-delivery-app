import styled from "styled-components";

export const StyledOrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px 20px;

  & .container {
    gap: 5px;
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
  }

  & .total {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    min-width: 20%;
  }
`;

export const StyledOrderCard = styled.div`
  max-width: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex: 0 0 0; */
  gap: 20px;
  /* flex-wrap: wrap; */
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid black;
  transition: all var(--transition-dur-and-func);

  &:hover {
    box-shadow: 0 1px 8px 2px rgba(0, 0, 0, 0.245);
  }

  & img {
    margin: 0;
    min-width: 260px;
    height: 140px;
    object-fit: cover;
    border-radius: 10px;
  }

  & p {
    padding-bottom: 15px;
    overflow-wrap: break-word;
  }

  & .price {
    font-weight: bold;
  }
`;
