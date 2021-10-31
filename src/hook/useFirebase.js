import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    // const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }

    //Firebase Logout System
    const logOut = () => {
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

        });
        return () => unsubscribed;
    }, [])


    return {
        user,
        setUser,
        logOut,
        signInUsingGoogle
    }


}
export default useFirebase;