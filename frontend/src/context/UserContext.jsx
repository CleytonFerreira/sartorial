import { createContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const userContext = console.log("teste");

  return (
    <UserContext.Provider value={userContext}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node
};

export default UserContextProvider;