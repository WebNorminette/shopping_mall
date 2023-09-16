import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthContextProvider } from './context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
