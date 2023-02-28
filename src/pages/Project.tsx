import { Box, Stack } from "@mui/system";
import img from "../features/projects/assets/img_placeholder.png";
import profileIcon from "../features/projects/assets/profile.webp";
import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Roles from "../features/projects/components/Roles";
import { Button } from "@mui/joy";
import { useParams } from "react-router";
import useProject from "../features/projects/hooks/useProject";

export default function Project() {
  const { projectId } = useParams();
  // TODO handle errors
  const [data, pending] = useProject(projectId as string);
  const handleRequest = (role: string) => {
    alert("requested");
  };

  const handleBack = () => {
    window.history.back();
  };

  if (pending)
    return (
      <CircularProgress
        // color="secondary"
        size={"5em"}
      />
    );

  return (
    <Stack
      direction={"column"}
      color="white"
      px={10}
      // alignItems={"flex-start"}
    >
      <Button onClick={handleBack}>
        <FontAwesomeIcon
          icon={faLongArrowLeft}
          size={"2x"}
          style={{
            margin: "1em 0",
            marginRight: "100%",
          }}
        />
      </Button>

      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}>
        <Stack
          direction={"column"}
          alignItems={"flex-start"}>
          <Stack
            direction={"row"}
            gap={3}>
            <img
              src={img}
              alt=""
              height={400}
            />
            <Stack
              direction={"column"}
              alignItems="flex-start"
              gap={1}>
              <Typography
                variant="h2"
                fontWeight={400}>
                Project Hub
              </Typography>
              {/* <Typography variant="body2">3 days ago</Typography> */}
              <Typography variant="h5">Status: In Progress</Typography>
            </Stack>
          </Stack>
          <Typography
            py={2}
            variant="body1"
            maxWidth={"50vw"}>
            Restream is looking for a Frontend Engineer to join us to solve complex challenges and build world-class
            products. In this role, you will build new features, develop the user interface of our product, and improve
            the reliability of our systems as we scale. You will collaborate with a team of Engineers to drive processes
            and enhance user-facing features. You understand the importance of simplicity and reliability, and you
            calculate the impact of every decision on each. We believe in small teams where each member contributes
            significant value. Responsibilities Develop and maintain features in Restream web services Design and
            implement the UI and business logic necessary to support new and existing features Partner with the UI
            designer to build great and user-friendly UI/UX Give and receive code review feedback with the team Maintain
            a pulse on emerging technologies and discover hidden opportunities in our environment Requirements A
            scrappy, entrepreneurial attitude that gets high-quality projects done quickly Solid knowledge of
            JavaScript, TypeScript, and newer specifications of ECMAScript (Experience with other programming languages
            is a plus) Expert in React and its major state management systems. Experience with other front-end
            frameworks is a plus Experience with CSS preprocessors like LESS or SASS Basic backend skills: Node.JS,
            building REST APIs, working with relational or NoSQL databases Comfortable working with TypeScript, MobX,
            AWS, Linux, Docker, Kubernetes, continuous deployment workflow Self-directed, analytical, and work well in a
            team environment Restream is the #1 solution for creating professional live videos and streaming them to all
            social networks at once. Millions of people around the world use Restream to reach, engage, and monetize
            their audiences. We’re a small and diverse group of dreamers who make technology work for the world. We
            believe that a small but highly driven and focused team can make a lasting impact in any area.
          </Typography>
        </Stack>
        {/* roles container */}
        <Roles handleRequest={handleRequest} />
      </Stack>
    </Stack>
  );
}
