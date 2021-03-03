const currencySelector = (code) => {
  switch (code) {
    case 'USD':
      return { code: 'USD', sign: '$' };
    case 'EUR':
      return { code: 'EUR', sign: '€' };

    case 'TRY':
      return { code: 'TRY', sign: '₺' };
    case 'GBP':
      return { code: 'GBP', sign: '£' };

    default:
      return { code: 'USD', sign: '$' };
  }
};

export default currencySelector;
