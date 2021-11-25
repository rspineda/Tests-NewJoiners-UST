import React, {useState} from 'react';
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
  {Name:'Santiago Laberinto',id:1},
  {Name:'Gustavo Dazarin',id:2},
  {Name:'Paul Paupin',id:3},
  {Name:'Ronald Piripin',id:4},
  {Name:'Felipe Martelin',id:5},
  {Name:'Joselito Menganito',id:6},
  {Name:'Jose Francisco PalosColegas',id:7},
  {Name:'Eduardo Poziacaso',id:8},
  {Name:'Hari babulino',id:9},
  {Name:'Hassan Sullilla',id:10},
];


function getStyles(name, personName, theme) {
  return {

    fontWeight:
    personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({displayedName,setDisplayedName,getNewPersonName}){
  const theme = useTheme();
  const [labelNameDisplayed, setLabelNameDisplayed] = useState('Name');
  const [personName, setNewPersonName] = useState(''); 
  
  const selectNameHandler = (event) => {
      setNewPersonName(event.target.value);
      setDisplayedName(event.target.value);
      setLabelNameDisplayed('');
    };

    getNewPersonName(personName);

  return (
    <div>
      <FormControl sx={{ bgcolor: 'primary.main', m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-filled-label">{labelNameDisplayed}</InputLabel>
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
              key={name.Name}
              value={name.Name}
              style={getStyles(name.Name, personName, theme)}
            >
              {name.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}