import React from 'react';
import StripeCheckoutButton from '../StripeCheckoutButton/StripeCheckoutButton';
import './Stripe.css';

const Stripe = () => {

  const totalPrice = 11.99;

  return (
    <div className='stripeCheckout'>
        <header className='stripeCheckout__header'>
            <img 
              src='https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_logo_premium_desktop_552x71.png' 
              alt='youtube premium' 
              className='stripeCheckout__image' />
            <h1>YouTube and YouTube Music ad-free,<br /> offline, and in the background</h1>
            <p>
                <StripeCheckoutButton price={totalPrice} /> 
            </p>
            <h3>
                ${totalPrice}/month
            </h3>
            <p className='stripeCheckout__text'>
                We'll remind you 7 days before your trial ends<br />Recurring billing • Cancel anytime
            </p>
            <p className='stripeCheckout__black'>
                Or save money with an <span className='stripeCheckout__blue'>annual, family or student plan</span><br /><span className='stripeCheckout__lightBlue'>Restrictions apply. Learn more here.</span>
            </p>
        </header>
    </div>
  );
};

export default Stripe;