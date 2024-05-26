import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './paymentFormStyle.css'
import InfoCard from './InfoCard';
import './infoCardStyle.css'
 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <div id='creditCard'>
            <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
            />
            {/* <form>
                <input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
            />
            
            <input
                type="text"
                name="name"
                placeholder="Card Holder"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
            />

            <input
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
            />

            <input
                type="tel"
                name="cvc"
                placeholder="cvv"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
            />
            </form> */}
        </div>
        <div id='infocard'>
        <div className="main">
              <div className="cardInfo">
                <div className="heading">Credentials</div>
                <br />
                <div className="details">
                  <span style={{float: 'left'}}>Completely secured.</span><br /><span style={{float: 'left'}}>128 bit encryption!</span><br /><span>20+ Banking Partners.</span>
                </div>
                <div className="price">₹299</div>
                <div
                    class="flex items-center justify-center bg-gray-800 overflow-hidden p-1 border border-white border-opacity-30 rounded-lg shadow-md h-9 btn1"
                >
                    <input
                        class="w-42 h-full border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                        type="tel"
                        name="number"
                        id="input"
                        placeholder="0000 0000 0000 0000"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        autoComplete='false'
                    />
                    <div
                        class="flex items-center justify-center relative w-10 h-6 bg-gray-200 border border-white border-opacity-20 rounded-md"
                    >
                        <svg viewBox="0 0 256 83" width="33" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient
                            y2="100%"
                            y1="-2.006%"
                            x2="54.877%"
                            x1="45.974%"
                            id="logosVisa0"
                            >
                            <stop stop-color="#222357" offset="0%"></stop>
                            <stop stop-color="#254AA5" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <path
                            transform="matrix(1 0 0 -1 0 82.668)"
                            d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963zm3.037-21.601l6.265-30.027h-17.158zm-118.599 21.6L88.964 1.246h20.687l17.104 79.963zm-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963z"
                            fill="url(#logosVisa0)"
                        ></path>
                        </svg>
                    </div>
                    {/* <img id='debitcard' src={require('../../assets/pngtree-debit-card-payment-png-image_5705181.jpeg')} /> */}
                </div>
                <input
                className='btn2 text-m bg-gray-800 text-white font-semibold caret-orange-500'
                type="text"
                name="name"
                placeholder="Card Holder"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                autoComplete='false'
                />

                <input
                className='btn3 text-sm bg-gray-800 text-white font-semibold caret-orange-500'
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                autoComplete='false'
                />

                <input
                className='btn4 text-sm bg-gray-800 text-white font-semibold caret-orange-500'
                type="tel"
                name="cvc"
                placeholder="CVV"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                autoComplete='false'
                />
              </div>
        
              <img src={require('../../assets/icon-protectquickly.avif')} className='glasses' />
            </div>
            <div class="container9">
                <div class="left-side">
                    <div class="card9">
                    <div class="card-line"></div>
                    <div class="buttons"></div>
                    </div>
                    <div class="post">
                    <div class="post-line"></div>
                    <div class="screen">
                        <div class="dollar">$</div>
                    </div>
                    <div class="numbers"></div>
                    <div class="numbers-line2"></div>
                    </div>
                </div>
                <div class="right-side">
                    <div class="new">Checkout</div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}