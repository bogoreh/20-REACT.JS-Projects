export const validationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    message: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
  },
  phone: {
    pattern: /^\+?[\d\s-()]{10,}$/,
    message: 'Please enter a valid phone number'
  },
  required: {
    message: 'This field is required'
  },
  minLength: (length) => ({
    message: `Must be at least ${length} characters`
  }),
  maxLength: (length) => ({
    message: `Must be less than ${length} characters`
  })
};

export const validateField = (name, value, rules) => {
  const errors = [];

  if (rules.required && (!value || value.trim() === '')) {
    errors.push(validationRules.required.message);
    return errors; // Return early if required field is empty
  }

  if (!value) return errors; // If not required and empty, no errors

  if (rules.minLength && value.length < rules.minLength) {
    errors.push(validationRules.minLength(rules.minLength).message);
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    errors.push(validationRules.maxLength(rules.maxLength).message);
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    errors.push(rules.message);
  }

  if (rules.custom && typeof rules.custom === 'function') {
    const customError = rules.custom(value);
    if (customError) errors.push(customError);
  }

  return errors;
};