export const compare = (field, getValues) => (value) => {
  // Compares the password to confirmation password
  const compareTo = getValues()[field];
  return compareTo === value;
};
