import "./App.css";
import { useRoutes } from "react-router-dom";
import { Task1 } from "./components/task";
import Accordian from "./components/accordian/Accordian";
import TaskSecond from "./components/task2/TaskSecond";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Task1 /> },
    { path: "/accordian", element: <Accordian /> },
    { path: "/task", element: <TaskSecond /> },
  ]);
  return routes;
}

export default App;
