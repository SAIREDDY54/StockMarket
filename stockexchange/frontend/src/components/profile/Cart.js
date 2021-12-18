import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core'
import Header from '../layout/Header'

class Cart extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <Typography style={{marginTop: 80, fontSize: 26, color: "#727272"}}>Uh-oh! Your cart is empty</Typography>
          <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', height: 50, width: 250, marginTop: 80}}>Add funds to Cart</Button>
        </div>
      </div>
    );
  }
}

export default Cart;
