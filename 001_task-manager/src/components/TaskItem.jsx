function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="checkbox"
        />
        <div className="task-text">
          <span>{task.text}</span>
          <small>Added: {task.createdAt}</small>
        </div>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="delete-btn"
        aria-label="Delete task"
      >
        🗑️
      </button>
    </div>
  )
}

export default TaskItem