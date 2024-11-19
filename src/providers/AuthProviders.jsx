import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const auth = getAuth(app);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("current user is ", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axios
        .get(
          `https://community-care-server-asibul-alams-projects.vercel.app/users/${user?.email}`
        )
        .then((res) => {
          setUserInfo(res.data);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loggedInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    createNewUser,
    loggedInUser,
    user,
    loading,
    logOut,
    signInWithGoogle,
    userInfo,
    setUserInfo,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <span className="loading loading-spinner text-error"></span>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
