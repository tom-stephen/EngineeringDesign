import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import DesignPage from './pages/DesignPage';
import CommonMisusePage from './pages/CommonMisusePage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<DesignPage />} />
          <Route path="/misuse" element={<CommonMisusePage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
