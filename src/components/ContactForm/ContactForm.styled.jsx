import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 2px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: black;
  font-size: 18px;
`;

export const Input = styled.input`
  padding: 5px 10px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid gray;
  color: black;
  font-size: 18px;
`;