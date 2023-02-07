import PaypalIcon from '@assets/icons/paypal.svg';
import CardIcon from '@assets/icons/card.svg';

import './styles.scss';

function PaymentDetails() {
  return (
    <div className="payment-details-container">
      <div className="payment-details-title">Payment Details</div>
      <div className="payment-details-content">
        <div className="payment-details-content-item">
          <img src={PaypalIcon} alt="Paypal" />
        </div>
        <div className="payment-details-content-item">
          <img src={CardIcon} alt="Card" />
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
