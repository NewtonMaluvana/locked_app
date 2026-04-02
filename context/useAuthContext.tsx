import { ReactNode, createContext, useContext, useState } from "react";
import { supabase } from "../utils/supabase";

export default interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthContextType {
  Error: string | null;
  user: User | null;
  userConfirmed: boolean;
  signup: (
    email: string,
    Password: string,
    confirmpassword: string
  ) => Promise<void>;
  signin: (email: string, Password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [Error, setError] = useState<string | null>(null);
  const [userConfirmed, setuserConfirmed] = useState(false);
  const signup = async (
    email: string,
    password: string,
    comfirmPassword: string
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      if (error.message.includes("already registered")) {
        setError("An account with this email already exists.");
      } else if (error.message.includes("invalid")) {
        setError("Please enter a valid email address.");
      } else {
        setError(error.message);
      }
      return;
    } //if signup athaurisation fail
  };

  //login user function
  const signin = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      if (error.message === "Invalid login credentials") {
        setError("No account found with this email or password is incorrect.");
        return;
      } else {
        setError(error.message);
        return;
      }
    }

    if (data.user) {
      if (data.user.email_confirmed_at) {
        console.log("im in");
        setuserConfirmed(true);
      }
    } //if signup athaurisation fail
  };

  //check if the user is email verified?
  // const useRequireConfirmedUser = async () => {
  //   const { data, error } = await supabase.auth.getUser();

  //   if (error) {
  //     throw error;
  //   }

  //   if (data.user) {
  //     if (data.user.confirmed_at) {
  //       setuserConfirmed(true);
  //     }
  //   }
  // };

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        Error,
        signin,
        userConfirmed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context == undefined) throw new Error("must be inside the provider");

  return context;
};
