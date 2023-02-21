import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Project } from "../../../types/User";

interface ProjectCardProps {
  project: Partial<Project>;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  console.log(project);

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "10px",
        padding: "0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1A1B2F",
          color: "white",
          padding: "10px",
        }}
      >
        <CardHeader
          sx={{ padding: 0, marginBottom: "15px" }}
          avatar={<Avatar sx={{ width: 48, height: 48 }} src={project.img} />}
          title={
            <Typography variant="h6" sx={{ fontSize: "24px" }}>
              {project.title}
            </Typography>
          }
          subheader={
            <Typography
              variant="body2"
              sx={{
                span: {
                  color: project.status === "Open" ? "#1AFF06" : "red",
                },
              }}
            >
              Status: <span>{project.status}</span>
            </Typography>
          }
        />
        <Typography variant="body2">{project.description}</Typography>
      </Box>
      <CardContent>
        <Typography variant="h6">AvailableRoles</Typography>
        <Box
          sx={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {project.availableRoles?.map((role) => (
            <Typography
              key={role}
              variant="body2"
              sx={{
                backgroundColor: "#2C294D",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {role}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/projects/${project.id}`} style={{ textDecoration: "none" }}>
          <Button
            size="medium"
            sx={{
              backgroundColor: "#1A1B2F",
              color: "white",
              width: "100px",
              "&:hover": {
                backgroundColor: "#1A1B2F",
                color: "white",
              },
            }}
          >
            View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
