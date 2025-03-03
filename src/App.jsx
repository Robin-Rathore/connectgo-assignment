import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeamChallengesDashboard from './pages/TeamChallengesDashboard';
import TeamProfilePage from './components/TeamProfilePage';
import UserProfilePage from './components/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="">
         <Routes>
          <Route path="/" element={<TeamChallengesDashboard />} />
          <Route path="/teams" element={<TeamChallengesDashboard />} />
          <Route path="/team-profile" element={<TeamProfilePage />} /> 
          <Route path="/user-profile" element={<UserProfilePage />} /> 
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>  
      </main>
    </div>
  );
};

export default App;