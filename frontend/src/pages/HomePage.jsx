import {
  Box,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const[loader,setLoader]=useState(false);
  const[data,setData]=useState([])
  

  // console.log(searchTerm);
 console.log(data)
  const fetchData=async ()=>{
    try {
     
      const res=await axios.get("http://localhost:5000/articles")
      setData(res.data)
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  }

  const postData=async ()=>{
    setLoader(true)
    await axios.post("http://localhost:5000/scrape",{value:searchTerm});
    fetchData();
  }
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setError(true);
      setHelperText("please enter input");
    } else {
      setError(false);
      setHelperText("");
      postData();
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() !== "") {
      setError(false);
      setHelperText("");
    }
  };

  // console.log(data)
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
        {loader?<Box
         bgcolor="none">
          <img src="loading2.gif" alt="loading"/>
        </Box>:""}
        {loader?"":<Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        {data?.map((ele,i)=>(
            <ArticleCard data={ele} key={ele.id}/>
          ))}
        </Box>}
        
      </Box>
    </div>
  );
}

export default HomePage;
