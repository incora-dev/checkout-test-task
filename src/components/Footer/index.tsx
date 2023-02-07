import Verified from '@assets/icons/verified.svg';
import Certified from '@assets/icons/certified.svg';

import './styles.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-title">Secured & Encrypted Checkout</div>
      <div className="footer-secure">
        <img className="footer-secure-icon" src={Verified} alt="Verified" />
        <img className="footer-secure-icon" src={Certified} alt="Certified" />
      </div>
    </div>
  );
}

export default Footer;