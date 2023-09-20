import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import SeccionVenta from "./components/SeccionVenta";
import { useEffect } from "react";

const App = () => {
  const navigationType = useNavigationType();
  const currentLocation = useLocation();
  const currentPathname = currentLocation.pathname;

  useEffect(() => {
    if (navigationType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [navigationType, currentPathname]);

  useEffect(() => {
    let myTitle = "";
    let referencias = "";

    switch (currentPathname) {
      case "/":
        myTitle = "";
        referencias = "";
        break;
    }

    if (myTitle) {
      document.myTitle = myTitle;
    }

    if (referencias) {
      const referenciasFijas = document.querySelector(
        'head > meta[name="description"]'
      );

      if (referenciasFijas) {
        referenciasFijas.content = referencias;
      }
    }
  }, [currentPathname]);

  return (
    <Routes>
      <Route path="/" element={<SeccionVenta />} />
    </Routes>
  );
};

export default App;
