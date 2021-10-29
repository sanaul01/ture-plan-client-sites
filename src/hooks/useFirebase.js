import { useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const GoogleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        return signInWithPopup(auth, GoogleProvider)
        .catch(error =>{
            setError(error.message)
        } )
    }

    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    }
    useEffect( ()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log('change auth', user);
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;