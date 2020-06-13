import numeral from 'numeral';

const dollarFilter = value => {
  if (!value) {
    return '$ 0';
  }
  return numeral(value).format('($ 0.00 a)');
};

const percentFilter = value => {
  if (!value) {
    return '0%';
  }
  return numeral(value).format('0.000%');
};

export { dollarFilter, percentFilter };
