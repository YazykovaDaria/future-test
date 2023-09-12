import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography, MenuItem } from '@mui/material';

type Props = {
  inputValue: string;
  title: string;
  onChange: (event: SelectChangeEvent) => void;
  values: string[];
};

function SelectInput({ inputValue, title, onChange, values }: Props) {
  return (
    <div>
      <Typography>{title}</Typography>
      <Select
        data-testid="select"
        sx={{ width: '200px' }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={inputValue}
        onChange={onChange}
      >
        {values.map((value) => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectInput;
