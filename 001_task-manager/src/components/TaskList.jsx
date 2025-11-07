import TaskItem from './TaskItem'

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add a task to get started!</p>
      </div>
    )
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
        />
      ))}
    </div>
  )
}

export default TaskList