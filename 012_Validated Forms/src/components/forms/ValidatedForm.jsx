import { useState } from 'react';
import FormInput from './FormInput';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { validateField } from './validation';

const ValidatedForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    bio: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validationRules = {
    firstName: { required: true, minLength: 2, maxLength: 50 },
    lastName: { required: true, minLength: 2, maxLength: 50 },
    email: { 
      required: true, 
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    password: {
      required: true,
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      message: 'Must include uppercase, lowercase, number, and special character'
    },
    confirmPassword: {
      required: true,
      custom: (value) => value !== formData.password ? 'Passwords do not match' : null
    },
    phone: {
      pattern: /^\+?[\d\s-()]{10,}$/,
      message: 'Please enter a valid phone number'
    },
    bio: {
      maxLength: 200
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate on change if field has been touched
    if (touched[name]) {
      const fieldErrors = validateField(name, value, validationRules[name]);
      setErrors(prev => ({
        ...prev,
        [name]: fieldErrors
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const fieldErrors = validateField(name, value, validationRules[name]);
    setErrors(prev => ({
      ...prev,
      [name]: fieldErrors
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(fieldName => {
      const fieldErrors = validateField(
        fieldName, 
        formData[fieldName], 
        validationRules[fieldName]
      );
      
      if (fieldErrors.length > 0) {
        newErrors[fieldName] = fieldErrors;
        isValid = false;
      }
    });

    setErrors(newErrors);
    
    // Mark all fields as touched to show errors
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage('');

    if (!validateForm()) {
      setSubmitMessage('Please fix the errors before submitting.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Form submitted successfully!');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        bio: ''
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      setSubmitMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return Object.keys(errors).every(key => errors[key].length === 0) &&
           Object.keys(validationRules).every(key => formData[key]);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Create Your Account</h1>
        <p>Join our community today</p>
      </div>

      <form onSubmit={handleSubmit} className="validated-form" noValidate>
        <div className="form-row">
          <FormInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            rules={validationRules.firstName}
            touched={touched.firstName}
            errors={errors.firstName}
          />
          
          <FormInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            rules={validationRules.lastName}
            touched={touched.lastName}
            errors={errors.lastName}
          />
        </div>

        <FormInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          rules={validationRules.email}
          touched={touched.email}
          errors={errors.email}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          rules={validationRules.password}
          touched={touched.password}
          errors={errors.password}
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          rules={validationRules.confirmPassword}
          touched={touched.confirmPassword}
          errors={errors.confirmPassword}
        />

        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          rules={validationRules.phone}
          touched={touched.phone}
          errors={errors.phone}
        />

        <FormInput
          label="Bio (Optional)"
          name="bio"
          type="textarea"
          value={formData.bio}
          onChange={handleChange}
          onBlur={handleBlur}
          rules={validationRules.bio}
          touched={touched.bio}
          errors={errors.bio}
          showErrors={formData.bio.length > 0}
        />

        {formData.bio && (
          <div className="character-count">
            {formData.bio.length}/200 characters
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting || !isFormValid()}
          className="submit-button"
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner />
              Creating Account...
            </>
          ) : (
            'Create Account'
          )}
        </Button>

        {submitMessage && (
          <div className={`submit-message ${submitMessage.includes('success') ? 'success' : 'error'}`}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ValidatedForm;