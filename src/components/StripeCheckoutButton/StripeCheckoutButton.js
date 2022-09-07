import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const KEY = 'pk_test_51LcLtjEYVFiLUHmJbUcUuzXHPNYmmusKXprb8d9y0Q6Apy2zNbw6PNamHzTa1CVDXTrsOgUsS51XLUTnRKW714Pr00YjYnhPFw';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful!');
    };

    return (
      <StripeCheckout
          label="Pay Now"
          name="YouTube Premium"
          billingAddress
          shippingAddress
          image="https://sm.mashable.com/mashable_in/seo/default/yt-premium-copy_641e.jpg"
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={KEY}
      />
  );
};

export default StripeCheckoutButton;