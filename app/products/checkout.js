import { useRouter } from 'next/router';
// src/pages/checkout.js
import React, { useState } from 'react';

const CheckoutPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    creditCard: '',
    expirationDate: '',
    securityCode: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Implement form submission and order confirmation
    router.push('/thankyou');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          data-test-id="checkout-first-name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          data-test-id="checkout-last-name"
          required
        />
        {/* Add more input fields for other form fields */}
        <button type="submit" data-test-id="checkout-confirm-order">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
