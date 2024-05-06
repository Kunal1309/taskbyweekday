import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Filter option by number of Employee in the company
const Employee = () => {
  return (
    <div>
      {/* Material UI Component */}
        <Autocomplete
            multiple
            id="tags-outlined"
            options={noEmployee}
            sx={{ width: 150 }}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} label="No Of Employees" />
            )}
          />
    </div>
  )
}

// options available to select
const noEmployee = [
    { title: "21-50"},
    { title: "51-200"},
    { title: "201-500"},
    { title: "501-1000"},
    { title: "1001-10000"},
    { title: "10001-100000"}
  ];

export default Employee