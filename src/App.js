import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shirts from "./Components/Shirts/Shirts";
import Nav from "./Components/Header/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<h1>Welcome To Website hit to /shirts</h1>}
        ></Route>
        <Route path="/shirts" element={<Shirts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
