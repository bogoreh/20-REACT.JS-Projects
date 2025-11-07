import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './index.css'

function App() {
  const [tasks, setTasks] = useState([])

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (taskText) => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date().toLocaleDateString()
      }
      setTasks([...tasks, newTask])
    }
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>📝 Task Manager</h1>
          <p>Organize your daily tasks efficiently</p>
        </header>
        
        <TaskForm onAddTask={addTask} />
        
        <TaskList 
          tasks={tasks} 
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
        />
        
        {tasks.length > 0 && (
          <div className="stats">
            <p>
              Total: {tasks.length} | 
              Completed: {tasks.filter(task => task.completed).length} | 
              Pending: {tasks.filter(task => !task.completed).length}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App