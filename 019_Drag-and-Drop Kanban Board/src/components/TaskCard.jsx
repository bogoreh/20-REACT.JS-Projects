import React, { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';

const TaskCard = ({ task, index, onEdit, onDelete }) => {
  const [showActions, setShowActions] = useState(false);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ff4757';
      case 'medium': return '#ffa502';
      case 'low': return '#2ed573';
      default: return '#57606f';
    }
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`task-card ${snapshot.isDragging ? 'dragging' : ''}`}
          style={{
            ...provided.draggableProps.style,
          }}
          onMouseEnter={() => setShowActions(true)}
          onMouseLeave={() => setShowActions(false)}
        >
          <div className="task-header">
            <h3>{task.title}</h3>
            <div className="task-header-right">
              <span 
                className="priority-dot"
                style={{ backgroundColor: getPriorityColor(task.priority) }}
                title={task.priority}
              ></span>
              {showActions && (
                <div className="task-actions">
                  <button 
                    className="action-btn edit-btn"
                    onClick={() => onEdit(task)}
                    title="Edit task"
                  >
                    ✏️
                  </button>
                  <button 
                    className="action-btn delete-btn"
                    onClick={() => onDelete(task.id)}
                    title="Delete task"
                  >
                    🗑️
                  </button>
                </div>
              )}
            </div>
          </div>
          <p className="task-description">{task.description}</p>
          <div className="task-footer">
            <span className="task-date">
              {new Date(task.dueDate).toLocaleDateString()}
            </span>
            <span className="task-assignee">{task.assignee}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;