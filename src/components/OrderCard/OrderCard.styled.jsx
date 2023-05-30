import styled from "styled-components";

export const StyledOrderContainer = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px 10px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .container {
    gap: 5px;
    justify-content: flex-start;

    @media screen and (min-width: 768px) {
      gap: 0;
      display: flex;
      flex-wrap: wrap;
      max-width: 80%;
    }

    @media screen and (min-width: 1024px) {
      gap: 10px;
    }

    @media screen and (min-width: 1240px) {
      /* max-width: 90%; */
    }
  }

  & .total {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    min-width: 20%;

    @media screen and (min-width: 768px) {
      min-width: 20%;
    }

    @media screen and (min-width: 1240px) {
      max-width: 10%;
    }
  }
`;

export const StyledOrderCard = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: left;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid black;
  transition: all var(--transition-dur-and-func);

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 10px;
    flex-direction: row;
    width: 50%;
    align-items: center;
    justify-content: left;
  }

  @media screen and (min-width: 1024px) {
    width: 47%;
    /* gap: 10px; */
  }
  @media screen and (min-width: 1240px) {
    /* width: 45%; */
  }

  &:hover {
    box-shadow: 0 1px 8px 2px rgba(0, 0, 0, 0.245);
  }

  & img {
    margin: 0;
    min-width: 220px;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
      min-width: 140px;
      height: 90px;
    }

    @media screen and (min-width: 1024px) {
      min-width: 200px;
      height: 110px;
    }

    @media screen and (min-width: 1240px) {
      min-width: 240px;
      height: 130px;
    }
  }

  .cart-item-data {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;

    @media screen and (min-width: 768px) {
      align-items: flex-start;
      margin-top: 0;
    }
  }

  & p {
    padding-bottom: 15px;
  }

  & .price {
    font-weight: bold;
  }
`;
