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
  selectedProjectID?: string;
  setSelectedProjectID?: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  auth?: string;
  setAuth?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const defaultValue: Context = {
  admin: undefined,
  setAdmin: undefined,
  selectedProjectID: undefined,
  setSelectedProjectID: undefined,
  auth: undefined,
  setAuth: undefined,
};

export const AppContext = createContext(defaultValue);

const AppProvider = ({ children }: Props) => {
  const [admin, setAdmin] = useState<Admin>();
  const [selectedProjectID, setSelectedProjectID] = useState<string>();
  const [auth, setAuth] = useState<string>();

  const value = {
    admin,
    setAdmin,
    selectedProjectID,
    setSelectedProjectID,
    auth,
    setAuth,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
