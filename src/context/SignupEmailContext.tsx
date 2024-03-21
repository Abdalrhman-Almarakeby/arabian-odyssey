import { useState, createContext, useContext } from "react";

type SignupEmailContextProps = {
  children: React.ReactNode;
};

type SignupEmailContext = {
  signupEmail: string;
  setSignupEmail: React.Dispatch<React.SetStateAction<string>>;
};

const SignupEmailContext = createContext<SignupEmailContext | null>(null);

export function useSignupEmail() {
  const context = useContext(SignupEmailContext);
  if (!context) throw new Error("useSignupEmail must be used within a SignupEmailContextProvider");

  return context;
}

export function SignupEmailContextProvider({ children }: SignupEmailContextProps) {
  const [signupEmail, setSignupEmail] = useState<string>("");

  return (
    <SignupEmailContext.Provider value={{ signupEmail, setSignupEmail }}>
      {children}
    </SignupEmailContext.Provider>
  );
}
