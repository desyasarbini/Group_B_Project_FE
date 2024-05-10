import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

interface Props {
  filteredProjects: any[];
}

const ListProject = ({ filteredProjects }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="center">Project Name</TableCell>
            <TableCell align="center">Percentage(%)</TableCell>
            <TableCell align="center">Target Amount(Rp)</TableCell>
            <TableCell align="center">Image URL</TableCell>
            <TableCell align="center">Action</TableCell>
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
              <TableCell align="right">{project.project_name}</TableCell>
              <TableCell align="right">{project.percentage}</TableCell>
              <TableCell align="right">{project.target_amount}</TableCell>
              <TableCell align="right">{project.project_image}</TableCell>
              <TableCell align="right" className="flex flex-autp flex-row">
                <Button>Edit</Button>

                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListProject;
