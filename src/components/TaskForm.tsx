import React, { useState } from 'react';
import { TaskFormData } from '../models/TaskInterfaces';
import { Editor } from '@tinymce/tinymce-react';

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
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <Editor
          apiKey="your-tinymce-api-key"
          initialValue={description}
          init={{
            height: 200,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={(content) => setDescription(content)}
        />
      </div>
      <div>
        <label htmlFor="deadline">Deadline</label>
        <input
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
