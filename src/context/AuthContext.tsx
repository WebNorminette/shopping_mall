import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface User {}
interface AuthContextType {
  user: User | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState();

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
