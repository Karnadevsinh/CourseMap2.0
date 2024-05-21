import React from 'react';
import './card2Style.css';

function Card2() {
  return (
    <div className="card2">
      <div className="pricing-block-content">
        <p className="pricing-plan">Starter</p>
        <div className="price-value" data-currency="$ USD" data-currency-simple="USD">
          <p className="price-number">₹<span className="price-integer">0</span></p>
          <div id="priceDiscountCent">/mo</div>
        </div>
        <div className="pricing-note">Free Audit</div>
        <ul className="check-list" role="list">
          <li className="check-list-item">
            <img className='listIcons' src={require('../../assets/checklist.png')} />
            Full Access
          </li>
          <li className="check-list-item">
            <img className='listIcons' src={require('../../assets/checklist.png')} />
            Quizes
          </li>
          <li className="check-list-item">
            <img className='crossIcon' src={require('../../assets/remove.png')} />
            Peer Review
          </li>
          <li className="check-list-item">
            <img className='crossIcon' src={require('../../assets/remove.png')} />
            Certificate
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card2;
