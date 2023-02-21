import { Box, Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onChange, value }: SearchProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 600,
          backgroundColor: "#1A1B2F",
        }}
      >
        <IconButton
          type="button"
          sx={{ p: "10px", color: "white" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, color: "white" }}
          placeholder="Search for projects"
          value={value}
          onChange={onChange}
        />
      </Paper>
    </Box>
  );
};

export default Search;
