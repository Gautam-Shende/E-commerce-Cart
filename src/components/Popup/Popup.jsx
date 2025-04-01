import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { 
  FaCcVisa, 
  FaPaypal, 
  FaCheckCircle,
  FaApplePay,
  FaGooglePay,
  FaBitcoin,
  FaCcMastercard,
  FaCcDiscover
} from 'react-icons/fa';
import { SiAmericanexpress, SiStripe } from 'react-icons/si';

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardName, setCardName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardNumber || !expiry || !cvc || !cardName) {
      alert("Please fill all fields");
      return;
    }
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 1500); 
  };

  const handleClose = () => {
    setOrderPopup(false);
    setTimeout(() => {
      setPaymentSuccess(false);
      setCardNumber("");
      setExpiry("");
      setCvc("");
      setCardName("");
    }, 300);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    setExpiry(value);
  };

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center p-4 ">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto transition-all duration-300 transform">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
                <h1 className="text-lg font-bold text-gray-800 dark:text-white">
                  {paymentSuccess ? "Payment Complete" : "Secure Payment"}
                </h1>
                <button 
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <IoCloseOutline className="text-xl" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-4">
                {paymentSuccess ? (
                  <div className="text-center py-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4 animate-bounce">
                      <FaCheckCircle  className="dark:text-green-400 text-3xl " />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Payment Successful!</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">Your transaction has been completed successfully.</p>
                    <button
                      onClick={handleClose}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Payment Methods */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {[
                        { icon: <FaCcVisa className="text-2xl text-blue-600" /> },
                        { icon: <FaPaypal className="text-2xl text-blue-400" /> },
                        { icon: <FaApplePay className="text-2xl text-black dark:text-white" /> },
                        { icon: <FaGooglePay className="text-2xl text-green-500" /> },
                        { icon: <SiStripe className="text-2xl text-purple-500" /> },
                        { icon: <FaBitcoin className="text-2xl text-orange-400" /> }
                      ].map((method, index) => (
                        <div key={index} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                          {method.icon}
                        </div>
                      ))}
                    </div>

                    {/* Card Number */}
                    <div className="mb-4">
                      <label htmlFor="cardNumber" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          maxLength={19}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900 dark:text-white transition-colors"
                        />
                        <div className="absolute right-2 top-2 text-gray-400 dark:text-gray-500">
                          {cardNumber.startsWith('4') ? (
                            <FaCcVisa className="text-lg" />
                          ) : cardNumber.startsWith('5') ? (
                            <FaCcMastercard className="text-lg" />
                          ) : cardNumber.startsWith('3') ? (
                            <SiAmericanexpress className="text-lg" />
                          ) : cardNumber.startsWith('6') ? (
                            <FaCcDiscover className="text-lg" />
                          ) : (
                            <span className="text-lg">💳</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <label htmlFor="expiry" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          value={expiry}
                          onChange={handleExpiryChange}
                          maxLength={5}
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900 dark:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                          CVC/CVV
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
                          maxLength={4}
                          placeholder="123"
                          className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900 dark:text-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Card Name */}
                    <div className="mb-4">
                      <label htmlFor="cardName" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900 dark:text-white transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow hover:shadow-md transition-all duration-300 text-sm"
                    >
                      Pay Now
                    </button>

                    {/* Security Info */}
                    <div className="mt-3 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">Secure SSL Encryption</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup;