import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskProgress from './components/TaskProgress';
import './styles.css';

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false }]);
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
