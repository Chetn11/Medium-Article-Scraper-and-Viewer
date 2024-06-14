import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setError(true);
      setHelperText("please enter input");
    } else {
      setError(false);
      setHelperText("");

      console.log("Searching for:", searchTerm);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() !== "") {
      setError(false);
      setHelperText("");
    }
  };
  return (
    <div>
      <Box m={4}>
        <TextField
          variant="outlined"
          placeholder="Search Article......"
          value={searchTerm}
          onChange={handleInputChange}
          error={error}
          helperText={helperText}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="button"
                  aria-label="search"
                  sx={{ p: 1 }}
                  onClick={handleSearch}
                >
                  <SearchIcon sx={{ fontSize: 24 }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ width: "100%", maxWidth: 400 }}
        />
      </Box>
    </div>
  );
}

export default HomePage;
