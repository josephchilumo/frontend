import {useState}from 'react';

const ApplicationModal = ({job, onClose}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null
  });

  

  const handleChange = (e) => {
    const {name, value, files} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('jobId', job.id);
    formData.append('name', formData.name);
    formData.append('email', formData.email);
    formData.append('phone', formData.phone);
    formData.append('coverLetter', formData.coverLetter);
    formData.append('resume', formData.resume);

    try {
      await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });
      alert('Application submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-4'>Apply for {job.title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Cover Letter</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className='flex justify-between mt-6'>
            <button 
              type='button' 
              onClick={onClose}
              className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition'
            >
              Cancel
            </button>
            <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApplicationModal
