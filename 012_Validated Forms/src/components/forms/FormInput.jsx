import { useState } from 'react';
import { validateField } from './validation';

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  rules = {},
  touched,
  errors = [],
  showErrors = true
}) => {
  const [localTouched, setLocalTouched] = useState(false);

  const handleBlur = (e) => {
    setLocalTouched(true);
    onBlur?.(e);
  };

  const handleChange = (e) => {
    onChange(e);
  };

  const isTouched = touched || localTouched;
  const displayErrors = isTouched && showErrors && errors.length > 0;
  const isValid = isTouched && errors.length === 0 && value;

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
        {rules.required && <span className="required">*</span>}
      </label>
      
      <div className="input-wrapper">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${
            displayErrors ? 'error' : isValid ? 'valid' : ''
          }`}
          aria-describedby={displayErrors ? `${name}-errors` : undefined}
        />
        
        {isValid && (
          <div className="validation-icon valid">
            ✓
          </div>
        )}
        
        {displayErrors && (
          <div className="validation-icon error">
            ⚠
          </div>
        )}
      </div>

      {displayErrors && (
        <div id={`${name}-errors`} className="error-messages">
          {errors.map((error, index) => (
            <span key={index} className="error-message">
              {error}
            </span>
          ))}
        </div>
      )}

      {isValid && (
        <div className="success-message">
          Looks good!
        </div>
      )}
    </div>
  );
};

export default FormInput;