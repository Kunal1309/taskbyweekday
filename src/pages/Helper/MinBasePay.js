import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Filter option by minimum base pay in the company
const MinBasePay = () => {
  return (
    <div>
      {/* Material UI Component */}
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={minPay}
            sx={{ width: 150 }}
            renderInput={(params) => (
              <TextField {...params} label="Min. Base Pay" />
            )}
          />
    </div>
  )
}

// options available to select
const minPay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default MinBasePay