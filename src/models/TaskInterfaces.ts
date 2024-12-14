export interface TaskDetails {
  id: number;
  title: string;
  description: string;
  deadline: string;
  completed: boolean;
}

export interface TaskFormData {
  title: string;
  description: string;
  deadline: string;
}

export interface TaskProgress {
  totalTasks: number;
  completedTasks: number;
  progressPercentage: number;
}
