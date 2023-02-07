import { useContext } from 'react';
import CartItem from '@components/CartItem';
import PromoCode from '@components/PromoCode';
import Proposal from '@components/Proposal';
import Totals from '@components/Totals';
import { ICartProps } from '@interfaces/cart';
import { CartContext } from '@contexts/cart';
import { calculateDiscount, calculateSubtotal } from '@utils/cart';

import './styles.scss';

function Cart({
  includeCheckout = false,
  includeProposal = false,
}: ICartProps) {
  const { cartItems, onItemChange, shippingCost } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <div className="cart-empty-container">
      <div className="cart-empty-container-text">There’s nothing for your poor cat in your cart!</div>
    </div>;
  }

  return (
    <div className="cart-container">
      <div className="cart-info">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            {...item}
            onChange={onItemChange}
          />
        ))}
        <PromoCode />
        {includeProposal && <Proposal />}
      </div>
      <Totals
        subtotal={calculateSubtotal(cartItems)}
        shipping={shippingCost}
        discount={calculateDiscount(cartItems)}
        includeCheckout={includeCheckout}
      />
    </div>
  );
}

export default Cart;