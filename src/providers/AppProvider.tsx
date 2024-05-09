import { ReactNode, createContext, useState } from "react";

interface Admin {
  email: string;
  name: string;
}

interface Props {
  children: ReactNode;
}

interface Context {
  admin?: Admin;
  setAdmin?: React.Dispatch<React.SetStateAction<Admin | undefined>>;
}

const defaultValue: Context = {
  admin: undefined,
  setAdmin: undefined,
};

export const AppContext = createContext(defaultValue);

const AppProvider = ({ children }: Props) => {
  const [admin, setAdmin] = useState<Admin>();
  const value = { admin, setAdmin };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
