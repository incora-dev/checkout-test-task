import CatImage from '@assets/images/cat-street-hero-olive_2000.webp';

import './styles.scss';

function Proposal() {
  return (
    <div className="proposal-container">
      <div className="proposal-title">Only For Cool Cats...</div>
      <div className="proposal-content">
        <div className="proposal-content-image">
          <img src={CatImage} alt="Only For Cool Cats..." />
        </div>
        <div className="proposal-content-info">
          <div className="proposal-content-info-description">Add the “Catnip” cover to your order and save 5%</div>
          <div className="proposal-content-info-price">
            <div className="proposal-content-info-price-new">$122.55</div>
            <div className="proposal-content-info-price-old">$129.00</div>
          </div>
          <button className="proposal-content-info-button">Add now</button>
        </div>
      </div>
    </div>
  );
}

export default Proposal;