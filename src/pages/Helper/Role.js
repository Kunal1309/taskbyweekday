import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Filter option by desired role in the company
const Role = () => {
  return (
    <div>
      {/* Material UI Component */}
        <Autocomplete
            multiple
            id="tags-outlined"
            options={topRoles}
            sx={{ width: 150 }}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => <TextField {...params} label="Roles" />}
          />
    </div>
  )
}

// options available to select
const topRoles = [
    { title: "frontend"},
    { title: "ios"},
    { title: "android"},
    { title: "tech lead"},
    { title: "backend"},
    { title: "android"}
  ];

export default Role