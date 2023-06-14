'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './CheckoutForm.module.scss';

interface FormValues {
  number: string | number | readonly string[] | undefined;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  creditCard: string;
  expirationDate: string;
  securityCode: string;
}

const CheckoutForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
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
    number: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues: FormValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Perform form validation
    const isFormValid = Object.values(formValues).every(
      (value) => value.trim() !== '',
    );

    if (isFormValid) {
      // Submit the form or perform further actions
      console.log('Form submitted:', formValues);
    } else {
      console.log('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['form-grid']}>
      <input
        name="firstName"
        placeholder="First Name"
        value={formValues.firstName}
        onChange={handleChange}
      />
      <input
        name="lastName"
        placeholder="Last Name"
        value={formValues.lastName}
        onChange={handleChange}
      />
      <input
        type="address"
        name="address"
        placeholder="Address"
        value={formValues.address}
        onChange={handleChange}
      />
      <input
        type="number"
        name="number"
        placeholder="Number"
        value={formValues.number}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formValues.email}
        onChange={handleChange}
      />
      <button data-test-id="checkout-confirm-order">Confirm Order</button>
    </form>
  );
};

export default CheckoutForm;
