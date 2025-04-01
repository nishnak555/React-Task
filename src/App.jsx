
import "./App.css";
import { useRoutes } from "react-router-dom";
import { Task1 } from "./components/task";
import Accordian from "./components/accordian/Accordian";

function App() {
  const routes = useRoutes([{ path: "/", element: <Task1 /> },{ path: "/accordian", element: <Accordian /> }]);
  return routes;
}

export default App;
