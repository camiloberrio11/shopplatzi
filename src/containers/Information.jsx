import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      city: formData.get('city'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form autoComplete="off" ref={form}>
            <input
              type="text"
              placeholder="Ingresa tu nombre completo..."
              name="name"
            />
            <input
              type="text"
              placeholder="Ingresa tu correo electronico..."
              name="email"
            />
            <input
              type="text"
              placeholder="Ingresa tu dirección..."
              name="address"
            />
            <input
              type="text"
              placeholder="Ingresa tu apartamento, torre etc..."
              name="apto"
            />
            <input type="text" placeholder="Ingresa tu ciudad..." name="city" />
            <input
              type="text"
              placeholder="Ingresa tu país..."
              name="country"
            />
            <input
              type="text"
              placeholder="Ingresa tu estado..."
              name="state"
            />
            <input
              type="text"
              placeholder="Ingresa tu código postal..."
              name="cp"
            />
            <input
              type="text"
              placeholder="Ingresa tu telefono..."
              name="phone"
            />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.id}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
