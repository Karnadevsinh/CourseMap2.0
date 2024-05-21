import React from 'react';
import "./myCardStyle.css";

function MyCard({ item }) {
  return (
    <div className="plan">
      <div className="inner">
        <span className="pricing">
          <span>₹49 <small>/ m</small></span>
        </span>
        <p className="title">Professional</p>
        <p className="info">{item.headline}</p>
        <ul className="features">
          <li>
            <img className='iconList' src={require('../../assets/teacher.png')} />
            <span><strong>{item.visible_instructors[0].display_name}</strong></span>
          </li>
          <li>
            <img className='iconList' src={require('../../assets/about.png')} />
            <span style={{width: '300px', height: '20px', marginTop: '-20px', marginBottom: '7px'}}>{item.visible_instructors[0].job_title}</span>
          </li>
          <li>
            <img className='iconList' src={require('../../assets/languages.png')} />
            <span>{item.locale.title}</span>
          </li>
        </ul>
        {/* <div className="action">
          <a className="btnPlan" href="#">
            Choose plan
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default MyCard;
