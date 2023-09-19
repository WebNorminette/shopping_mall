import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/common/Navbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthContextProvider } from "./context/AuthContext";
import { ReactNode } from "react";
import Footer from "./components/common/Footer";

interface AppProps {
  children?: ReactNode;
}

const queryClient = new QueryClient();

function App({ children }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        {children}
        <Outlet />
        <Footer />
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
