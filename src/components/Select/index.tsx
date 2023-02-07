import { useState } from 'react';
import { ISelectProps, ISelectValue } from '@interfaces/common';

import './styles.scss';

function Select<T>({ values, placeholder, onChange }: ISelectProps<T>) {
  const [value, setValue] = useState<ISelectValue<T>>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onSelect = (value: ISelectValue<T>) => {
    setIsOpen(false);
    setValue(value);
    onChange(value.value);
  };

  return (
    <div className="select-container">
      <div className={`selected-option ${isOpen ? 'open': ''}`} onClick={() => setIsOpen(!isOpen)}>
        {value?.icon && <img src={value.icon} alt={value.label} />}
        <span className="selected-option-value">{value?.label}</span>
        <span className={`selected-option-placeholder ${value ? 'value-selected' : ''}`}>{placeholder}</span>
      </div>
      {isOpen && (
        <div className="options">
          {values.map((item) => (
            <div key={item.label} className="option" onClick={() => onSelect(item)}>
              {item?.icon && <img src={item.icon} alt={item.label} />}
              <span>{item?.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;