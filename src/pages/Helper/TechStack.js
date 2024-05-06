import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Filter option by tech stack used in the company
const TechStack = () => {
  return (
    <div>
      {/* Material UI Component */}
        <Autocomplete
            multiple
            id="tags-outlined"
            options={techStacks}
            sx={{ width: 150 }}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} label="Tech Stack" />
            )}
          />
    </div>
  )
}

// options available to select
const techStacks = [
    { title: "ReactJs"},
    { title: "Redux"},
    { title: "CSS"},
    { title: "The Dark Knight"},
    { title: "Material UI"}
  ];

export default TechStack