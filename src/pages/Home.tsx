import { Box, Container } from "@mui/material";
import { ChangeEvent, useState } from "react";
import ProjectCard from "../features/projects/components/ProjectCard";
import Search from "../features/projects/components/Search";
import { Project } from "../types/User";

const projects: Partial<Project>[] = [
  {
    id: 1,
    img: "https://picsum.photos/200/300",
    title: "Project 1",
    description:
      "ProjectHub is a service where people can team up to implement joint projects according to project topic, technology, direction and skill level.",
    status: "Open",
    availableRoles: ["Frontend", "Backend"],
  },
  {
    id: 2,
    img: "https://picsum.photos/200/300",
    title: "Project 1",
    description:
      "ProjectHub is a service where people can team up to implement joint projects according to project topic, technology, direction and skill level.",
    status: "Open",
    availableRoles: ["Frontend", "Backend"],
  },
  {
    id: 3,
    img: "https://picsum.photos/200/300",
    title: "Project 1",
    description:
      "ProjectHub is a service where people can team up to implement joint projects according to project topic, technology, direction and skill level.",
    status: "Open",
    availableRoles: ["Frontend", "Backend"],
  },
  {
    id: 3,
    img: "https://picsum.photos/200/300",
    title: "Project 1",
    description:
      "ProjectHub is a service where people can team up to implement joint projects according to project topic, technology, direction and skill level.",
    status: "Open",
    availableRoles: ["Frontend", "Backend"],
  },
  {
    id: 3,
    img: "https://picsum.photos/200/300",
    title: "Project 1",
    description:
      "ProjectHub is a service where people can team up to implement joint projects according to project topic, technology, direction and skill level.",
    status: "Open",
    availableRoles: ["Frontend", "Backend"],
  },
  {
    id: 3,
    img: "https://picsum.photos/200/300",
    title: "Project 1",
    description:
      "ProjectHub is a service where people can team up to implement joint projects according to project topic, technology, direction and skill level.",
    status: "Open",
    availableRoles: ["Frontend", "Backend"],
  },
];

export default function Home() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Box
      sx={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        paddingTop: "50px",
        backgroundColor: "#6D6487",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Search value={search} onChange={handleChange} />
        <Box
          sx={{
            width: "100%",
            marginTop: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
