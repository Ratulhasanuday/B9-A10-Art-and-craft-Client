import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config.js";
export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvide=new GoogleAuthProvider()
const facebookProvider= new FacebookAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const signInGoogle=()=>{
        return signInWithPopup(auth,googleProvide)
    }
    const signInFacebook=()=>{
        return signInWithPopup(auth,facebookProvider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,
            currentUser => {
                console.log('user in the auth State change', currentUser)
                setUser(currentUser);
                setLoading(false);
            }   )
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        userLogIn,
        signOutUser,
        signInGoogle,
        signInFacebook,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;