import { Box, Stack } from "@mui/system";
import img from "../features/projects/assets/img_placeholder.png";
import { CircularProgress, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Roles from "../features/projects/components/Roles";
import { Button } from "@mui/joy";
import { useParams } from "react-router";
import useProject from "../features/projects/hooks/useProject";

export default function Project() {
  const { projectId } = useParams();
  // TODO handle errors
  const postQuery = useProject(projectId as string);

  const handleRequest = (role: string) => {
    alert("requested");
  };

  const handleBack = () => {
    window.history.back();
  };

  if (postQuery.isLoading)
    return (
      <Box
        width={"100vw"}
        height={"70vh"}
        alignItems="center"
        justifyContent="center"
        display={"flex"}>
        <CircularProgress
          // color="secondary"
          size={"5em"}
        />
      </Box>
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
              src={postQuery.data?.projectImgUrl || img}
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
                {postQuery.data?.title}
              </Typography>
              {/* <Typography variant="body2">3 days ago</Typography> */}
              <Typography variant="h5">Status: {postQuery.data?.status}</Typography>
            </Stack>
          </Stack>
          <Typography
            py={2}
            variant="body1"
            maxWidth={"50vw"}>
            {postQuery.data?.description}
          </Typography>
        </Stack>
        {/* roles container */}
        <Roles
          roles={postQuery.data!.roles}
          handleRequest={handleRequest}
        />
      </Stack>
    </Stack>
  );
}
