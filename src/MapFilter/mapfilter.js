import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  divContent: {
   textAlign:'left'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonField: {
    minWidth: 120,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div  className={classes.divContent}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Fleet</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1}>Fleet 1</MenuItem>
          <MenuItem value={2}>Fleet 2</MenuItem>
          <MenuItem value={3}>Fleet 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Unit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Unit 1</MenuItem>
          <MenuItem value={20}>Unit 2</MenuItem>
          <MenuItem value={30}>Unit 3</MenuItem>
        </Select>
      </FormControl>
     
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Alert</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
           <MenuItem value={10}>Alert 1</MenuItem>
          <MenuItem value={20}>Alert 2</MenuItem>
          <MenuItem value={30}>Alert 3</MenuItem>
        </Select>
      </FormControl>
     
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Warning</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Warning 1</MenuItem>
          <MenuItem value={20}>Warning 2</MenuItem>
          <MenuItem value={30}>Warning 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.buttonField}><Button variant="contained">AREA</Button></FormControl>
      <FormControl className={classes.buttonField}><Button variant="contained">NEAR</Button></FormControl>
     
     
    </div>
  );
}
