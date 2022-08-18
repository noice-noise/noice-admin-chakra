import { AppProvider } from './providers/AppProvider';
import { AppRoutes } from './routes/AppRoutes';

const App = () => {
  console.log(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
