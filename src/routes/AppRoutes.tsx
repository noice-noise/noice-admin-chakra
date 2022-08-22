import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../views/Dashboard';
import { Settings } from '../views/Settings';

/**
 * TODO add public and protected route handling
 */
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
