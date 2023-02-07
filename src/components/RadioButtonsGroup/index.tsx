import { IRadioButtonsGroupProps } from '@interfaces/common';

import './styles.scss';

function RadioButtonsGroup<T>({ options, name, onChange, valueMapper }: IRadioButtonsGroupProps<T>) {
  return (
    <div className="radio-buttons-group">
      {options.map(option => (
        <label key={option.label}>
          <input
            type="radio"
            name={name}
            value={option.value as string}
            onChange={event => onChange(event.target.value)}
          />
          <span className="radio-info">
            <span className="radio-label">{option.label}</span>
            {valueMapper && <span className="radio-value">{valueMapper(option.value)}</span>}
          </span>
        </label>
      ))}
    </div>
  );
}

export default RadioButtonsGroup;