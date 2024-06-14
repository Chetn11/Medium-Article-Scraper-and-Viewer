import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const[loader,setLoader]=useState(false);


  const fetchData=async ()=>{
    try {
      setLoader(true);
      const res=await axios.get("")
      console.log(res);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setError(true);
      setHelperText("please enter input");
    } else {
      setError(false);
      fetchData();
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
    <div style={{backgroundImage:""}}>
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
                  <SearchIcon sx={{ fontSize: 24, color:"blue" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ width: "100%", maxWidth: 400 }}
        />
        {loader?<Box>
          <img src="loading2.gif" alt="loading"/>
        </Box>:" "}
      </Box>
    </div>
  );
}

export default HomePage;
