import React, { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Column from './Column';
import TaskModal from './TaskModal'; // Renamed from AddTask
import '../styles/KanbanBoard.css';

const initialColumns = [
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'review', title: 'Review' },
  { id: 'done', title: 'Done' }
];

const initialTasks = {
  'todo': [
    {
      id: 'task-1',
      title: 'Design Homepage',
      description: 'Create wireframes and mockups for the homepage',
      priority: 'high',
      assignee: 'Alice',
      dueDate: '2024-02-15'
    },
    {
      id: 'task-2',
      title: 'Setup Database',
      description: 'Initialize and configure the database schema',
      priority: 'medium',
      assignee: 'Bob',
      dueDate: '2024-02-20'
    }
  ],
  'in-progress': [
    {
      id: 'task-3',
      title: 'User Authentication',
      description: 'Implement login and registration functionality',
      priority: 'high',
      assignee: 'Charlie',
      dueDate: '2024-02-18'
    }
  ],
  'review': [
    {
      id: 'task-4',
      title: 'API Documentation',
      description: 'Review and update API documentation',
      priority: 'low',
      assignee: 'Diana',
      dueDate: '2024-02-22'
    }
  ],
  'done': [
    {
      id: 'task-5',
      title: 'Project Setup',
      description: 'Initialize React project with Vite',
      priority: 'medium',
      assignee: 'Eve',
      dueDate: '2024-02-10'
    }
  ]
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useLocalStorage('kanban-tasks', initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentColumn, setCurrentColumn] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceTasks = Array.from(tasks[source.droppableId]);
    const destTasks = Array.from(tasks[destination.droppableId]);
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceTasks.splice(destination.index, 0, movedTask);
      setTasks({
        ...tasks,
        [source.droppableId]: sourceTasks
      });
    } else {
      destTasks.splice(destination.index, 0, movedTask);
      setTasks({
        ...tasks,
        [source.droppableId]: sourceTasks,
        [destination.droppableId]: destTasks
      });
    }
  };

  const handleAddTask = (columnId) => {
    setCurrentColumn(columnId);
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task) => {
    // Find which column the task is in
    const columnId = Object.keys(tasks).find(col => 
      tasks[col].some(t => t.id === task.id)
    );
    setCurrentColumn(columnId);
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = { ...tasks };
      Object.keys(updatedTasks).forEach(columnId => {
        updatedTasks[columnId] = updatedTasks[columnId].filter(task => task.id !== taskId);
      });
      setTasks(updatedTasks);
    }
  };

  const handleSaveTask = (taskData, columnId) => {
    if (editingTask) {
      // Update existing task
      const updatedTasks = { ...tasks };
      Object.keys(updatedTasks).forEach(colId => {
        updatedTasks[colId] = updatedTasks[colId].map(task =>
          task.id === editingTask.id ? { ...taskData, id: editingTask.id } : task
        );
      });
      setTasks(updatedTasks);
    } else {
      // Add new task
      const newTask = {
        ...taskData,
        id: `task-${Date.now()}`
      };
      setTasks({
        ...tasks,
        [columnId]: [...tasks[columnId], newTask]
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
    setCurrentColumn(null);
  };

  return (
    <div className="kanban-board">
      <div className="board-header">
        <h1>Project Kanban Board</h1>
        <p>Drag and drop tasks to organize your workflow • Click on tasks to edit or delete</p>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns-container">
          {initialColumns.map(column => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks[column.id]}
              onAddTask={handleAddTask}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </DragDropContext>

      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
        task={editingTask}
        columnId={currentColumn}
      />
    </div>
  );
};

export default KanbanBoard;