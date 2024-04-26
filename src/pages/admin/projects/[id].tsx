import { useRouter } from "next/router";

const SelectProjectById = () => {
  const router = useRouter();

  return <div>Ini adalah halaman Admin project by id: {router.query.id}</div>;
};

export default SelectProjectById;
