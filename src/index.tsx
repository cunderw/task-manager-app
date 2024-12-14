import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskProgress from './components/TaskProgress';
import './styles.css';
import { TaskDetails, TaskFormData } from './models/TaskInterfaces';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<TaskDetails[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    }
  };

  React.useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task: TaskFormData) => {
    try {
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Failed to add task', error);
    }
  };

  const handleComplete = async (id: number) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      try {
        const response = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...taskToUpdate, completed: !taskToUpdate.completed }),
        });
        const updatedTask = await response.json();
        setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
      } catch (error) {
        console.error('Failed to update task', error);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="custom-container">
        <h1 className="custom-header">Task Management App</h1>
        <TaskForm onSubmit={addTask} />
        <TaskList tasks={tasks} setTasks={setTasks} />
        <TaskProgress tasks={tasks} />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
