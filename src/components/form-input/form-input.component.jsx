import { FormInputElement, FormInputLabel, Group } from './form-input.styles';

const FormInput = ({ label, name, ...otherProps }) => {
  return (
    <Group>
      <FormInputElement name={name} {...otherProps} />
      {label && (
        <FormInputLabel htmlFor={name} shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
