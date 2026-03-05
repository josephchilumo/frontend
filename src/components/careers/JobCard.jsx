import React from 'react'

const JobCard = ({job, onApply}) => {
  return (
    <div className='bg-white p-8 rounded-xl shadow-md'>
      <h3 className='text-xl font-bold mb-2'>{job.title}</h3>
      <p className='text-gray-600 mb-4'>{job.location} | {job.type}</p>

      <div className='mt-4'>
        <h4 className='font-semibold'>Responsibilities</h4>
        <ul className='list-disc list-inside text-gray-700 mb-4'>
          {job.responsibilities.map((resp, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h4 className='font-semibold'>Qualifications</h4>
        <ul className='list-disc list-inside text-gray-700 mb-4'>
          {job.qualifications.map((qual, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button 
          onClick={onApply} 
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
        >
          Apply Now
        </button>
      </div>
      
    </div>
  )
}

export default JobCard
