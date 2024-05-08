import { useSearchParams } from "next/navigation";
import { getProjectList, Project } from '@/lib/ProjectApi';
import React, { useEffect, useState } from 'react';
import Input from "@mui/material/Input";

interface ProjectProps{
  projectList: Project[];
}

const ProjectList: React.FC<ProjectProps> = ({projectList}: ProjectProps) => {
  const searchParam = useSearchParams();
  const [SearchProject, setSearchProject] = useState('')
  console.log(projectList)
  const filteredProjectList = projectList.filter((project) => 
    project.project_name.toLowerCase().includes(SearchProject.toLowerCase())
  )
  const [ProjectList, setProjectList] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjectList = async() => {
      try {
        const data = await getProjectList();
        setProjectList(data);
      } catch (error) {
        console.error('Error fetching Project list:', (error as Error).message);
      }
    }
    fetchProjectList();
  }, [])

  return(
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">search Project</h3>
        <div className="grid w-full justify-center gap-1.5">
          <h6>Project Name</h6>
          <Input
            type="text"
            value={SearchProject}
            id="projectName"
            placeholder="project name etc ..."
            onChange={(e) => setSearchProject(e.target.value)}
            className="border-blue-950"
          />
        </div>
        <h3 className="text-3xl text-center py-6">Project List</h3>
      </div>

      <div className="mb-32 grid text-center justify-center px-10 lg:mb-0 lg:grid-cols-3 lg:text-left">
        {filteredProjectList.map((project) => (
        <div key={project.project_name} defaultValue={project.project_name} />
        ))}
      </div>
    </> 
  )
};

export default ProjectList;
