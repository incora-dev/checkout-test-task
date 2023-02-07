import CheckoutDetails from '@components/CheckoutDetails';
import Footer from '@components/Footer';
import Header from '@components/Header';
import OrderDetails from '@components/OrderDetails';

import './styles.scss';

function Checkout() {
  return (
    <>
      <div className="checkout-container">
        <Header title="Checkout" />
        <div className="checkout-details">
          <CheckoutDetails />
          <OrderDetails />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Checkout;