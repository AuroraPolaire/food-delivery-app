import styled from "styled-components";
import { Field } from "formik";

export const StyledLabel = styled.label`
  position: absolute;
  left: 80px;
  top: -24px;
  font-size: 16px;
`;

export const StyledInput = styled(Field)`
  padding: 8px;
  border-radius: 5px;
  height: 35px;
  width: 80%;
  border: 1px solid black;
`;

export const Validation = styled.div`
  color: red;
  position: absolute;
`;
