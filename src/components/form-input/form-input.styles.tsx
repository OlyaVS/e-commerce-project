import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabel};
`;

export const FormInputElement = styled.input`
  padding: 10px;
  margin: 25px 0;
  display: block;
  width: 100%;
  color: ${subColor};
  font-size: 18px;
  background: none;
  background-color: white;
  border: none;
  border-bottom: 1px solid ${subColor};

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel};
  }
`;
