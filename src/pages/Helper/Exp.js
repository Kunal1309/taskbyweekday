import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Filter option by year of experience in the company
const Exp = () => {
  return (
    <div>
      {/* Material UI Component */}
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={minExp}
            sx={{ width: 150 }}
            renderInput={(params) => (
              <TextField {...params} label="Experience" />
            )}
          />
    </div>
  )
}

// options available to select
const minExp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default Exp