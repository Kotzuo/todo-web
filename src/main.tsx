import React from "react";
import ReactDOM from "react-dom/client";
import { TasksProvider } from "./contexts/tasks";
import Home from "./pages/Home";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TasksProvider>
      <Home />
    </TasksProvider>
  </React.StrictMode>
);
