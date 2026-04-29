import { useState } from 'react';
import axios from 'axios';

function Addjob() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const jobData = {
      title,
      body: description, 
      location,
      salary,
      userId: 1, 
    };

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        jobData
      );
      console.log('Job added:', response.data);
      alert('Job added successfully!');
      
      setTitle('');
      setDescription('');
      setLocation('');
      setSalary('');
    } catch (error) {
      console.error('Error adding job:', error);
      alert('Failed to add job.');
    }
  };

  return (
    <>
      <h1>Add Job</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Job Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Job Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
        <button type="submit">Add Job</button>
      </form>
    </>
  );
}

export default Addjob;