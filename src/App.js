import React from 'react';
import StudentList from './Components/StudentList';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Student Management System</h1>
    <p className="developer-info">Developed by P Bhavya Varsha</p>
      <StudentList />
    </div>
  );
}

export default App;
