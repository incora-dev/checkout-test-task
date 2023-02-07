import { ITotalsProps } from '@interfaces/cart';
import { Link } from 'react-router-dom';

import './styles.scss'

function Totals({ subtotal, shipping = null, discount = 0, includeCheckout = false }: ITotalsProps) {
  return (
    <div className="totals-container">
      <div className="totals-container-item">
        <div className="totals-container-item-title">Subtotal</div>
        <div className="totals-container-item-value">${subtotal}</div>
      </div>
      <div className="totals-container-item">
        <div className="totals-container-item-title">Shipping</div>
        <div className="totals-container-item-value">
          {shipping === null ? 'calculated next step' : `$${shipping.toFixed(2)}`}
        </div>
      </div>
      {discount !== 0 && (
        <div className="totals-container-item">
          <div className="totals-container-item-title">Discounts</div>
          <div className="totals-container-item-value">-${discount}</div>
        </div>
      )}
      <div className="totals-container-total">
        <div className="totals-container-total-title">TOTAL</div>
        <div className="totals-container-total-price">
          <div className="totals-container-total-currency">AUD</div>
          <div className="totals-container-total-value">${(subtotal + (shipping || 0) - discount).toFixed(2)}</div>
        </div>
      </div>
      {includeCheckout && <Link to="/checkout" className="totals-container-button">Checkout now</Link>}
    </div>
  );
}

export default Totals;