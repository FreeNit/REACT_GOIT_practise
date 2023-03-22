import { Component } from 'react';

import { PaymentMethods } from 'components/PaymentMethods.jsx/PaymentsMethods';
import { Container } from './PaymentWidget.styled';
import { paymentMethods } from 'constants';
import { VisaPaymentForm } from 'components/VisaPaymentForm/VisaPaymentForm';
import { MasterCardPaymentForm } from 'components/MasterCardPaymentForm/MasterCardPaymentForm';

export class PaymentWidget extends Component {
  state = {
    selectedMethod: null,
  };

  selectPaymentMethod = method => {
    this.setState({
      selectedMethod: method,
    });
  };

  render() {
    const { selectedMethod } = this.state;
    return (
      <Container>
        <PaymentMethods
          selected={selectedMethod}
          onSelect={this.selectPaymentMethod}
        />
        {selectedMethod === paymentMethods.visa && <VisaPaymentForm />}
        {selectedMethod === paymentMethods.mastercard && (
          <MasterCardPaymentForm />
        )}
        {selectedMethod === paymentMethods.applepay && (
          <div>Apple Pay form</div>
        )}
      </Container>
    );
  }
}
