
import { createContext, useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from '../firebase';
import PropTypes from 'prop-types';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {

        await createUserProfileDocument(userAuth);
        setCurrentUser({
          id: userAuth.uid,
          ...userAuth,
        });
      } else {

        setCurrentUser(null);
      }
      setIsLoading(false);
    });


    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node
};

export default UserContextProvider;