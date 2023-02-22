import { Box, Typography } from "@mui/material";

interface AvailableRolesProps {
  availableRoles: string[];
}

const AvailableRoles = ({ availableRoles }: AvailableRolesProps) => {
    const roleStyles = {
      backgroundColor: "#2C294D",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
    };

  return (
    <Box
      sx={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {availableRoles.length > 0 ? (
        availableRoles.map((role) => (
          <Typography key={role} variant="body2" sx={roleStyles}>
            {role}
          </Typography>
        ))
      ) : (
        <Typography variant="body2" sx={roleStyles}>
          No roles available
        </Typography>
      )}
    </Box>
  );
};

export default AvailableRoles;
