import './button.styles.scss';

const Button = ({ buttonType, children, ...otherProps }) => {
  const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in-form',
    inverted: 'inverted',
  };

  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;