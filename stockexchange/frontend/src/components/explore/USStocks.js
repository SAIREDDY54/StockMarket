import React, { Component } from 'react';
import {Typography, Paper, Grid, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import axios from 'axios';
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
    height: 160,
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

class USStocks extends Component {
  state = {
    result: []
  }
  componentDidMount(){
    this.getAllUSStocks()
  }
  getAllUSStocks = () => {
    axios.get('/api/usstocks')
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
    const value = 23;
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={8}>
          {/* Top by Market Cap  */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, alignItems: 'center'}}>
              <Typography variant="h6"> Top by Market Cap </Typography>
              <Paper elevation={0} style={{backgroundColor: "#E3F2FD", color: "#1890ff", textAlign: 'center', padding:4, fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'bold', borderRadius: "50px" }}>ALL STOCKS</Paper>
            </div>
            <Grid container spacing={3} className={classes.gridpapers1}>
              {items !== undefined ? (
                items.map((index) => (
                  <Grid item xs={3} key={index.name}>
                    <Link to={`/usstocks/${index.name}`} style={{textDecoration: "none"}}>
                      <Paper elevation={2} className={classes.sinPaper}>
                        <Typography>{index.name}</Typography>
                        <Typography>{index.price}</Typography>
                      </Paper>
                    </Link>
                  </Grid>
                ))
              ) : (<></>)}
            </Grid>
            {/* ETFs */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, alignItems: 'center'}}>
              <Typography variant="h6"> ETFs </Typography>
              <Paper elevation={0} style={{backgroundColor: "#E3F2FD", color: "#1890ff", textAlign: 'center', padding:4, fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'bold', borderRadius: "50px" }}>ALL ETFS</Paper>
            </div>
            <Grid container spacing={3} className={classes.gridpapers1}>
              <Grid item xs={6}>
                <Paper elevation={2} className={classes.indexPaper}>nifty</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={2} className={classes.indexPaper}>nifty</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={2} className={classes.indexPaper}>nifty</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={2} className={classes.indexPaper}>nifty</Paper>
              </Grid>
            </Grid>
            {/* top sectors */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, alignItems: 'center'}}>
              <Typography variant="h6"> Sectors </Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 30, }}>
              <Chip variant="outlined" label={<Typography>Banking | {value}</Typography>} />
              <Chip variant="outlined" label={<Typography>Energy | {value}</Typography>} />
              <Chip variant="outlined" label={<Typography>Healthcare | {value}</Typography>} />
              <Chip variant="outlined" label={<Typography>FMCG | {value}</Typography>} />
              <Chip variant="outlined" label={<Typography>Automobile | {value}</Typography>} />
              <Chip variant="outlined" label={<Typography>Tele-Communication | {value}</Typography>} />
              <Chip variant="outlined" label={<Typography>Media & Entertainment | {value}</Typography>} />
            </div>
          </Grid>

          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(USStocks);
