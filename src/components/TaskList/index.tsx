import React from "react";
import { BsSearch } from "react-icons/bs";
import { useTasks } from "../../contexts/tasks";
import TaskCard from "../TaskCard";
import TaskListSeparator from "../TaskListSeparator";
import TextInputWithButton from "../TextInputWithButton";
import { TaskListContainer } from "./styles";

const TaskList: React.FC = () => {
  const { tasks } = useTasks();
  const [searchTerm, setSearchTerm] = React.useState("");

  // list of tasks separated by completed status
  const [completedTasks, pendingTasks] = React.useMemo(() => {
    if (!tasks) {
      return [[], []];
    }

    const tasksFiltered =
      searchTerm !== ""
        ? tasks.values.filter((task) =>
            task.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : tasks.values;

    return tasksFiltered.reduce<[React.ReactNode[], React.ReactNode[]]>(
      (acc, task) => {
        if (task.isComplete) {
          acc[0].push(<TaskCard key={task.id} {...task} />);
        } else {
          acc[1].push(<TaskCard key={task.id} {...task} />);
        }
        return acc;
      },
      [[], []]
    );
  }, [searchTerm, tasks]);

  return (
    <TaskListContainer>
      <TextInputWithButton
        placeholder="Pesquisar uma task"
        dontResetValueOnEnter
        buttonIcon={<BsSearch />}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <TaskListSeparator title="Pendentes" />
      {pendingTasks}
      <TaskListSeparator title="Concluídas" />
      {completedTasks}
    </TaskListContainer>
  );
};

export default TaskList;
