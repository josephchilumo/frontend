import React, { useState } from 'react'

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    title:"",
    specialty:"",
    bio:"",
    image:"",
    awards: "",
    featured:false,
  });

  const handleChange = (e) => {
    setFormData(prev =>({ 
      ...prev,
      [e.target.name]: e.target.value,  
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTeamData = {
      id: Date.now(),
      ...formData,
      bio: formData.bio.split("\n"),
    }

    setTeamData(prev => [...prev, newTeamData]);

    setFormData({
      name: "",
      title: "",
      specialty: "",
      bio:"",
      image:"",
      awards:"",
      featured:false,
    });
    setShowForm(false);
  };

  const deleteTeamData = (id) => {
    setTeamData(prev=>
      prev.filter(pub => pub.id !==id)
    );
  };
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Team</h1>
      <button onClick={()=>setShowForm(!showForm)}
      className='px-6 py-2 bg-[#C6A75E] text-gray-900 rounded shadow'
      >
        {showForm? "Close Form":"Add New Team Member"}
      </button>

      {/*fORM FOR TEAM DATA   */}
      {showForm &&(
        <form onSubmit={handleSubmit}
        className='bg-white p-6 rounded-xl shadow space-y-4'>
          <input
             type='text'
             name='name'
             placeholder='Name'
             value={formData.name}
             onChange={handleChange}
             className='w-full border p-2 rounded'
             required
          />
          <input
            type='text'
            name='title'
            placeholder='Title!'
            value={formData.title}
            onChange={handleChange}
            className='w-full border p-2 rounded'

          />
          <input
            type='text'
            name='specialty'
            placeholder='Specialty'
            value={formData.specialty}
            onChange={handleChange}
            className='w-full border p-2 rounded'
            required
          />
          <textarea
            name='bio'
            placeholder='bio'
            value={formData.bio}
            onChange={handleChange}
            className='w-full border p-2 rounded'
            rows='6'
          />
          <input
            type='text'
            name='image'
            placeholder='Image URL'
            value={formData.image}
            onChange={handleChange}
            className='w-full border p-2 rounded'
            required
          />
          <input
            type='text'
            name='awards'
            placeholder='award'
            value={formData.awards}
            onChange={handleChange}
            className='w-full border p-2 rounded'
            
          />
          <label className="flex items-center gap-2 text-gray-600">
             <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={(e) =>
               setFormData(prev => ({
                ...prev,
                featured: e.target.checked
                }))
              }
          />
          Featured Member
          </label>
          <button
          type='submit'
          className='px-6 py-2 mt-3 bg-green-600 text-white rounded' 
          >
            Save Member 
          </button>
        </form>
      )}
      <table className='min-w-full bg-white rounded-xl shadow overflow-hidden'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='px-6 py-3 text-left'>Name</th>
            <th className='px-6 py-3 text-left'>Title</th>
            <th className='px-6 py-3 text-left'>Specialty</th>
            <th className='px-6 py-3 text-left'>Bio</th>
            <th className='px-6 py-3 text-left'>Image</th>
            <th className='px-6 py-3 text-left'>Award</th>
            <th className='px-6 py-3 text-left'>Featured</th>
            <th className='px-6 py-3 text-left'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamData.length === 0 ? (
            <tr>
              <td colSpan="7" className='text-center py-6 text-gray-500'>
                No team member added yet.
              </td>
            </tr>
          ):(
            teamData.map((member)=> (
              <tr key={member.id} className='border-b hover:bg-gray-50'>
                <td className='px-6 py-3'>{member.name}</td>
                <td className='px-6 py-3'>{member.title}</td>
                <td className='px-6 py-3'>{member.specialty}</td>
                <td className='px-6 py-3'>
                  {Array.isArray(member.bio)
                    ? member.bio.map((line, index)=> (
                      <p key={index}>{line}</p>
                    ))
                    : member.bio}
                </td>
                <td className='px-6 py-3'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-16 h-16 object-cover rounded'
                  />
                </td>
                <td className='px-6 py-3'>{member.awards}</td>
                <td className='px-6 py-3'>
                  {member.featured ? "Yes": "No"}
                </td>
                <td className='px-6 py-3' >
                  <button onClick={()=> deleteTeamData(member.id)} className='text-red-500'>Delete</button>
                </td>
              </tr>
            ))
          )}
        
        </tbody>

      </table>
      
    </div>
  )
}

export default Team
