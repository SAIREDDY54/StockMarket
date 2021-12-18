import React, { Component } from 'react';
import {Typography, Paper, Grid, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider} from '@material-ui/core'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {AddCircleOutline, BarChart, Announcement} from '@material-ui/icons';

const useStyles = (theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  indexPaper: {
    height: 80,
    borderRadius: 5,
    padding: 15
  },
  sinPaper: {
    height: 120,
    borderRadius: 5,
    padding: 20
  },
  gridpapers1: {
    marginTop: theme.spacing(4)
  }
});

class FixedDeposits extends Component {
  state = {
    result: []
  }
  componentDidMount(){
    this.getAllFDs()
  }
  getAllFDs = () => {
    axios.get('/api/fixed-deposits')
      .then((res) => {
        console.log(res.data)
        this.setState({result: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    let items = [...this.state.result]
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TableContainer component={Paper} style={{marginTop: 40}}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Rate of Interest</TableCell>
                    <TableCell align="right">Time period</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items !== undefined ? (
                    items.map((index) => (
                      <TableRow key={index.name}>
                        <TableCell component="th" scope="row">
                          <Link to={`/fixed-deposits/${index.name}`}>{index.name}</Link> 
                        </TableCell>
                        <TableCell align="right">{index.percentage}</TableCell>
                        <TableCell align="right">1 year</TableCell>
                      </TableRow>
                    ))
                  ) : (<></>)}
                </TableBody>
              </Table>
            </TableContainer>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 70, alignItems: 'center'}}>
              <Typography variant="h6">About Fixed Deposits </Typography>
            </div>
            <Typography style={{marginTop: 30}}>High interest rate Fixed Deposits are a safe investment instrument which also generate good returns. When you invest in a fixed deposit at Groww, the money is safely deposited into an RBI backed bank or NBFC. All bank deposits are also backed by deposit insurance up to ₹5 Lakh provided by DICGC, a wholly owned subsidiary of the RBI.</Typography>
            <Grid container spacing={10} style={{marginTop: 80}}>
              <Grid item xs={5}>
                <Typography style={{fontWeight: 500, color: '#464646'}}>100% secure</Typography>
                <Typography style={{color: '#727272'}}>Bank fDs are insured upto &#8377;5 lakhs by RBI</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography style={{fontWeight: 500, color: '#464646'}}>High Interest Rates</Typography>
                <Typography style={{color: '#727272'}}>We have tenures with the highest interest rates in the market</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography style={{fontWeight: 500, color: '#464646'}}>Zero Hassle</Typography>
                <Typography style={{color: '#727272'}}>There is no hassle of opening a new savings account</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography style={{fontWeight: 500, color: '#464646'}}>Multiple Banks</Typography>
                <Typography style={{color: '#727272'}}>More options at your disposal to choose FDs</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography style={{fontWeight: 500, color: '#464646'}}>No Hidden charges</Typography>
                <Typography style={{color: '#727272'}}>Invest and track your deposits for free</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(FixedDeposits);
