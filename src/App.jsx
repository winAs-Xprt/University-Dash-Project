import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import UserManagement from './components/User/UserManagement';
import ApplicationPage from './components/Application/ApplicationPage';
import ExamsPage from './components/Exams/ExamsPage';
import CollegePage from './components/College/CollegePage';
import CoursePage from './components/Courses/CoursePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/applications" element={<ApplicationPage />} />
              <Route path="/exams" element={<ExamsPage />} />
              <Route path="/colleges" element={<CollegePage />} />
              <Route path="/courses" element={<CoursePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;