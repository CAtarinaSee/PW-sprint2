import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TodoApp from "./ex1/TodoApp";
import TodoApp2 from "./ex2/TodoApp2";
import TodoApp3 from "./ex3/TodoApp3";

export default function AppMenu() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex1" element={<TodoApp />} />
          <Route path="/ex2" element={<TodoApp2 />} />
          <Route path="/ex3" element={<TodoApp3 />} />
        </Routes>
      </div>
    </div>
  );
}
