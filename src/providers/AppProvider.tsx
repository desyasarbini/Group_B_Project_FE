import React, {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Context {
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

interface Props {
  children: ReactNode;
}

// interface ProjectsDetail {
//   admin_id: number;
//   description: string;
//   end_date: string;
//   id: number;
//   percentage: string;
//   project_image: string;
//   project_name: string;
//   target_amount: string;
// }
// interface Context {
//   projects: ProjectsDetail | undefined;
//   setProjects?: React.Dispatch<React.SetStateAction<ProjectsDetail>>;
// }

const defaultValue: Context = {
  user: undefined,
  setUser: () => {}, // Provide a default function, it will be overridden by the actual implementation
};

export const AppContext = createContext(defaultValue);

const ContexProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>();
  const value = { user, setUser };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContexProvider;
