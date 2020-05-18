import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import AddPlayers from './AddPlayers'
// import Strokes from './Strokes'


function createData(hole, currentlow, currentwinner, currentties) {
  return { hole, currentlow, currentwinner, currentties };
}

const rows = [
  createData(1, "Bruce Wayne"),
  createData(2),
  createData(3),
  createData(4, "Gilbert Mendez"),
  createData(5),
  createData(6, "", "Buddy Guy"),
  createData(7),
  createData(8),
  createData(9),
  createData(10),
  createData(11, "", "Brittany Gillaspie"),
  createData(12),
  createData(13),
  createData(14, "", "", "Gilbert Mendez  Buddy Guy"),
  createData(15),
  createData(16),
  createData(17),
  createData(18),
];

class Scorecard extends Component {  
  
constructor(props) {
    super(props);
  this.state = {
    count: 1
    }
   }
 
render(){
  return (
    
    <Container className="simple-table" component={Paper} style={{ height: "1000px", width: "950px", backgroundColor: "lightgray"}}>
      <Table cellspacing="10" cellpadding="10" rules="all">
        <TableHead style={{backgroundColor: "#96B95B"}}>
          <TableRow>
            <TableCell>Hole</TableCell>
            <TableCell align="center">Current Low</TableCell>
            <TableCell align="center">Current Winner</TableCell>
            <TableCell align="center">Current Ties</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.hole} value={this.createData}>
              <TableCell component="th" scope="row">
                {row.hole}
              </TableCell>
              <TableCell align="center">{row.currentlow}</TableCell>
              <TableCell align="center">{row.currentwinner}</TableCell>
              <TableCell align="center">{row.currentties}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
}
   
export default Scorecard