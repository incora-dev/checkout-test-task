import { IQuantityInputProps } from '@interfaces/common';

import './styles.scss';

function QuantityInput({ value, onChange }: IQuantityInputProps) {
  return (
    <div className="quantity-input-container">
      <div className="quantity-input-control quantity-input" onClick={() => onChange(value - 1)}>-</div>
      <div className="quantity-input-block quantity-input">{value}</div>
      <div className="quantity-input-control quantity-input" onClick={() => onChange(value + 1)}>+</div>
    </div>
  );
}

export default QuantityInput;
