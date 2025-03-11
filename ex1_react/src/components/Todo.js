export default function Todo({ task, toggleTask, removeTask }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span
        className={`task-text ${task.completed ? "completed" : ""}`}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>
      <button className="delete-button" onClick={() => removeTask(task.id)}>
        ✕
      </button>
    </li>
  );
}
