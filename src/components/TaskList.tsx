import React, { useState } from "react";
import { TaskDetails } from "../models/TaskInterfaces";
import DOMPurify from "dompurify";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Snackbar,
  SnackbarCloseReason,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface TaskListProps {
  tasks: TaskDetails[];
  setTasks: React.Dispatch<React.SetStateAction<TaskDetails[]>>;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    setSnackbarMessage("Task status updated");
    setOpen(true);
  };

  const handleClose = (
    event: Event | React.SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="custom-container">
      <Typography variant="h4" gutterBottom className="custom-header">
        Task List
      </Typography>
      <List className="custom-list">
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            className="custom-list-item"
            style={{
              backgroundColor: task.completed ? "#e0f7fa" : "#fff",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <ListItemText
              primary={task.title}
              secondary={
                <>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(task.description),
                    }}
                  ></span>
                  <Typography variant="body2">
                    Deadline: {task.deadline}
                  </Typography>
                </>
              }
            />
            <Button
              variant="contained"
              color={task.completed ? "secondary" : "primary"}
              onClick={() => handleComplete(task.id)}
              className="custom-button"
            >
              {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </Button>
          </ListItem>
        ))}
      </List>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Typography variant="h4" gutterBottom>
          {snackbarMessage}
        </Typography>
      </Snackbar>
    </div>
  );
};

export default TaskList;
