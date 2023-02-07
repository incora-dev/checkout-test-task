import CustomerDetails from '@components/CustomerDetails';
import DeliveryDetails from '@components/DeliveryDetails';
import PaymentDetails from '@components/PaymentDetails';

import './styles.scss';

function CheckoutDetails() {
  return <div className="checkout-details-container">
    <CustomerDetails />
    <DeliveryDetails />
    <PaymentDetails />
  </div>;
}

export default CheckoutDetails;