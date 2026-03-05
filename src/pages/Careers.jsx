
import { useEffect,useState } from 'react'
import JobCard from '../components/careers/JobCard'
import TaskModal from '../components/careers/TaskModal'
import ApplicationModal from '../components/careers/ApplicationModal'

const Careers = () => {
  const [jobs,setJobs] = useState([]);
  const [selectedJob,setSelectedJob] = useState(null);

  useEffect(() => {
    // Fetch jobs from API
    fetch('/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='bg-gray-900 text-white py-24 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Join Our Team</h1>
        <p className='text-lg text-gray-300'>Explore exciting career opportunities with us.</p>
      </div>
      <div className='max-w-6xl mx-auto py-16 px-6 space-y-6'>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} onSelect={() => setSelectedJob(job)} />
        ))}
      </div>
      {selectedJob && (
        <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
      
    </div>
  )
}

export default Careers
