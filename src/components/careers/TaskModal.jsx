import { useState } from 'react'

const TaskModal = ({ application, onClose }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/applications/${application.id}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      });
      if (response.ok) {
        onClose();
      } else {
        console.error('Failed to submit task');
      }
    } catch (err) {
      console.error('Error submitting task:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Create Task for {application.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Submit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskModal
