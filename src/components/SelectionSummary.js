import React from "react";

const SelectionSummary = props =>
  (Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {props.currencyConverter.format(selectedOption.cost)}
        </div>
      </div>
    );
  })
) ;

export default SelectionSummary;
