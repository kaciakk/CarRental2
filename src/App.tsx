import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./shared/ui/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
