import React from 'react';
import "./myCardStyle.css";

function MyCardU({ item }) {
  return (
    <div className="plan">
      <div className="inner">
        <span className="pricing">
          <span>{item.fee}</span>
        </span>
        <p style={{marginTop: '19px'}} className="title">Professional</p>
        <p className="info">{item.description}</p>
        <ul className="features">
          <li>
            <img className='iconList' src={require('../../assets/teacher.png')} />
            <span><strong>{item.skill}</strong></span>
          </li>
          <li>
            <img className='iconList' src={require('../../assets/about.png')} />
            <span style={{width: '300px', height: '20px', marginTop: '', marginBottom: '7px'}}>{item.duration}</span>
          </li>
          <li>
            <img className='iconList' src={require('../../assets/certIcon.png')} />
            <span style={{marginTop:'-2px'}}>{item.completion_certificate}</span>
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

export default MyCardU;
