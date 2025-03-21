import React, { useState } from 'react';
import axios from 'axios';

function AddStudentDetail() {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [score, setScore] = useState('');

//   const [data, setData] = useState({});
//   const handleChange=(e)=>{
//      setData({
//          ...data,
//          [e.target.name]:e.target.value
//      })

//   }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://practice1-o1e4.onrender.com/', {
        name,
        grade,
        score,
      });
      console.log('Student added:', response.data);
      // Clear the form
      setName('');
      setGrade('');
      setScore('');
    } catch (error) {
      console.error('Error adding student:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Grade:</label>
          <input
           name="grade"
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Score:</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentDetail;