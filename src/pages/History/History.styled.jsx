import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  & h1 {
    margin-top: 25px;
    text-align: center;
    font-size: 25px;
  }

  & button {
    margin: 0 auto;
    width: fit-content;
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
