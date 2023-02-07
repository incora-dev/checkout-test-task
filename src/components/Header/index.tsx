import { IHeaderProps } from '@interfaces/common';
import Logo from '@assets/images/catstreet-logo.svg';

import './styles.scss';
import { Link } from 'react-router-dom';

function Header({ title }: IHeaderProps) {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img src={Logo} alt="Cat St." />
        </Link>
      </div>
      <div className="header-title">{title}</div>
    </div>
  );
}

export default Header;