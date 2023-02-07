import { useState } from 'react';
import { ISidebarProps } from '@interfaces/sidebar';
import CloseIcon from '@assets/icons/close.svg';
import CartIcon from '@assets/icons/cart.svg';

import './styles.scss';

function Sidebar({ children }: ISidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <div className="layout"></div>}
      <button className="transparent-button cart-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={CartIcon} alt="Cart" />
      </button>
      <div className={`sidebar-container ${isOpen ? 'sidebar-opened' : ''}`}>
        <div className="sidebar-header">
          <button className="transparent-button close-button" onClick={() => setIsOpen(!isOpen)}>
            <img src={CloseIcon} alt="Close" />
          </button>
          <div className="title">Your Cart</div>
        </div>
        <div className="sidebar-content">
          {children}
        </div>
      </div>
    </>
  );
}

export default Sidebar;