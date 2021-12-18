import React, { Component } from 'react';
import {TextField, Grid} from '@material-ui/core';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {compose} from 'redux'

const useStyles = (theme) => ({
  root: {
    padding: 30,
    '& .MuiTextField-root': {
      width: '35ch',
    },
  },
})

class BasicDetails extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  render() {
    const { classes } = this.props;
    const {user} = this.props.auth
    return (
      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <TextField
              id="username"
              label="USERNAME"
              defaultValue={user ? `${user.username}` : ""}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="pan"
              label="PAN"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="dob"
              label="DATE OF BIRTH (DD/MM/YYYY)"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="gender"
              label="GENDER"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="phone"
              label="MOBILE NUMBER"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="marital"
              label="MARITAL STATUS"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="email"
              label="EMAIL"
              defaultValue={user ? `${user.email}` : ""}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default compose(withStyles(useStyles), connect(mapStateToProps))(BasicDetails);
