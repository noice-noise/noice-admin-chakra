import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../views/Dashboard';

/**
 * TODO add public and protected route handling
 */
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
