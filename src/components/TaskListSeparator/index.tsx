import React from "react";
import {
  TaskListSeparatorContainer,
  TaskListSeparatorHorizontalLine,
  TaskListSeparatorTitle,
} from "./styles";

const TaskListSeparator: React.FC<TaskListSeparatorProps> = ({ title }) => {
  return (
    <TaskListSeparatorContainer>
      <TaskListSeparatorHorizontalLine />
      <TaskListSeparatorTitle>{title}</TaskListSeparatorTitle>
      <TaskListSeparatorHorizontalLine />
    </TaskListSeparatorContainer>
  );
};

export default TaskListSeparator;
