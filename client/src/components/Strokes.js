import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import Scorecard from './Scorecard'
import '../css/strokes.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Strokes = (props) => {
 const classes = useStyles();
 let [count, setCount] = useState(0)  
 const [hole, setHole] = useState()
 const [player, setPlayer] = useState()
 

 const increment = () => {
    setCount(++count);
  }

  const decrement = () => {
    setCount(--count);
  }

  const handleChange = (event) => {
    setHole(event.target.value);
  };

  const handleSubmit = (event) => {
    setPlayer(event.target.value);
  };

   
  return (
    <>
    <div>
    <Container maxWidth="sm" className="menu-container">
      <FormControl className={classes.formControl}>
        <InputLabel id="menu-label" style={{ fontSize: "large"}}> Select Hole</InputLabel>
        <Select
          labelId="menu-label"
          id="menu-simple-select"
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
      </Container>
    </div>
    <Container className="counter-main-container" style={{ backgroundColor: "#1F2343", height: "100%", width: "100%", color: "white"}}
    value={player}
    onChange={handleSubmit}
    >
    <h3>Player:{player}</h3>
    <Container>
    <div className="counter-button-container"> 
      <div> <button className="decrement" onClick={decrement}><h2>-</h2></button></div> 
      <span> <h2>{count}</h2></span>
      <div> <button className="increment" onClick={increment}><h2>+</h2></button></div>
    </div>
    <div>
      <button className="save-button"
      type="submit">
      Save      
      </button>
    </div>
    </Container>
    <Scorecard />
    </Container>
    </>
    );
    
}
export default Strokes