import React, { Component } from 'react'
import {Typography, Paper, Grid, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import axios from 'axios';

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
    height: 200,
    borderRadius: 5,
    padding: 15
  },
  gridpapers1: {
    marginTop: theme.spacing(4)
  },
  Paperz: {
    backgroundColor: '#f1f1f1',
    height: 160,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center'
  }
});


class MutualFunds extends Component {
  state = {
    result: []
  }
  componentDidMount(){
    this.getAllMutualFunds()
  }
  getAllMutualFunds = () => {
    axios.get('/api/mutual-funds')
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
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, alignItems: 'center'}}>
              <Typography variant="h6"> Popular Funds </Typography>
              <Paper elevation={0} style={{color: "#1890ff", textAlign: 'center', padding:4, fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'bold', borderRadius: "50px" }}>SEE ALL MUTUAL FUNDS</Paper>
            </div>
            <Grid container spacing={3} className={classes.gridpapers1}>
            {items !== undefined ? (
                items.map((index) => (
                  <Grid item xs={3} key={index.name}>
                    <Link to={`/mutual-funds/${index.name}`} style={{textDecoration: "none"}}>
                      <Paper elevation={2} className={classes.sinPaper}>
                        <Typography>{index.name}</Typography>
                        <Typography>{index.returnsThree} <Typography style={{color: "#727272"}}>(3Y)</Typography></Typography>
                      </Paper>
                    </Link>
                  </Grid>
                ))
              ) : (<></>)}
            </Grid>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, alignItems: 'center'}}>
              <Typography variant="h6"> Handpicked Collections </Typography>
            </div>
            <Grid container spacing={3} style={{marginTop: 30}}>
              <Grid item xs={2}>
                <Typography style={{fontSize: 12}}>HIGH RETURNS</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography style={{fontSize: 12}}>TAX SAVINGS</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography style={{fontSize: 12}}>BETTER THAN FD</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography style={{fontSize: 12}}>TOP COMPANIES</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography style={{fontSize: 12}}>SIP With 200</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography style={{fontSize: 12}}>SECTOR BETS</Typography>
              </Grid>
            </Grid>
            <div style={{marginTop: 70}}>
              <Paper variant="outlined" className={classes.Paperz}>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Typography style={{fontSize: 12}}>IMPORT FUNDS</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography style={{fontSize: 12}}>SMART-SAVE</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography style={{fontSize: 12}}>SWITCH TO DIRECT</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography style={{fontSize: 12}}>LIVE NFO</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography style={{fontSize: 12}}>COMPARE FUNDS</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>

          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    )
  }
}
export default withStyles(useStyles)(MutualFunds);