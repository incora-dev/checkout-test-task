import Cart from '@components/Cart';
import Proposal from '@components/Proposal';

import './styles.scss';

function OrderDetails() {
  return (
    <div className="order-details">
      <div className="order-details-title">Your order</div>
      <Cart />
      <button className="order-details-button">Pay now</button>
      <Proposal />
    </div>
  );
}

export default OrderDetails;