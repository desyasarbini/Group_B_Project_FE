import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { PROJECT_API } from "@/lib/ProjectApi";
import axios from "axios";

interface Props {
  filteredProjects: any[];
}

const ListProject = ({ filteredProjects }: Props) => {
  const navigate = useRouter();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="center">Project Name</TableCell>
            <TableCell align="center">Percentage(%)</TableCell>
            <TableCell align="center">Target Amount(Rp)</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center" colSpan={3}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProjects.map((project) => (
            <TableRow
              key={project.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {project.id}
              </TableCell>
              <TableCell align="left">{project.project_name}</TableCell>
              <TableCell align="center">{project.percentage}</TableCell>
              <TableCell align="right">{project.target_amount}</TableCell>
              <TableCell align="right">
                <img
                  src={project.project_image}
                  alt={project.project_name}
                  width={200}
                  height={200}
                />
              </TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => {
                    navigate.push(`/admin/projects/edit/${project.id}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  onClick={async () => {
                    const token = localStorage.getItem("token");
                    console.log(token);
                    if (!token) {
                      throw new Error("Token not found. Please login.");
                    }
                    await axios.post(`${PROJECT_API}project/delete/12`, {
                      headers: { Authorization: `Bearer ${token}` },
                    });
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListProject;
