import { useCallback, useEffect } from 'react';
import { useFormik } from 'formik';
import PhoneInput from '@components/PhoneInput';

import './styles.scss';

function CustomerDetails() {
  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
    },
    onSubmit: () => {},
  });

  const handlePhoneChange = useCallback((value: string) => {
    formik.setFieldValue('phone', value);
  }, []);

  // TODO: deliver form data where it's needed
  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  return (
    <div className="customer-details">
      <div className='customer-details-title'>Your Details</div>
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="form-row-item">
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            <label htmlFor="email" title="your email" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-item half-width">
            <PhoneInput onChange={handlePhoneChange} placeholder="phone" />
          </div>
          <div className="form-row-item form-row-tip half-width">Your phone number is required for delivery & shipping updates.</div>
        </div>
        <div className="form-row">
          <div className="form-row-item half-width">
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              required
            />
            <label htmlFor="firstName" title="first name" />
          </div>
          <div className="form-row-item half-width">
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              required
            />
            <label htmlFor="lastName" title="last name" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomerDetails;
