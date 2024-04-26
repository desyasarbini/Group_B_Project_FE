import { useRouter } from "next/router";

const ProjectById = () => {
  const router = useRouter();

  return <div>Ini adalah halaman project by id: {router.query.id}</div>;
};

export default ProjectById;
