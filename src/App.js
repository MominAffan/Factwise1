import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./components/Home/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home />}></Route>
          <Route exact path={"/edit/:id"} element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
