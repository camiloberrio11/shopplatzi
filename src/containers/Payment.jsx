import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
  const history = useHistory();
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      'AaN1bJokessSK3d_HwrcpGn61vKFGKI5CrKTc-UY0eDAzOrXsvaPPXODWrH-zS3qgAbEotThDNex_XBY',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() =>
              console.log(
                'iniciando pago, ejecutar acciones.. guardar historial, vaciar carro etc'
              )
            }
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(err) => console.log(err)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
