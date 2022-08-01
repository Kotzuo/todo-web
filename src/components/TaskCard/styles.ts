import styled, { css } from "styled-components";

export const TaskCardContainer = styled.li`
  background-color: #fff;
  border-radius: 0 1rem 1rem 0;
  border-left: 4px solid #2da4ff;
  height: 6rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 700px;
`;

export const TaskCardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const TaskCardId = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const TaskCardContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TaskCardText = styled.p<TaskCardTextProps>`
  font-size: 1.1rem;
  font-weight: 500;

  ${(props) =>
    props.crossedOut &&
    css`
      text-decoration: line-through;
      color: #7e7e7e;
    `}
`;

export const TaskCardButtonCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const TaskCardCompleteButton = styled.button<TaskCardCompleteButtonProps>`
  ${TaskCardButtonCss}

  & svg {
    font-size: 1.5rem;
    color: ${(props) => (props.completed ? "green" : "#505050")};
  }
`;

export const TaskCardDeleteButton = styled.button`
  ${TaskCardButtonCss}

  & svg {
    font-size: 1.1rem;
    color: #d13636;
  }
`;
