import { faPlusCircle, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Stack, Typography } from "@mui/material";
import { IRole } from "../hooks/useProject";
import React from "react";
import profileImg from "../assets/profile.webp";
interface RolesInterface {
  handleRequest: (role: string) => void;
  roles: IRole[] | null;
}
export default function Roles({ handleRequest, roles }: RolesInterface) {
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
      m={2}>
      <Typography
        variant="h3"
        fontWeight={400}
        color="black">
        Roles
      </Typography>
      {roles &&
        roles.map((role, index) => (
          <Stack
            key={index}
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
            bgcolor={"#6B4FA9"}
            borderRadius={5}
            px={3}
            py={2}
            gap={2}
            minWidth={"300px"}
            maxWidth={"350px"}>
            {!role.user && (
              <Button
                onClick={() => handleRequest("role")}
                sx={{
                  // display: 'flex',
                  // justifyContent: 'flex-start',
                  p: 0,
                  color: "white",
                }}>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  size={"3x"}
                />
              </Button>
            )}
            {role.user && (
              <img
              aria-label={`icon of user ${role.user.username}`}
                src={role.user.avatarUrl || profileImg}
                height={32}
                style={{
                  borderRadius: "100%",
                }}
              />
            )}
            <Stack
              direction={"column"}
              justifyContent="center"
              alignItems={"center"}
              flexGrow={1}>
              <Typography variant="h6">{role.roleName}</Typography>
              {role.description && (
                <Typography
                  variant="caption"
                  textAlign={"center"}>
                  {role.description}
                </Typography>
              )}
            </Stack>
          </Stack>
        ))}
    </Stack>
  );
}
