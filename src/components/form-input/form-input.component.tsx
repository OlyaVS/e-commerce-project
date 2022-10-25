import { FC, InputHTMLAttributes } from 'react';
import { FormInputElement, FormInputLabel, Group } from './form-input.styles';

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, name, ...otherProps }) => {
  const shouldShrink = Boolean(
    otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length
  );
  return (
    <Group>
      <FormInputElement name={name} {...otherProps} />
      {label && (
        <FormInputLabel htmlFor={name} shrink={shouldShrink}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
