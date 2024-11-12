import React from 'react';
import StudentList from './components/StudentList';

import './App.css'; // Import the new CSS file

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Student Management System</h1>
      <StudentList />
      
    </div>
  );
}

export default App;
