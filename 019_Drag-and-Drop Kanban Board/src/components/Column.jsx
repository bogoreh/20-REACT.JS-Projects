import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';

const Column = ({ column, tasks, onAddTask, onEditTask, onDeleteTask }) => {
  const getColumnColor = (columnId) => {
    switch (columnId) {
      case 'todo': return '#ff6b6b';
      case 'in-progress': return '#ffa500';
      case 'review': return '#1e90ff';
      case 'done': return '#2ed573';
      default: return '#57606f';
    }
  };

  return (
    <div className="kanban-column">
      <div 
        className="column-header"
        style={{ borderTop: `4px solid ${getColumnColor(column.id)}` }}
      >
        <h2>{column.title}</h2>
        <span className="task-count">{tasks.length}</span>
      </div>
      
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`tasks-container ${snapshot.isDraggingOver ? 'drag-over' : ''}`}
          >
            {tasks.map((task, index) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                index={index}
                onEdit={onEditTask}
                onDelete={onDeleteTask}
              />
            ))}
            {provided.placeholder}
            
            <button 
              className="add-task-btn"
              onClick={() => onAddTask(column.id)}
            >
              + Add Task
            </button>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;