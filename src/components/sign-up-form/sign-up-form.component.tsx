import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { SignUpContainer } from './sign-up-form.styles';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Email is already in use. Can not create user.');
      } else {
        console.log('user sign in failed', error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          onChange={handleChange}
          value={displayName}
          required={true}
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          required={true}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          required={true}
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          required={true}
        />

        <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
