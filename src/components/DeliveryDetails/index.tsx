import { useCallback, useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Select from '@components/Select';
import RadioButtonsGroup from '@components/RadioButtonsGroup';
import Modal from '@components/Modal';
import { IRadioButtonOption } from '@interfaces/common';
import { CartContext } from '@contexts/cart';
import dialInfo from '@assets/data/country_dial_info.json';

import './styles.scss';

const countries = dialInfo.map((countryInfo) => ({
  label: countryInfo.name,
  value: countryInfo.code,
}));

const shippingOptions: IRadioButtonOption<number>[] = [
  {
    label: 'Free Shipping',
    value: 0,
  },
  {
    label: 'Standard Shipping',
    value: 10,
  },
  {
    label: 'Express Shipping',
    value: 25.3,
  },
];

function DeliveryDetails() {
  const { setShippingCost } = useContext(CartContext);

  const [areShipmentDetailsShown, setAreShipmentDetailsShown] = useState(false);
  const formik = useFormik({
    initialValues: {
      country: '',
      deliveryAddress: '',
      shipping: 0,
    },
    onSubmit: () => {},
  });

  const handleCountryChange = useCallback((value: string) => {
    formik.setFieldValue('country', value);
  }, []);
  const handleShippingChange = useCallback((value: string) => {
    setShippingCost(Number(value));
    formik.setFieldValue('shipping', value);
  }, []);

  // TODO: deliver form data where it's needed
  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  // TODO: modal content should be replaced by needed shipment details
  return (
    <>
      <Modal
        open={areShipmentDetailsShown}
        title="Shipping details"
        onClose={() => setAreShipmentDetailsShown(false)}
      >
        {shippingOptions.map(option => (
          <div key={option.label} className="delivery-option">
            <span className="delivery-option-label">{option.label}</span>
            <span className="delivery-option-value">${option.value.toFixed(2)}</span>
          </div>
        ))}
      </Modal>
      <div className='customer-details-title'>Delivery Details</div>
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="form-row-item half-width">
            <Select values={countries} onChange={handleCountryChange} placeholder="country" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-item">
            <textarea
              id="deliveryAddress"
              name="deliveryAddress"
              onChange={formik.handleChange}
              value={formik.values.deliveryAddress}
              rows={2}
              required
            />
            <label htmlFor="deliveryAddress" title="delivery address" />
            <button className="delivery-link" onClick={() => formik.setFieldValue('deliveryAddress', '')}>change</button>
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-item">
            <RadioButtonsGroup
              name="shipping-options"
              options={shippingOptions}
              onChange={handleShippingChange}
              valueMapper={(value: number) => <div>${value.toFixed(2)}</div>}
            />
            <button className="delivery-link" onClick={() => setAreShipmentDetailsShown(true)}>about shipping</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default DeliveryDetails;
