import Select from '@components/Select';
import dialInfo from '@assets/data/country_dial_info.json';
import { IPhoneInputProps, ISelectValue } from '@interfaces/common';
import { ChangeEvent, useEffect, useState } from 'react';

import './styles.scss';

const phoneData: ISelectValue<string>[] = dialInfo.map(countryInfo => ({
  value: countryInfo.dial_code,
  label: `${countryInfo.flag} ${countryInfo.dial_code}`,
}));

function PhoneInput({ placeholder, onChange }: IPhoneInputProps) {
  const [code, setCode] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  const onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const validNumber = event.target.value.replace(/[^0-9]/g, '');
    setNumber(validNumber);
  };

  useEffect(() => {
    onChange(`${code}${number}`);
  }, [code, number, onChange]);

  return (
    <div className="phone-input-container">
      <Select values={phoneData} onChange={setCode} />
      <input type="text" value={number} onChange={onPhoneNumberChange} required />
      <label title={placeholder} />
    </div>
  );
}

export default PhoneInput;