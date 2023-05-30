import styled from "styled-components";

export const StyledIdFormBox = styled.div`
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
    height: 180px;
    border: 1px solid black;
    border-radius: 10px;

    & .form-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
