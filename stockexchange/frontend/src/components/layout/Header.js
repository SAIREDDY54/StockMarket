import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {AppBar, Avatar, Menu, MenuItem, Typography, Button, Toolbar, InputBase, IconButton, Divider} from '@material-ui/core';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { NotificationsOutlined, AccountBalanceWalletOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'
import {compose} from 'redux'

const useStyles = (theme) => ({
  menuItems: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 60,
    width: 330
  },
  root: {
    boxShadow: "none",
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    color: '#000',
    textDecoration: 'none',
    '&:hover': {
      color: '#1890ff'
    }
  },
  appbar: {
    backgroundColor: '#ffffff',
    color: '#000',
    boxShadow: "none",
    borderBottom: "1px solid #e2e2e2",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.05,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  explorelink: {
    color: '#000',
    textDecoration: 'none',
    paddingLeft: 20,
    '&:hover': {
      color: '#1890ff',
    },
  },
  search: {
    flexGrow: 0.2,
    position: 'relative',
    boxShadow: '1px 1px 4px #e2e2e2',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #f1f1f1',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.02),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
});

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }
  state = {
    dropdownMenu: null
  }
  handleClick = (event) => {
    this.setState({dropdownMenu: event.currentTarget})
  }
  handleClose = () => {
    this.setState({dropdownMenu: null})
  }
  render(){
    const { classes } = this.props;
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <>
        {/* <Typography>
          {user ? `Welcome, ${user.username} !` : ""}
        </Typography> */}
        <span style={{justifyContent: 'space-around', display: 'flex', flexGrow: 0.1}}>
          <NotificationsOutlined style={{cursor: "pointer", color: "#727272"}}/>
          <Link to="/balance"><AccountBalanceWalletOutlined style={{cursor: "pointer", color: "#727272"}}/></Link>
          <Link to="/cart"><ShoppingCartOutlined style={{cursor: "pointer", color: "#727272"}}/></Link>
        </span>
        <div onClick={this.handleClick} style={{cursor: "pointer"}}>
          <Avatar>H</Avatar>
        </div>
        <Menu
          disableAutoFocusItem
          id="simple-menu"
          anchorEl={this.state.dropdownMenu}
          keepMounted
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          open={Boolean(this.state.dropdownMenu)}
          onClose={this.handleClose}>
            <MenuItem style={{backgroundColor: '#f1f1f1'}}>
              <Avatar>H</Avatar>
              <div style={{flexDirection: 'column'}}>
                <Typography component={Link} to="/profile" className={classes.username}>
                  {user ? `${user.username}` : ""}
                </Typography>
                <Typography>
                  {user ? `${user.email}` : ""}
                </Typography>
              </div>  
            </MenuItem>
            <MenuItem component={Link} to="/bank-autopay" className={classes.menuItems}>Bank & AutoPay</MenuItem>
            <Divider />
            <MenuItem className={classes.menuItems}>Import Funds</MenuItem>
            <MenuItem className={classes.menuItems}>Watchlist</MenuItem>
            <Divider />
            <MenuItem component={Link} to="/order" className={classes.menuItems}>Orders</MenuItem>
            <MenuItem className={classes.menuItems}>SIPs</MenuItem>
            <Divider />
            <MenuItem className={classes.menuItems}>Help & Support</MenuItem>
            <MenuItem className={classes.menuItems}>Settings</MenuItem>
            <Divider />
            <MenuItem className={classes.menuItems} onClick={this.props.logout}>Logout</MenuItem>
        </Menu>
        {/* <Button variant="outlined" onClick={this.props.logout} style={{color: '#fff', backgroundColor: '#85AC93', }}>Logout</Button> */}
      </>
    );
    const guestLinks = (
      <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', }}>
        <Link to="/login" style={{textDecoration: 'none', color: '#fff'}}>Login/SignUp</Link>
      </Button>
    );
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <span style={{flexGrow: 0.2}}></span>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/" style={{color: '#464646', textDecoration: 'none'}}>Stock Exchange</Link>
            </Typography>
            <Typography><Link to="/explore" className={classes.explorelink}>Explore</Link></Typography>
            {isAuthenticated ? (
              <Typography><Link to="/investments" className={classes.explorelink}>Investments</Link></Typography>
            ) : (<></>)}
            <span style={{flexGrow: 0.1}}></span>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <span style={{flexGrow: 0.1}}></span>
            {isAuthenticated ? authLinks : guestLinks}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default compose(withStyles(useStyles), connect(mapStateToProps, {logout}))(Header);