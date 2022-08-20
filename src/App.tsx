import { AppProvider } from './providers/AppProvider';
import { AppRoutes } from './routes/AppRoutes';

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
