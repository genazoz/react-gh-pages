import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "../pages";

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

const App = () => (
  <RouterProvider router={router} />
)

export default App
