import {
  Field as FormkikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.label`
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${props => props.theme.colors.error};
`;

export const Field = styled(FormkikField)`
  padding: 5px;
  font: inherit;
`;
