import React, { useEffect, useState } from "react";
import initialization from "../Firebase/initialization";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import useFunction from "./useFunction";
import { useNavigate } from "react-router";

initialization();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();
  const { alert } = useFunction();

  // ============================
  // Google Sign In function
  // ============================

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ============================
  // Google Current User function
  // ============================

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
      }
      setLoading(false);
    });
  }, [auth]);

  // ============================
  // Google Sign Out function
  // ============================

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserInfo([]);
        navigate(`/`);
      })
      .catch((error) => {
        setError(error.message);
      });
    setLoading(true);
    alert.show(`Logout Successful`);
  };

  return {
    userInfo,
    setUserInfo,
    setError,
    error,
    loading,
    setLoading,
    handleGoogleLogin,
    handleSignOut,
  };
};

export default useFirebase;
