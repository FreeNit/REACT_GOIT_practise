import { paymentMethods } from 'constants';
import { FaCcVisa, FaCcMastercard, FaCcApplePay } from 'react-icons/fa';

import { Container, Button } from './PaymentsMethods.styled';

export const PaymentMethods = ({ selected, onSelect }) => {
  return (
    <Container>
      <Button
        selected={selected === paymentMethods.mastercard}
        onClick={() => onSelect(paymentMethods.mastercard)}
      >
        <FaCcMastercard size={24} />
        Matercard
      </Button>
      <Button
        selected={selected === paymentMethods.visa}
        onClick={() => {
          onSelect(paymentMethods.visa);
        }}
      >
        <FaCcVisa size={24} />
        Visa
      </Button>
      <Button
        selected={selected === paymentMethods.applepay}
        onClick={() => {
          onSelect(paymentMethods.applepay);
        }}
      >
        <FaCcApplePay size={24} />
        Apple Pay
      </Button>
    </Container>
  );
};
