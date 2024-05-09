export const API_BASE = "https://groupbprojectbe-production.up.railway.app/";
export const PROJECT_API = `${API_BASE}project/`;
export const PROJECT_API_DETAIL = `${PROJECT_API}id/`;

export interface Project {
  id: string;
  project_name: string;
  project_image: string;
  description: string;
  target_amount: number;
  collected_amount: number;
  percentage: number;
  end_date: Date;
}

export const getProjectList = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${API_BASE}project`);

    if (response.status !== 200) {
      throw new Error("Failed to fetch Project data");
    }

    const data = await response.json();
    return data.projects as Project[];
  } catch (error) {
    // console.error('Error fetching Pokémon data:', (error as Error).message);
    throw error;
  }
};

export const getProjectDetails = async (
  projectId: string | string[] | undefined
): Promise<Project | null> => {
  try {
    const response = await fetch(`${API_BASE}project/${projectId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch Project details");
    }

    const data = await response.json();

    return {
      id: data.id,
      project_name: data.project_name,
      project_image: data.project_image,
      description: data.description,
      collected_amount: data.collected_amount,
      target_amount: data.target_amount,
      percentage: data.percentage,
      end_date: data.end_date,
    };
  } catch (error) {
    // console.error('Error fetching Pokémon details:', (error as Error).message);
    throw error;
  }
};
