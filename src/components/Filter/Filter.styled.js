
import styled from "styled-components";

export const Select = styled.select`
  width: 150px;
  padding: 8px;
  border: 1px solid #1a73e8;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  color: #1a73e8;
  box-shadow: 0px 1.43693px 1.43693px rgba(0, 0, 0, 0.25);
  transition: all 250ms ease-in-out;
  &:hover {
    border: px solid #064497;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;

export const Option = styled.option`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgb(235, 216, 255);
  width: 150px;
  padding: 8px;
  outline: 1px solid red;
  outline: none;
  cursor: pointer;
  color: #1a73e8;
  font-size: 15px;
  padding: 5px;
`;