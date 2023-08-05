import { useEffect, useState, createContext } from 'react';
import { auth, createUserProfileDocument } from '../firebase';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                    setLoading(false)
                })
            } else {
                setUser(userAuth);
                setLoading(false);
            }
        });

        return () => unsubscribeFromAuth();
    }, []);

    const userContext = { user, loading };
  if (loading) { return <div>Loading...</div> }
    return (
        <UserContext.Provider value={userContext}>
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node
}

export default UserContextProvider;