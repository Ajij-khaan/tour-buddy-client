import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    // const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    //Firebase Logout System
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                console.log('success signout')
            })

    }

    //Observe User State Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(user)
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    return {
        user,
        setUser,
        logOut,
        isLoading,
        setIsLoading,
        signInUsingGoogle
    }


}
export default useFirebase;