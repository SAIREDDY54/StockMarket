import React, { Component } from 'react';
import { Typography, Grid, Paper, Button, Divider } from '@material-ui/core'
import { MoreHoriz, VerifiedUser } from '@material-ui/icons'
import Header from '../layout/Header'

class BankAutopay extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid container spacing={3}>
          <Grid item xs>
            {/* <Paper>xs</Paper> */}
          </Grid>
          <Grid item xs={4}>
            <div style={{marginTop: 40}}>
              <Typography>Bank Account Details</Typography>
              <Paper style={{marginTop: 15}}>
                <div style={{display: 'flex', justifyContent: "space-around", border: "1px solid #E3F2FD", padding: "30px 0px"}}>
                  <Typography>BANK NAME</Typography>
                  <Typography>XXXXXXX9485</Typography>
                  <MoreHoriz />
                </div>
              </Paper>
              <Button variant="outlined" style={{color: '#1890ff', height: 50, width: 250, alignSelf: 'center', marginTop: 60}}>ADD ANOTHER BANK</Button>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{marginTop: 78}}>
              <Paper style={{padding: 10}}>
                <div style={{display: 'flex', justifyContent: "space-between", padding: 10}}>
                  <Typography>BANK NAME</Typography>
                  <Typography style={{color: '#1890ff'}}>primary bank</Typography>
                </div>
                <div style={{display: 'flex', justifyContent: "space-between", padding: 10}}>
                  <Typography style={{color: '#727272'}}>STATUS</Typography>
                  <Typography><VerifiedUser color="#1890ff"/> Verified</Typography>
                </div>
                <div style={{display: 'flex', justifyContent: "space-between", padding: 10}}>
                  <Typography style={{color: '#727272'}}>ACCOUNT NUMBER</Typography>
                  <Typography>XXXXXXX9485</Typography>
                </div>
                <div style={{display: 'flex', justifyContent: "space-between", padding: 10}}>
                  <Typography style={{color: '#727272'}}>IFSC CODE</Typography>
                  <Typography>HFVHB871723</Typography>
                </div>
                <div style={{display: 'flex', justifyContent: "space-between", padding: 10}}>
                  <Typography style={{color: '#727272'}}>BRANCH NAME</Typography>
                  <Typography>CITY NAME</Typography>
                </div>
                <Divider style={{margin: 15}} />
                <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', height: 50, width: 250, margin: 20}}>SETUP AUTOPAY</Button>
              </Paper>
            </div>
          </Grid>
          <Grid item xs>
            {/* <Paper>xs</Paper> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BankAutopay;
