import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App'; 

import Dashboard from '../features/dashboard/Dashboard';
import UserData from '../features/userData/UserData';
import Help from '../features/help/Help';
import Profile from '../features/profile/Profile';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="dados" element={<UserData />} />
        <Route path="ajuda" element={<Help />} />
        <Route path="perfil" element={<Profile />} />
      </Route>
    </Routes>
  );
}
