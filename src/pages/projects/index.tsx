import { Card, CardList, SearchField } from "@/components";
import { useEffect, useState } from "react";
import { getProjectList, Project } from "@/lib/ProjectApi";

const ProjectsPage = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // console.log(getProject);

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

  return (
    <Card className="">
      <SearchField
        handleChange={handleChange}
        value=""
        name="Cari Project"
        type="text"
      />
      <CardList filteredProjects={filteredProjects} />
    </Card>
  );
};

export default ProjectsPage;
