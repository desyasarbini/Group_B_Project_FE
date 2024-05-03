// import { ReactNode, createContext, useState } from "react";

// interface Props {
//   children: ReactNode;
// }

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

// const defaultValue: Context = {
//   projects: undefined,
//   setProjects: undefined,
// };

// const initialValue = {
//   admin_id: "",
//   description: "",
//   end_date: "",
//   id: "",
//   percentage: "",
//   project_image: "",
//   project_name: "",
//   target_amount: "",
// };

// export const AppContext = createContext(defaultValue);

// export const AppContextProvider = ({ children }: Props) => {
//   const [project, setProject] = useState<Context>(initialValue);
//   const value = { project, setProject };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };
