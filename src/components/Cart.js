import React from "react";
import SelectionSummary from "../SelectionSummary";

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const Cart = props => {
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <SelectionSummary currencyConverter={USCurrencyFormat} selected={props.selected} />
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    </section>
  )
}

export default Cart;

