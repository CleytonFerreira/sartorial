// UserContext.jsx
import { createContext, useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from '../firebase'; // Update this with the correct path to your firebase/index.js file
import PropTypes from 'prop-types';


// Create a new context
const UserContext = createContext();

// Custom hook to use the context easily in any component
// export function useUserContext() {
//   return useContext(UserContext);
// }

// Context provider component
export function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Firebase's auth.onAuthStateChanged() method returns an unsubscribe function, so we can use it to clean up the event listener when the component unmounts
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // User is signed in
        await createUserProfileDocument(userAuth);
        setCurrentUser({
          id: userAuth.uid,
          ...userAuth, // Include userAuth data in currentUser directly
        });
      } else {
        // User is signed out
        setCurrentUser(null);
      }
      setIsLoading(false);
    });

    // Clean up the event listener when the component unmounts
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