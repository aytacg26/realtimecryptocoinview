import React from 'react';
import classes from './DataCard.module.css';
import currencySelector from '../../../utils/currencySelector';

const DataCard = ({
  currency,
  price,
  name,
  image,
  volume,
  convertCurrency,
  d1PercentChange,
  d7PercentChange,
}) => {
  const OneDayStyle = d1PercentChange < 0 ? { background: 'red' } : null;
  const SevenDayStyle = d7PercentChange < 0 ? { background: 'red' } : null;
  const { code, sign } = currencySelector(convertCurrency);

  return (
    <div className={classes.DataCardMain}>
      <div className={classes.UpperBand}>{name}</div>
      <div className={classes.ImageSection}>
        <img src={image} alt={currency} name={name} />
      </div>
      <div className={classes.InfoSection}>
        <div style={{ fontSize: 18, fontWeight: 600, color: '#002453' }}>
          {currency}
        </div>
        <div className={classes.PriceData}>
          <div className={classes.LabelData}>
            <span className={classes.Label}>Price</span>
            <span className={classes.DataPr}>
              {sign} {parseFloat(price).toFixed(2)} {code}
            </span>
          </div>
          <div className={classes.LabelData}>
            <span className={classes.Label}>24 Hour % Change</span>
            <span className={classes.Data} style={OneDayStyle}>
              %{d1PercentChange}
            </span>
          </div>
          <div className={classes.LabelData}>
            <span className={classes.Label}>7 Days % Change</span>
            <span className={classes.Data} style={SevenDayStyle}>
              %{d7PercentChange}
            </span>
          </div>
        </div>
        <div className={classes.LabelData}>
          <span className={classes.Label} style={{ marginLeft: 5 }}>
            Volume
          </span>
          <span className={classes.DataPr}>
            {sign}
            {parseFloat(volume).toFixed(2)}
          </span>
        </div>
      </div>
      <div className={classes.ButtonSection}>Buttons Section</div>
    </div>
  );
};

export default DataCard;
