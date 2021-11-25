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

const tasks = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20'
];

function getStyles(name, personName, theme) {
  return {

    fontWeight:
    personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({setDisplayedTask,getNewPersonTask}){
  const theme = useTheme();
  const [labelTaskDisplayed, setLabelTaskDisplayed] = useState('Task');
  const [newDisplayedTask, setNewDisplayedTask] = useState('');
  
    const selectTaskHandler = (eventTask) =>{
      setNewDisplayedTask(eventTask.target.value);
      setDisplayedTask(eventTask.target.value);
      setLabelTaskDisplayed('');
    }

    getNewPersonTask(newDisplayedTask);

  return (
    <div> 
      <FormControl sx={{ bgcolor: 'primary.main', m: 1, width: 300 }}>
      <InputLabel id="demo-simple-select-filled-label">{labelTaskDisplayed}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={newDisplayedTask}
          onChange={selectTaskHandler}
          input={<OutlinedInput label="Task" />}
          MenuProps={MenuProps}
        >
          {tasks.map((task) => (
            <MenuItem
              key={task}
              value={task}
              style={getStyles(task, newDisplayedTask, theme)}
            >
              {task}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}