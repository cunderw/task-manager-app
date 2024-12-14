import React, { useState } from 'react';
import { TaskFormData } from '../models/TaskInterfaces';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TextField, Button, Tooltip } from '@mui/material';

interface TaskFormProps {
  onSubmit: (task: TaskFormData) => void;
  initialData?: TaskFormData;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [deadline, setDeadline] = useState(initialData?.deadline || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description && deadline) {
      onSubmit({ title, description, deadline });
      setTitle('');
      setDescription('');
      setDeadline('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Tooltip title="Enter the task title">
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Tooltip>
      </div>
      <div>
        <Tooltip title="Enter the task description">
          <label htmlFor="description">Description</label>
          <ReactQuill
            value={description}
            onChange={(content) => setDescription(content)}
          />
        </Tooltip>
      </div>
      <div>
        <Tooltip title="Select the task deadline">
          <TextField
            label="Deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default TaskForm;
