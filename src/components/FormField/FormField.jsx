import { Wrapper, ErrorMessage, Field } from './FormField.styled';

export const FormField = ({ label, name }) => {
  return (
    <Wrapper>
      {label && <span>{(label, name)}</span>}
      <Field name={name}></Field>
      <ErrorMessage name={name} component="span" />
    </Wrapper>
  );
};
