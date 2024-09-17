import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ROLES } from '../../constants';
import actions from '../../actions';
import List from './List';
import Customer from './Customer';
import MerchantOrders from './MerchantOrders';  // Add this import
import Page404 from '../../components/Common/Page404';

class Order extends React.PureComponent {
  render() {
    const { user } = this.props;

    return (
      <div className='order-dashboard'>
        <Switch>
          <Route exact path='/dashboard/orders' component={List} />
          {user.role === ROLES.Admin && (
            <Route
              exact
              path='/dashboard/orders/customers'
              component={Customer}
            />
          )}
          {user.role === ROLES.Merchant && ( 
            
             <Route 
             path="/dashboard/orders/merchants" 
             component={MerchantOrders} />

          )}
          <Route path="/dashboard/orders" component={List} />     
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.account.user
});

export default connect(mapStateToProps, actions)(Order);
