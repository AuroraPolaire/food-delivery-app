import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid black;
  transition: all var(--transition-dur-and-func);

  &:hover {
    box-shadow: 0 1px 8px 2px rgba(0, 0, 0, 0.245);
  }

  & img {
    width: 180px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
      width: 180px;
      height: 100px;
    }
    @media screen and (min-width: 1024px) {
      width: 270px;
      height: 160px;
    }
    @media screen and (min-width: 1240px) {
      width: 350px;
      height: 200px;
    }
  }

  & div {
    margin-top: 10px;
  }

  & div:last-child {
    text-align: center;
    padding-top: 10px;
    font-weight: bold;
  }

  & button {
    margin: 10px 0 5px;
    padding: 8px 10px;
    border-radius: 5px;
    border: 0.5px solid black;
    transition: background-color var(--transition-dur-and-func);

    &:hover {
      background-color: var(--accent-color-yellow);
    }
  }
`;
