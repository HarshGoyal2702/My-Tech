import React, { useEffect, createContext, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //create an account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //login with email and password
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    signOut(auth);
  };
  //update user profile
  const updateUserProfile = ({ name, photoURL }) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //check the Signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(currentUser);
        setLoading(false);
        // ...
      } else {
        // User is signed out
        // ...
      }
      return () => {
        return unsubscribe();
      };
    });
  }, []);
  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
