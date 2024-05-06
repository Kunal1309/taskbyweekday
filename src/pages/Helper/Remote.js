import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Filter option by Remote in the company
const Remote = () => {
  return (
    <div>
      {/* Material UI Component */}
        <Autocomplete
            multiple
            id="tags-outlined"
            options={top100Films}
            sx={{ width: 150 }}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => <TextField {...params} label="Remote" />}
          />
    </div>
  )
}

// options available to select
const top100Films = [
    { title: "remote"},
    { title: "delhi ncr"},
    { title: "mumbai" },
    { title: "chennai" }
  ];

export default Remote