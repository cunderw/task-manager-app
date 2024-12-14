import React from 'react';
import { TaskDetails } from '../models/TaskInterfaces';
import { Typography, LinearProgress, Box } from '@mui/material';

interface TaskProgressProps {
  tasks: TaskDetails[];
}

const TaskProgress: React.FC<TaskProgressProps> = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <Box className="custom-container">
      <Typography variant="h4" gutterBottom className="custom-header">
        Task Progress
      </Typography>
      <Typography variant="body1">
        {completedTasks} of {totalTasks} tasks completed
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progressPercentage}
        className="custom-progress-bar"
      />
    </Box>
  );
};

export default TaskProgress;
