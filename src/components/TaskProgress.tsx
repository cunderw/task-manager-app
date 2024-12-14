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
    <Box>
      <Typography variant="h4" gutterBottom>
        Task Progress
      </Typography>
      <Typography variant="body1">
        {completedTasks} of {totalTasks} tasks completed
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progressPercentage}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: '#e0e0e0',
          '& .MuiLinearProgress-bar': {
            backgroundColor: progressPercentage === 100 ? '#4caf50' : '#2196f3',
          },
        }}
      />
    </Box>
  );
};

export default TaskProgress;
