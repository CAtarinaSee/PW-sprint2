import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TodoApp from "./ex1/TodoApp";
import TodoAppLocalStorage from "./ex2/TodoAppLocalStorage";
import TodoAppContador from "./ex3/TodoAppContador";

export default function AppMenu() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex1" element={<TodoApp />} />
          <Route path="/ex2" element={<TodoAppLocalStorage />} />
          <Route path="/ex3" element={<TodoAppContador />} />
        </Routes>
      </div>
    </div>
  );
}
