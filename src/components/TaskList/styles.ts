import styled from "styled-components";

export const TaskListContainer = styled.ul`
  list-style: none;
  padding: 0;

  li + li {
    margin-top: 1rem;
  }
`;
