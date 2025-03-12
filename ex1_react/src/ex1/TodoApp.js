import { useState } from "react";
import "../css/TodoApp.css";
import TodoForm from "../components/TodoForm.js";
import TodoListFilter from "../components/TodoListFilter.js";
import Todo from "../components/Todo.js";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (text) => {
    if (text.trim()) {
      const newTask = { id: Date.now(), text, completed: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "active") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do List</h1>

      <TodoForm addTask={addTask} />

      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <TodoListFilter filter={filter} setFilter={setFilter} />

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        ))}
      </ul>
    </div>
  );
}
