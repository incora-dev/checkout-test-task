import QuantityInput from '@components/QuantityInput';
import { ICartItemProps } from '@interfaces/cart';

import './styles.scss';

function CartItem({
  id,
  name,
  image,
  price,
  quantity,
  onChange,
}: ICartItemProps) {
  return (
    <div className="cart-item-card">
      <div className="cart-item-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="cart-item-card-info">
        <div className="cart-item-card-info-title">{name}</div>
        <div className="cart-item-card-info-price">
          <QuantityInput value={quantity} onChange={(value: number) => onChange(id, value)} />
          <span>{price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;