import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Santiago Laberinto',
  'Gustavo Dazarin',
  'Paul Paupin',
  'Ronald Piripin',
  'Felipe Martelin',
  'Joselito Menganito',
  'Jose Francisco PalosColegas',
  'Eduardo Poziacaso',
  'Hari babulino',
  'Hassan Sullilla',
];

function getStyles(name, personName, theme) {
  return {

    fontWeight:
    personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({displayedName,setDisplayedName,getNewPersonName}) {
  const theme = useTheme();
  const [labelDisplayed, setLabelDisplayed] = React.useState('Name');
  const [personName, setNewPersonName] = React.useState([]);

  getNewPersonName(personName);
  
    const selectNameHandler = (event) => {

      setNewPersonName(event.target.value);
      setDisplayedName(event.target.value);
      setLabelDisplayed('');
    };

  return (
    <div>
      <FormControl sx={{ bgcolor: 'primary.main', m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-filled-label">{labelDisplayed}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={personName}
          onChange={selectNameHandler}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}