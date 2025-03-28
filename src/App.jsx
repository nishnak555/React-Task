
import "./App.css";
import { useRoutes } from "react-router-dom";
import { Task1 } from "./components/task";

function App() {
  const routes = useRoutes([{ path: "/", element: <Task1 /> }]);
  return routes;
}

export default App;
