import styled from "styled-components";

export const TextInputWithButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const TextInputWithButtonInput = styled.input`
  background-color: #ffffff2e;
  border: none;
  height: 3rem;
  border-radius: 1000px;
  padding: 1rem;
  font-size: 1.1rem;
  color: #fff;
  flex: 1;
  min-width: 100px;

  ::placeholder {
    color: #ffffffd5;
  }
`;

export const TextInputWithButtonButton = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: none;
  margin-left: 0.5rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & svg {
    font-size: 1.5rem;
    fill: #fff;
  }
`;
