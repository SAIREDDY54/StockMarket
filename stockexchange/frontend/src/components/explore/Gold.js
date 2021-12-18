import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {Typography, Grid, Box, Paper, Button, Container, LinearProgress, Divider, Breadcrumbs, TextField, Input, InputAdornment} from '@material-ui/core'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { BookmarkBorderOutlined, Share } from '@material-ui/icons'

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
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

class Gold extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <div style={{marginTop: 40}}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <div className={classes.top}>
                <Typography style={{fontSize: 24, fontWeight: 500}}>Digital Gold</Typography>
                <Typography style={{fontSize: 28, fontWeight: "bold"}}>52.33%</Typography>
              </div>
              <Container style={{height: 400}}></Container>
              <Typography variant="h6" style={{marginTop: 80}}>Digital Gold</Typography>
              <Typography style={{marginTop: 20}}> Digital Gold is a convenient and cost-effective way of purchasing gold online. Groww offers Digital Gold of 99.90% purity that you can purchase, sell, and accumulate anytime at the live market rate, starting at Rs 10. Stored in 100% secured vaults and insured, you can view your purchased Digital Gold in your gold locker, which is a digital version for your holdings. 
                <br></br>
                <br></br>
                To provide you pure and top-quality bullion, We had partnered with Augmont Goldtech Pvt. Ltd.— an integrated precious metals management company.
              </Typography>
              <Grid container spacing={10} style={{marginTop: 80}}>
                <Grid item xs={5}>
                  <Typography style={{fontWeight: 500, color: '#464646'}}>Buy small</Typography>
                  <Typography style={{color: '#727272'}}>Purchase gold in fractions for as low as Rs 10</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography style={{fontWeight: 500, color: '#464646'}}>Sell anytime</Typography>
                  <Typography style={{color: '#727272'}}>Liquidate your Digital Gold and get your money in 2 days</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography style={{fontWeight: 500, color: '#464646'}}>100% secure</Typography>
                  <Typography style={{color: '#727272'}}>Stored in secured vaults and insured (verified by an independent trustee)</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography style={{fontWeight: 500, color: '#464646'}}>Transparent</Typography>
                  <Typography style={{color: '#727272'}}>Live market price tracking and zero making charges</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography style={{fontWeight: 500, color: '#464646'}}>Diversify</Typography>
                  <Typography style={{color: '#727272'}}>Balance your portfolio with Digital Gold to reduce risk concentration</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography style={{fontWeight: 500, color: '#464646'}}>Exchange</Typography>
                  <Typography style={{color: '#727272'}}>Convert your Digital Gold to physical gold in the form of coins/bars/jewellery (coming soon)</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </div>
        
        
      </div>
    );
  }
}

export default withStyles(useStyles)(Gold);
