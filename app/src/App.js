import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  //console.log("Tervetuloa!")

  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/hallitse" element={ <Products />} />

    </Routes>
  );
}

export default App;
