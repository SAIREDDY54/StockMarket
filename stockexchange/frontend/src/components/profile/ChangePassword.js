import React, { Component } from 'react';
import {TextField, Grid, Button, Typography} from '@material-ui/core';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {compose} from 'redux'

const useStyles = (theme) => ({
  root: {
    
    margin: theme.spacing(3),
    padding: 30,
    '& .MuiTextField-root': {
      width: '35ch',
      marginBottom: 30
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  }
})

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#0e9170'),
    background: '#1890ff',
    width: '20ch',
    padding: 10
  },
}))(Button);

class ChangePassword extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.form}>
          <TextField
            id="newpassword"
            label="New Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="confirm-new-password"
            label="Confirm New Password"
            type="password"
            autoComplete="current-password"
          />
          <ColorButton 
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <Typography style={{ textDecoration: 'none', color: '#fff', fontSize: 14}}>Update Password</Typography>
          </ColorButton >
        </form>
        
      </div>
    );
  }
}

export default withStyles(useStyles)(ChangePassword);
