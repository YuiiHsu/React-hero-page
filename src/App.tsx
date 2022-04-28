import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HeroList from './pages/HeroList';
import HeroProfile from './pages/HeroProfile';
import { path } from './routes/path';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.heroes} element={<HeroList />}></Route>
        <Route path={path.heroProfile} element={<HeroProfile />}></Route>
        <Route path="/" element={<Navigate replace to={path.heroes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
