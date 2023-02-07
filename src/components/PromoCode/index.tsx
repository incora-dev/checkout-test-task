import Tags from '@components/Tags';
import { useState } from 'react';

import './styles.scss';

function PromoCode() {
  const [isPromoInputOpen, setIsPromoInputOpen] = useState<boolean>(false);
  const [coupons, setCoupons] = useState<string[]>([]);
  const [couponCode, setCouponCode] = useState<string>('');

  const addCoupon = () => {
    if (coupons.includes(couponCode)) {
      setCouponCode('');
      return;
    }

    if (couponCode.trim()) {
      setCoupons([...coupons, couponCode]);
      setCouponCode('');
    }
  };

  const deleteCoupon = (coupon: string) => {
    const newCoupons = coupons.filter(value => value !== coupon);

    setCoupons(newCoupons);
  };

  if (!isPromoInputOpen) {
    return (
      <div className="promo-code-container promo-code-closed">
        <span className="promo-code-text">Promo Code?</span>
        <span className="promo-code-link" onClick={() => setIsPromoInputOpen(true)}>Enter Code</span>
      </div>
    );
  }

  return (
    <div className="promo-code-container">
      <div className="promo-code-content">
        <input
          type="text"
          value={couponCode}
          placeholder="Coupon Code"
          onChange={event => setCouponCode(event.target.value)}
        />
        <button className="promo-code-button" onClick={addCoupon}>APPLY</button>
      </div>
      <Tags items={coupons} onDelete={deleteCoupon} />
    </div>
  );
}

export default PromoCode;
