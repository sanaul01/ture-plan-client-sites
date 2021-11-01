import { useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoding, setIsLoding] = useState(true);

    const auth = getAuth()
    const GoogleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        setIsLoding(true)
        return signInWithPopup(auth, GoogleProvider)
        .catch(error =>{
            setError(error.message)
        })
        .finally(()=> setIsLoding(false))
    };

    useEffect( ()=>{
        const unsubscribde = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoding(false)
        });
        return unsubscribde
    }, []);

    const logOut = () =>{
        setIsLoding(true)
        signOut(auth)
        .then(() =>{
            setUser({})
        })
        .finally(()=> setIsLoding(false))
    };
    
    return {
        user,
        error,
        isLoding,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;