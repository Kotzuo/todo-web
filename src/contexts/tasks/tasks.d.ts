interface Task {
  id: number;
  name: string;
  isComplete: boolean;
}

interface TasksContextValues {
  tasks?: PaginatedResponse<Task>;
  addTask: (name: string) => Promise<void>;
  fetchTasks: (page: number = 1) => Promise<void>;
  updateTask: (task: Task) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}
