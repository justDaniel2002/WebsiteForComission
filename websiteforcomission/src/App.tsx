import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<h1>Error</h1>}>
        <Route path="/" >
          <Route index element={<Home />} />
          </Route>
      </Route>
    ),
    { basename: "" }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
