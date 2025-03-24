import { useMediaQuery } from "react-responsive";
import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { isMobile } from "./joital/ReponsiveAtom";
import { useEffect } from "react";
import { useAtom } from "jotai";
import Layout from "./layouts/Layout";
import Inking from "./pages/Inking";
import Chibi from "./pages/Chibi";
import Payment from "./pages/Payment";

function App() {
  const [mob, setMob] = useAtom(isMobile);
  const isMediaMobile = useMediaQuery({ maxWidth: 640 });

  useEffect(() => {
    setMob(isMediaMobile)
  }, [isMediaMobile])

  console.log(mob)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<h1>Error</h1>}>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="inking" element={<Inking />} />
          <Route path="chibi" element={<Chibi />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Route>
    ),
    { basename: "" }
  );

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
