import React, { useState } from 'react';

const CreditCardPayment = () => {

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleToggle2 = ()=> {
     setToggle2(true);
  } 
  const handleToggle1 = ()=> {
     setToggle1(true);

     setTimeout(() => {
       handleToggle2();
      
     }, 1000); 
  }

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderChange = (event) => {
    setCardHolder(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform payment processing logic here

    // Reset form fields
    setCardNumber('');
    setCardHolder('');
    setExpiryDate('');
    setCvv('');
  };

  return (
    <div className="big">

      <div className="credit-card-payment">
        <h2>Credit Card Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder:</label>
            <input
              type="text"
              id="cardHolder"
              value={cardHolder}
              onChange={handleCardHolderChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={handleCvvChange}
                required
              />
            </div>
          </div>
          <button type="submit" onClick={handleToggle1}>Pay Now</button>
        </form>
      </div>
       
       {toggle1 && <h1>Payment is Processing...</h1>} 
       {toggle2 && <h2>Payment Successful</h2>}
    </div>
  );
};

export default CreditCardPayment;
