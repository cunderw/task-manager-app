import React from 'react';
import { TaskDetails } from '../models/TaskInterfaces';

interface TaskProgressProps {
  tasks: TaskDetails[];
}

const TaskProgress: React.FC<TaskProgressProps> = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div>
      <h2>Task Progress</h2>
      <p>{completedTasks} of {totalTasks} tasks completed</p>
      <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
        <div
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: progressPercentage === 100 ? '#4caf50' : '#2196f3',
            height: '10px',
            borderRadius: '5px',
          }}
        />
      </div>
    </div>
  );
};

export default TaskProgress;
