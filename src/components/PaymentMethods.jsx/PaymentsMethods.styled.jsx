import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 120px;
  padding: 8px 16px;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 4px;
  text-transform: capitalize;
  font: inherit;
  cursor: pointer;
  background-color: ${props => {
    return props.selected
      ? props.theme.colors.accent
      : props.theme.colors.white;
  }};
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    border-color 250ms ease-in-out;

  :hover {
    border-color: ${props => props.theme.colors.accent};
  }
`;
