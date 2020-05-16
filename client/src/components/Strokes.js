import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PlayerList from './PlayerList'
import '../css/strokes.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Strokes = (props) => {

 let [count, setCount] = useState(0)  
 const [hole, setHole] = useState([{
   id: 1,
   players: [{
     name: 'Steve',
     strokes: 0,
   }],
   winner: ''
 }
])

 const classes = useStyles();

 const increment = () => {
    setCount(++count);
  }

  const decrement = () => {
    setCount(--count);
  }

    
  
  const handleChange = (event) => {
    setHole(event.target.value);
  };

   
  return (
    <>
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Hole</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={hole}
          onChange={handleChange}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
          <MenuItem value={7}>Seven</MenuItem>
          <MenuItem value={8}>Eight</MenuItem>
          <MenuItem value={9}>Nine</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={11}>Eleven</MenuItem>
          <MenuItem value={12}>Twelve</MenuItem>
          <MenuItem value={13}>Thirteen</MenuItem>
          <MenuItem value={14}>Fourteen</MenuItem>
          <MenuItem value={15}>Fifteen</MenuItem>
          <MenuItem value={16}>Sixteen</MenuItem>
          <MenuItem value={17}>Seventeen</MenuItem>
          <MenuItem value={18}>Eighteen</MenuItem>
        </Select>
      </FormControl>
    </div>

  
    <div className="counter"> 
    <span className="player-name">
      <PlayerList />
      </span>            
      <div> <button className="increment" onClick={increment}><h2>+</h2></button></div> 
      <span> <h2>{count}</h2></span>
      <div> <button className="decrement" onClick={decrement}><h2>-</h2></button></div>
    </div>
    </>
    );
  
}
export default Strokes