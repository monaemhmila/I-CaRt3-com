import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import NotFound from '../../components/Common/NotFound';
import OrderList from '../../components/Manager/OrderList';
import SubPage from '../../components/Manager/SubPage';

const MerchantOrders = ({ fetchMerchantOrders, merchantOrders, isLoading }) => {
  useEffect(() => {
    fetchMerchantOrders();
  }, [fetchMerchantOrders]);

  return (
    <div className='merchant-orders'>
      <SubPage title='Merchant Orders'>
        {isLoading && <LoadingIndicator />}
        {merchantOrders.length > 0 ? (
          merchantOrders.map(merchantOrder => (
            <div key={merchantOrder.merchant}>
              <OrderList orders={merchantOrder.orders} />
            </div>
          ))
        ) : (
          !isLoading && <NotFound message='No merchant orders found.' />
        )}
      </SubPage>
    </div>
  );
};

const mapStateToProps = state => ({
  merchantOrders: state.order.merchantOrders,
  isLoading: state.order.isLoading
});

export default connect(mapStateToProps, actions)(MerchantOrders);
