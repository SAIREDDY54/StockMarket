import React, { Component } from 'react'
import {Typography, Paper, Grid, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider} from '@material-ui/core'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import {AddCircleOutline, BarChart, Announcement} from '@material-ui/icons';
import axios from 'axios';
import {Link} from 'react-router-dom'

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
  }
});

class Stocks extends Component {
  state = {
    result: []
  }
  componentDidMount(){
    this.getAllStocks()
  }
  getAllStocks = () => {
    axios.get('/api/stocks')
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
            {/* index */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, alignItems: 'center'}}>
              <Typography variant="h6"> Index </Typography>
              <Paper elevation={0} style={{backgroundColor: "#E3F2FD", color: "#1890ff", textAlign: 'center', padding:4, fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'bold', borderRadius: "50px" }}>SCREENER</Paper>
            </div>
            <Grid container spacing={3} className={classes.gridpapers1}>
              <Grid item xs={6}>
                <Paper elevation={2} className={classes.indexPaper}>nifty</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={2} className={classes.indexPaper}>nifty</Paper>
              </Grid>
            </Grid>
            {/* stocks in news */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, alignItems: 'center'}}>
              <Typography variant="h6"> Stocks in News </Typography>
              <Paper elevation={0} style={{backgroundColor: "#E3F2FD", color: "#1890ff", textAlign: 'center', padding:4, fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'bold', borderRadius: "50px" }}>NEWS</Paper>
            </div>
            <Grid container spacing={3} className={classes.gridpapers1}>
              {items !== undefined ? (
                items.map((index) => (
                  <Grid item xs={3} key={index.name}>
                    <Link to={`/stocks/${index.name}`} style={{textDecoration: "none"}}>
                      <Paper elevation={2} className={classes.sinPaper}>
                        <Typography>{index.name}</Typography>
                        <Typography>{index.price}</Typography>
                      </Paper>
                    </Link>
                  </Grid>
                ))
              ) : (<></>)}
            </Grid>
            {/* top gainers */}
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 40, alignItems: 'center'}}>
              <Typography variant="h6"> Top Gainers </Typography>
              <Typography style={{paddingLeft: 10}}>NIFTY100</Typography>
            </div>
            <Grid container spacing={3} className={classes.gridpapers1}>
              <Grid item xs={3}>
                <Paper elevation={2} className={classes.sinPaper}>nifty</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={2} className={classes.sinPaper}>nifty</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={2} className={classes.sinPaper}>nifty</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={2} className={classes.sinPaper}>nifty</Paper>
              </Grid>
            </Grid>
            {/* top losers */}
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 40, alignItems: 'center'}}>
              <Typography variant="h6"> Top Losers </Typography>
              <Typography style={{paddingLeft: 10}}>NIFTY100</Typography>
            </div>
            <Grid container spacing={3} className={classes.gridpapers1}>
              <Grid item xs={3}>
                <Paper elevation={2} className={classes.sinPaper}>nifty</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={2} className={classes.sinPaper}>nifty</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={2} className={classes.sinPaper}>nifty</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={2} className={classes.sinPaper}>nifty</Paper>
              </Grid>
            </Grid>
            {/* top sectors */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, alignItems: 'center'}}>
              <Typography variant="h6"> Top Sectors </Typography>
              <Paper elevation={0} style={{backgroundColor: "#E3F2FD", color: "#1890ff", textAlign: 'center', padding:4, fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'bold', borderRadius: "50px" }}>SEE ALL</Paper>
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
            {/* top by market cap */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, alignItems: 'center'}}>
              <Typography variant="h6"> Top by Market Cap </Typography>
              <Paper elevation={0} style={{backgroundColor: "#E3F2FD", color: "#1890ff", textAlign: 'center', padding:4, fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'bold', borderRadius: "50px" }}>SEE ALL</Paper>
            </div>
            <TableMarketCap />
          </Grid>

          <Grid item xs={4}>
            <Paper style={{padding: 30}}>
              <div style={{display: 'flex', flexDirection: "row", alignItems: "center"}}>
                <BarChart />
                <div style={{padding: 5, paddingLeft: 30}}>
                  <Typography>Future & Options</Typography>
                  <Typography style={{color: "#727272"}}>High risk markets</Typography>
                </div>
              </div>
              <Divider />
              <div style={{display: 'flex', flexDirection: "row", alignItems: "center"}}>
                <Announcement />
                <div style={{padding: 5, paddingLeft: 30}}>
                  <Typography>Intital Public Offerings - IPO</Typography>
                </div>
              </div>
              
            </Paper>
          </Grid>
        </Grid>
        
      </div>
    )
  }
}
export default withStyles(useStyles)(Stocks);

const TableMarketCap = () => {
  const rows = [
    {Company: 'Reliance Industries', Graph: '', 'Market Price': 10569},
    {Company: 'TCS', Graph: '', 'Market Price': 10569},
    {Company: 'HDFC Bank', Graph: '', 'Market Price': 10569},
    {Company: 'ITC', Graph: '', 'Market Price': 10569},
  ]
  return (
    <TableContainer component={Paper} style={{marginTop: 30}}>
      <Table style={{minWidth: 650}}>
        <TableHead style={{backgroundColor: '#f1f1f1'}}>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="right">Graph</TableCell>
            <TableCell align="right">Market Price</TableCell>
            <TableCell align="right">Watchlist</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((index) => (
            <TableRow key={index.Company}>
                <TableCell component="th" scope="row">{index.Company}</TableCell>
                <TableCell align="right">{index.Graph}</TableCell>
                <TableCell align="right">{index['Market Price']}</TableCell>
                <TableCell align="right"><AddCircleOutline style={{color: "#1890ff"}} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}