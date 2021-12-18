import React from 'react'
import Header from '../layout/Header'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Tabs, Tab, Avatar, Typography} from '@material-ui/core'
import { HashRouter as Router, Route, Switch, Redirect, Link, useRouteMatch } from 'react-router-dom';
import BasicDetails from './BasicDetails';
import Reports from './Reports';
import ChangePassword from './ChangePassword';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {compose} from 'redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  image: {
    width: 100,
    height: 100
  },
  abovebox: {
    display: "flex",
    alignItems: 'center',
    flexDirection: 'column',
    padding: 30
  }
}));

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontSize: 18,
    minWidth: "100%",
    alignSelf: 'flex-start',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      backgroundColor: "#E3F2FD",
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const Profile = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let {path, url} = useRouteMatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {isAuthenticated, user} = props.auth
  return (
    <div>
      <Header />
      <Grid container spacing={5}>
        <Grid item xs>
          {/* <Paper>xs</Paper> */}
        </Grid>
        <Grid item xs={2}>
          <Paper style={{marginTop: 80}}>
            <div className={classes.abovebox}>
              <Avatar className={classes.image}>H</Avatar>
              <Typography style={{fontSize: 16, fontWeight: "bold", paddingTop: 20}}>{user ? `${user.username}` : ""}</Typography>
            </div>
            <div>
              <AntTabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <AntTab label="Basic Details" component={Link} to={`${url}/basic-details`} />
                <AntTab label="Reports" component={Link} to={`${url}/reports`} />
                <AntTab label="Change Password" component={Link} to={`${url}/change-password`} />
              </AntTabs>
            </div>
          </Paper>
          
        </Grid>
        <Grid item xs={6}>
          <Paper style={{marginTop: 80}}>
            <Switch>
              <Route exact path={`${path}/`} render={()=> {return (<Redirect to={`${path}/basic-details`} />)}} />
              <Route exact path={`${path}/basic-details`} component={BasicDetails} />
              <Route exact path={`${path}/reports`} component={Reports} />
              <Route exact path={`${path}/change-password`} component={ChangePassword} />
            </Switch>
          </Paper>
        </Grid>
        <Grid item xs>
          {/* <Paper>xs</Paper> */}
        </Grid>
      </Grid>
    </div>
  )
}


Profile.PropTypes = {
  auth: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return { auth: state.auth };
} 


export default connect(mapStateToProps)(Profile);