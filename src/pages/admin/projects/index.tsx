import { getProjectList, Project } from "@/lib/ProjectApi";
import React, { useEffect, useState } from "react";
import { API_BASE } from "@/lib/ProjectApi";
import { Card, ListProject, SearchField } from "@/components";
import { useRouter } from "next/router";

const ProjectList = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const navigate = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredProjects = projects?.filter((project) => {
      return project.project_name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredProjects(newFilteredProjects);
  }, [projects, searchField]);

  useEffect(() => {
    const getProject = async () => {
      const get = await getProjectList();
      setProjects(get);
    };
    getProject();
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      return token;
    };
    const isAuth = checkAuth();
    if (!isAuth) {
      navigate.push(`${API_BASE}/admin/login`);
    }
  }, []);

  return (
    <Card className="flex flex-auto flex-col justify-items-center align-center gap-5">
      <SearchField
        title="List of Project"
        handleChange={handleChange}
        value=""
        name="Cari Project"
        type="text"
        isButton={true}
      />
      <Card className="container mx-auto w-full">
        <ListProject filteredProjects={filteredProjects} />
      </Card>
    </Card>
  );
};

export default ProjectList;
