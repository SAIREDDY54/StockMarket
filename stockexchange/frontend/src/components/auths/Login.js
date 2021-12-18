import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography, FormControlLabel, Checkbox, Grid, Box, Snackbar, Paper, CssBaseline, Avatar } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'
import axios from 'axios';
// import MuiAlert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import compose from 'recompose/compose'
import {compose} from 'redux'

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#0e9170'),
    background: 'linear-gradient(152deg, #2193b0 0%, #6dd5ed 100%)',
    '&:hover': {
      backgroundColor: '#1a866b96',
    },
  },
}))(Button);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#1890ff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#1890ff',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#1890ff',
      },
    },
  },
})(TextField);

const useStyles = (theme) => ({
  root: {
    height: "100vh",
    flexGrow: 1,
    display: 'flex'
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    // margin: theme.spacing(8, 4),
    margin: "0px 30px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100vh"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    alignSelf: 'center'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if(this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    const {classes} = this.props;
    const { username, password } = this.state;
    return (
      <div style={{height: "100%"}}>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={8} className={classes.image} >
            <Typography style={{color: '#fff', fontSize: 44, paddingLeft: 30, marginTop: 50}}>The key to making money in stocks is not to get scared out of them.</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <div>
                <Typography component="h1" variant="h5">
                  Login Here,
                </Typography>
                <form className={classes.form} onSubmit={this.onSubmit}>
                  <CssTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={this.onChange}
                  />
                  <CssTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={this.onChange}
                  />
                  <Link variant="body2" style={{color: '#0083B0', textDecoration: 'none'}}>
                    Forgot password?
                  </Link>
                  <ColorButton 
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    <Typography style={{ textDecoration: 'none', color: '#fff'}}>Login</Typography>
                  </ColorButton >
                  <Grid container>
                    <Grid item xs>
                      
                    </Grid>
                    <Grid item>
                      <Link to="/register" variant="body2" style={{color: '#0083B0'}}>
                        Don't have an account? Sign Up
                      </Link>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                    {/* <Copyright /> */}
                  </Box>
              </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default compose(withStyles(useStyles),connect(mapStateToProps, {login}))(Login);

// Login = withStyles(useStyles)(Login);
// export default connect(mapStateToProps, {login})(Login);

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }