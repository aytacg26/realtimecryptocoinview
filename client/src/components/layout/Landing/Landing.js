import React, { useState, useEffect } from 'react';
import classes from './Landing.module.css';
import DataCard from '../../UI/DataCard/DataCard';
import Button from '../../UI/Button/Button';
import Selector from '../../UI/Selector/Selector';
import axios from 'axios';

//TODO : ADD LOADING TO CARDS AREA
//TODO : ADD BUTTONS TO CARDS
//TODO : ADD SORTING
//TODO : ADD USD/EURO USD/GBP USD/TRY etc. Exchange Rates and Exchange Conversions to Landing Page
//TODO : INCREASE THE CURRENCY SELECTION OPTINS TO 7
//LOGO IS VERY SMALL IN MOBILE VERSION, CSS OF NAVBAR SHOULD BE REVISED. CURRENT NAVBAR IS NOT GOOD!!!
const Landing = (props) => {
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState('USD');
  const [selection, setSelection] = useState(6);
  const [currencies, setCurrencies] = useState([
    { name: 'UK Pound', code: 'GBP', sign: '£', isActive: false },
    { name: 'US Dollar', code: 'USD', sign: '$', isActive: true },
    { name: 'Turkish Lira', code: 'TRY', sign: '₺', isActive: false },
    { name: 'Euro', code: 'EUR', sign: '€', isActive: false },
  ]);
  const getLandingData = async (num, currency) => {
    const landingData = await axios.get(`api/currencies/${num}/${currency}`);
    setData(landingData.data);
  };

  useEffect(() => {
    getLandingData(selection, currency);
    const timer = setInterval(() => {
      getLandingData(selection, currency);
    }, 11000);

    return () => {
      clearInterval(timer);
    };
  }, [currency, selection]);

  const handleButtonClick = (curCode) => {
    setCurrency(curCode);

    const newCurrencySet = currencies.map((c) => {
      if (c.code !== curCode) {
        return { ...c, isActive: false };
      } else {
        return { ...c, isActive: true };
      }
    });

    setCurrencies(newCurrencySet);
  };

  const handleSelection = (e) => {
    const newVal = e.target.value;
    setSelection(newVal);
  };

  console.log(data);

  return (
    <div className={classes.LandingMain}>
      <div className={classes.Slogan}>
        The Key is not Spending Time But Investing In It.
      </div>

      <div className={classes.GlassOver}>
        <div className={classes.currencySelect}>
          {currencies.map((currency) => (
            <Button
              key={currency.code}
              clicked={() => handleButtonClick(currency.code)}
              title={currency.name}
              isActive={currency.isActive}
              btnStyle='primary'
              size='sm'
            >
              {currency.sign}
            </Button>
          ))}
        </div>
      </div>
      <div className={classes.LandingImage}></div>
      <div className={classes.Selector}>
        <Selector value={selection} change={handleSelection} />
      </div>
      <div className={classes.DataArea}>
        <section className={classes.DataCardSection}>
          {data.map((d) => (
            <DataCard
              key={d.id}
              price={d.price}
              currency={d.currency}
              name={d.name}
              image={d.logo_url}
              volume={d.market_cap}
              d1PercentChange={parseFloat(d['1d'].price_change_pct).toFixed(2)}
              d7PercentChange={parseFloat(d['7d'].price_change_pct).toFixed(2)}
              convertCurrency={currency}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default React.memo(Landing);
