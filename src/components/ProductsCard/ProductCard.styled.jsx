import styled from "styled-components";
export const StyledCard = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid black;
  transition: all var(--transition-dur-and-func);

  &:hover {
    box-shadow: 0 1px 8px 2px rgba(0, 0, 0, 0.245);
  }

  & img {
    width: 350px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  & p {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  & span:last-child {
    font-weight: bold;
  }

  & button {
    margin: 10px 0 5px;
    padding: 8px 10px;
    border-radius: 5px;
    border: 0.5px solid black;
  }
`;
