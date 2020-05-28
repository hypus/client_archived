// eslint-disable-next-line import/prefer-default-export
export const formatDecimalNumbers = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
