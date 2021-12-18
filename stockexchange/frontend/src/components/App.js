import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './layout/Header';
import Dashboard from './layout/Dashboard'
import Login from './auths/Login'
import Register from './auths/Register'
import PrivateRoute from './common/PrivateRoute'
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import store from '../store';
import { loadUser } from '../actions/auth'
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './layout/Alerts'
import ExploreHome from './explore/ExploreHome';
import InvestmentsHome from './investments/InvestmentsHome';
import Profile from './profile/Profile';
import StocksView from './StocksView';
import MutualFundsView from './MutualFundsView';
import BankAutopay from './profile/BankAutopay';
import Orders from './profile/Orders';
import Cart from './profile/Cart';
import Balance from './profile/Balance';
import ImportFunds from './profile/ImportFunds';
import USStocksView from './USStocksView';
import FDView from './FDView';
import YahooStocks from './YahooStocks';

const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <React.Fragment>
              {/* <Header /> */}
              <Alerts />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <PrivateRoute path="/explore" component={ExploreHome} />
                  <PrivateRoute path="/investments" component={InvestmentsHome} />
                  <PrivateRoute path="/profile" component={Profile} />
                  <PrivateRoute path="/bank-autopay" component={BankAutopay} />
                  <PrivateRoute path="/order" component={Orders} />
                  <PrivateRoute path="/cart" component={Cart} />
                  <PrivateRoute path="/balance" component={Balance} />
                  <PrivateRoute path="/track" component={ImportFunds} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/stocks/:name" component={StocksView} />
                  <Route exact path="/mutual-funds/:name" component={MutualFundsView} />
                  <Route exact path="/usstocks/:name" component={USStocksView} />
                  <Route exact path="/fixed-deposits/:name" component={FDView} />
                  <Route exact path="/charts/stocks/:name" component={YahooStocks} />
                </Switch>
              </div>
            </React.Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));