const currentUser = (user = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload
    case 'CLEAR_USER':
      return {}
    default:
      return user;
  }
};

export default currentUser;