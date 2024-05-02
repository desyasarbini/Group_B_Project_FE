import { Card, CardList, SearchField } from "@/components";
import { useState, useEffect } from "react";

const ProjectsPage = () => {
  // dummys array
  const projectsList = [
    {
      admin_id: 2,
      description: "test create project with admin",
      end_date: "Sun, 25 May 2025 00:00:00 GMT",
      id: 5,
      percentage: " 12.50%",
      project_image:
        "https://i.ibb.co/34d6Bnb/original-dd6082722592575153842caf2b0cdc40.png",
      project_name: "testing lagi",
      target_amount: "2000000.00",
    },
    {
      admin_id: 2,
      description: "test create project with admin",
      end_date: "Sun, 25 May 2025 00:00:00 GMT",
      id: 5,
      percentage: " 12.50%",
      project_image:
        "https://i.ibb.co/34d6Bnb/original-dd6082722592575153842caf2b0cdc40.png",
      project_name: "testing lagi",
      target_amount: "2000000.00",
    },
    {
      admin_id: 2,
      description: "Bantuan Bencana Alam Gunung Erupsi",
      end_date: "Sun, 25 May 2025 00:00:00 GMT",
      id: 6,
      percentage: " 3.00%",
      project_image: "https://i.ibb.co/Y8DnG8q/Gunung-Api-Ruang-Meletus.jpg",
      project_name: "Bantuan Gunung Erupsi",
      target_amount: "20000000.00",
    },
    {
      admin_id: 2,
      description: "Bantuan Bencana Alam Gunung Erupsi",
      end_date: "Sun, 25 May 2025 00:00:00 GMT",
      id: 6,
      percentage: " 3.00%",
      project_image: "https://i.ibb.co/Y8DnG8q/Gunung-Api-Ruang-Meletus.jpg",
      project_name: "Bantuan Gunung Erupsi",
      target_amount: "20000000.00",
    },
    {
      admin_id: 2,
      description: "Bantuan Bencana Alam Gunung Erupsi",
      end_date: "Sun, 25 May 2025 00:00:00 GMT",
      id: 6,
      percentage: " 3.00%",
      project_image: "https://i.ibb.co/Y8DnG8q/Gunung-Api-Ruang-Meletus.jpg",
      project_name: "Bantuan Gunung Erupsi",
      target_amount: "20000000.00",
    },
    {
      admin_id: 2,
      description: "Bantuan Bencana Alam Gunung Erupsi",
      end_date: "Sun, 25 May 2025 00:00:00 GMT",
      id: 6,
      percentage: " 3.00%",
      project_image: "https://i.ibb.co/Y8DnG8q/Gunung-Api-Ruang-Meletus.jpg",
      project_name: "Bantuan Gunung Erupsi",
      target_amount: "20000000.00",
    },
    {
      admin_id: 2,
      description: "Bantuan Bencana Alam Gunung Erupsi",
      end_date: "Sun, 25 May 2025 00:00:00 GMT",
      id: 6,
      percentage: " 3.00%",
      project_image: "https://i.ibb.co/Y8DnG8q/Gunung-Api-Ruang-Meletus.jpg",
      project_name: "Bantuan Gunung Erupsi",
      target_amount: "20000000.00",
    },
    {
      admin_id: 2,
      description: "Bantuan Bencana Alam Gunung Erupsi",
      end_date: "Sun, 25 May 2025 00:00:00 GMT",
      id: 6,
      percentage: " 3.00%",
      project_image: "https://i.ibb.co/Y8DnG8q/Gunung-Api-Ruang-Meletus.jpg",
      project_name: "Bantuan Gunung Erupsi",
      target_amount: "20000000.00",
    },
  ];

  const [searchField, setSearchField] = useState("");
  const [projects, setProjects] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredProjects = projectsList.filter((project) => {
    return project.project_name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <Card className="">
      <SearchField handleChange={handleChange} />
      <CardList filteredProjects={filteredProjects} />
    </Card>
  );
};

export default ProjectsPage;
