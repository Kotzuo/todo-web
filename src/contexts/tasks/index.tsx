import React, { PropsWithChildren, useEffect } from "react";
import { api, urls } from "../../services/api";

export const TasksContext = React.createContext({} as TasksContextValues);

export const TasksProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [tasks, setTasks] = React.useState<PaginatedResponse<Task>>();

  const addTask = async (name: string) => {
    await api.post<Task>(urls.tasks.root, { name });
    await fetchTasks();
  };

  const fetchTasks = async (page: number = 1) => {
    const response = await api.get<PaginatedResponse<Task>>(urls.tasks.root, {
      params: { page, paginate: false },
    });
    setTasks(response.data);
  };

  const updateTask = async (task: Task) => {
    await api.patch<Task>(
      urls.tasks.detail.replace(":id", task.id.toString()),
      task
    );
    await fetchTasks();
  };

  const deleteTask = async (id: number) => {
    await api.delete(urls.tasks.detail.replace(":id", id.toString()));
    await fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, fetchTasks, updateTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  return React.useContext(TasksContext);
};
