import { AppProvider } from './providers/AppProvider';
import { ThemeContextProvider } from './providers/ThemeContextProvider';
import { AppRoutes } from './routes/AppRoutes';

const App = () => {
  return (
    <ThemeContextProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ThemeContextProvider>
  );
};

export default App;
