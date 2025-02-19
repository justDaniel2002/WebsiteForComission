import { useMediaQuery } from "react-responsive";
import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { isMobile } from "./joital/ReponsiveAtom";
import { useEffect } from "react";
import { useAtom } from "jotai";

function App() {
  const [mob, setMob] = useAtom(isMobile);
  const isMediaMobile = useMediaQuery({ maxWidth: 640 });

  useEffect(() => {
    setMob(isMediaMobile)
  },[isMediaMobile])

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
