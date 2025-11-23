import React, { useState, useEffect } from 'react';

const TaskModal = ({ isOpen, onClose, onSave, task, columnId }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    assignee: '',
    dueDate: ''
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        priority: task.priority,
        assignee: task.assignee,
        dueDate: task.dueDate
      });
    } else {
      setFormData({
        title: '',
        description: '',
        priority: 'medium',
        assignee: '',
        dueDate: ''
      });
    }
  }, [task, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    
    const taskData = {
      ...formData,
      dueDate: formData.dueDate || new Date().toISOString().split('T')[0]
    };
    
    if (task) {
      // Editing existing task
      onSave({ ...taskData, id: task.id }, task.columnId);
    } else {
      // Adding new task
      onSave(taskData, columnId);
    }
    
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="add-task-modal">
        <div className="modal-header">
          <h2>{task ? 'Edit Task' : 'Add New Task'}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description"
              rows="3"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Assignee</label>
            <input
              type="text"
              name="assignee"
              value={formData.assignee}
              onChange={handleChange}
              placeholder="Assign to..."
            />
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              {task ? 'Update Task' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;