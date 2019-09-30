export const increment = multiplier => {
  return {
    type: 'INCREMENT',
    payload: multiplier
  };
};

export const decrement = multiplier => {
  return {
    type: 'DECREMENT',
    payload: multiplier
  };
};

export const login = () => {
  return {
    type: 'SIGN_IN'
  };
};
