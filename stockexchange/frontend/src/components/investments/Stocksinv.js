import React, { Component } from 'react';
import {Typography, Grid, Button} from '@material-ui/core'
class Stocksinv extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={5} style={{alignSelf: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Grid item xs={2}>
            {/* <AttachMoney style={{color: "#00d09c", height: 240, width: 240, marginTop: 80}} /> */}
          </Grid>
          <Grid item xs={4}>
              <Typography style={{marginTop: 80, color: "#464646", fontWeight: 500, fontSize: 24}}>Introducing Stocks</Typography>
              <Typography style={{marginTop: 20, color: "#727272"}}>Investing in stocks will never be the same again</Typography>
              <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', height: 50, width: 250, marginTop: 20}}>try it out</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Stocksinv;
