import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskProgress from './components/TaskProgress';
import './styles.css';
import { TaskDetails, TaskFormData } from './models/TaskInterfaces';

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<TaskDetails[]>([]);

  const addTask = (task: TaskFormData) => {
    const newTask: TaskDetails = {
      ...task,
      id: tasks.length + 1,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <h1>Task Management App</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <TaskProgress tasks={tasks} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
