import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav';
import AddStudentDetail from './AddStudent';

function StudentSearch() {
  const [students, setStudents] = useState([]); 
  const [searchName, setSearchName] = useState('');
  const [filterGrade, setFilterGrade] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://practice1-o1e4.onrender.com/');
        setStudents(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredStudents = students
    .filter(student =>
      student.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter(student => !filterGrade || student.grade === filterGrade)
    .sort((a, b) => (sortOrder === 'asc' ? a.score - b.score : b.score - a.score));

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <select
        value={filterGrade}
        onChange={(e) => setFilterGrade(e.target.value)}
      >
        <option value="">All Grades</option>
        <option value="A">Grade A</option>
        <option value="B">Grade B</option>
        <option value="C">Grade C</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <ul>
        {filteredStudents.map(student => (
          <li key={student._id}>
            {student.name} - {student.grade} - {student.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddStudent() {
  return <div>Add Student Page</div>;
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<StudentSearch />} />
        <Route path="/add-student" element={<AddStudentDetail />} />
      </Routes>
    </Router>
  );
}

export default App;