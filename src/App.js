import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import ResponsivePage from './ResponsiveRouter';
import  GlobalStyles from './styles/components/GlobalStyles'

const App = () => {
  return (
    <TaskProvider>
       <>
       <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<ResponsivePage />} />
        </Routes>
      </Router>
      </>
    </TaskProvider>
  );
};

export default App;

