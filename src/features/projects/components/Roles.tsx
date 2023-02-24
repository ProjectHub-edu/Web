import { faPlusCircle, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
interface IRoles {
  handleRequest: (role: string) => void;
}
export default function Roles({handleRequest}: IRoles) {
  return (
    <Stack
      direction={"column"}
      alignItems="center"
      color={"white"}
      gap={1}
      bgcolor={"white"}
      px={2}
      py={1}
      borderRadius={5}
      m={2}
      >
      <Typography
        variant="h3"
        fontWeight={400}
        color="black">
        Roles
      </Typography>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        bgcolor={"#6B4FA9"}
        borderRadius={20}
        px={3}
        py={0.5}
        gap={2}
        minWidth={"300px"}
        maxWidth={"350px"}>
        <Button
          onClick={() => handleRequest('role')}
          sx={{
            // display: 'flex',
            // justifyContent: 'flex-start',
            p: 0,
            color: "white",
          }}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            size={"2x"}
          />
        </Button>
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
          flexGrow={1}>
          <Typography variant="h5">Front End</Typography>
          <Typography
            variant="caption"
            textAlign={"center"}>
            JavaScript, Figma, Git
          </Typography>
        </Stack>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        bgcolor={"#6B4FA9"}
        borderRadius={20}
        px={3}
        py={0.5}
        gap={2}
        minWidth={"300px"}
        maxWidth={"350px"}>
        <Button
          sx={{
            display: "flex",
            // width: 'fit-content',
            // justifyContent: 'flex-start',
            p: 0,
            color: "white",
          }}>
          <FontAwesomeIcon
            icon={faUserCircle}
            size="2x"
          />
        </Button>
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
          flexGrow={1}>
          <Typography variant="h5">Front End</Typography>
          <Typography
            variant="caption"
            textAlign={"center"}>
            JavaScript, Figma, Git
          </Typography>
        </Stack>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        bgcolor={"#6B4FA9"}
        borderRadius={20}
        px={3}
        py={0.5}
        gap={2}
        minWidth={"300px"}
        maxWidth={"350px"}>
        <Button
          sx={{
            display: "flex",
            // width: 'fit-content',
            // justifyContent: 'flex-start',
            p: 0,
            color: "white",
          }}>
          <FontAwesomeIcon
            icon={faUserCircle}
            size="2x"
          />
        </Button>
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
          flexGrow={1}>
          <Typography variant="h5">Front End</Typography>
          <Typography
            variant="caption"
            textAlign={"center"}>
            JavaScript, Figma, Git
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
