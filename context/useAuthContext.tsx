import { ReactNode, createContext, useContext, useState } from "react";
import { supabase } from "../utils/supabase";

export default interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  signup: (
    email: string,
    Password: string,
    confirmpassword: string
  ) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signup = async (
    email: string,
    password: string,
    comfirmPassword: string
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) throw error; //if signup athaurisation fail
  };

  return (
    <AuthContext.Provider value={{ signup, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context == undefined) throw new Error("must be inside the provider");

  return context;
};
