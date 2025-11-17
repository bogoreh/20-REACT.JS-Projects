const Button = ({ 
  children, 
  type = 'button', 
  disabled = false, 
  className = '', 
  ...props 
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn ${className} ${disabled ? 'disabled' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;