import React, { Component } from 'react';
import {Typography, Grid, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

class MutualFundsinv extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={5} style={{alignSelf: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Grid item xs={2}>
            {/* <AttachMoney style={{color: "#00d09c", height: 240, width: 240, marginTop: 80}} /> */}
          </Grid>
          <Grid item xs={4}>
              <Typography style={{marginTop: 80, color: "#464646", fontWeight: 500, fontSize: 24}}>No investments yet?</Typography>
              <Typography style={{marginTop: 20, color: "#727272"}}>Start your investment journey today. Your future self will thankyou for this day.</Typography>
              <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', height: 50, width: 250, marginTop: 30}}>start investing</Button>
              <Typography style={{marginTop: 30, color: "#727272"}}>Already invested somewhere?</Typography>
              <Typography><Link to="/track" style={{marginTop: 20, color: "#1890ff", textDecoration: "none"}}>TRACK FUNDS</Link></Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MutualFundsinv;
