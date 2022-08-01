import React from "react";
import { BsCheck2, BsCircle, BsFillXOctagonFill } from "react-icons/bs";
import { useTasks } from "../../contexts/tasks";
import {
  TaskCardCompleteButton,
  TaskCardContainer,
  TaskCardContent,
  TaskCardId,
  TaskCardText,
  TaskCardDeleteButton,
  TaskCardHeader,
} from "./styles";

const TaskCard: React.FC<Task> = ({ id, name, isComplete }) => {
  const { deleteTask, updateTask } = useTasks();

  return (
    <TaskCardContainer>
      <TaskCardHeader>
        <TaskCardId>#{id}</TaskCardId>
        <TaskCardDeleteButton onClick={() => deleteTask(id)}>
          <BsFillXOctagonFill />
        </TaskCardDeleteButton>
      </TaskCardHeader>
      <TaskCardContent>
        <TaskCardText crossedOut={isComplete}>{name}</TaskCardText>
        <TaskCardCompleteButton
          completed={isComplete}
          onClick={() => updateTask({ id, name, isComplete: !isComplete })}
        >
          {isComplete ? <BsCheck2 /> : <BsCircle />}
        </TaskCardCompleteButton>
      </TaskCardContent>
    </TaskCardContainer>
  );
};

export default TaskCard;
