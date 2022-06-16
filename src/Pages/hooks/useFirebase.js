import React, { useEffect } from 'react'
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithPopup, getIdToken } from "firebase/auth";
import { app } from '../../../src/Firebase/firebase.config';
import axios from 'axios';


const useFirebase = () => {
  const[user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const resisterUser = (email, password, name, navigate, location) =>{
    setIsLoading(true);
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      setAuthError('');
      const newUser = {email, displayName: name};
      setUser(newUser);
      //save user to database
      saveUser(email, name, 'POST');
      updateProfile(auth.currentUser, {
        displayName: name
    }).then(() => {
    }).catch((error) => {
      setAuthError(error.message);
      console.log(error);
    });
    // navigate('/');
      const destination = location?.state?.from || '/';
      navigate(destination);
    })
    .catch((error) => {
      setAuthError(error.message);
      // ..
    })
    .finally(() => setIsLoading(false));
  }

 // redirect-location-history
 const loginUser = (email, password, location, navigate)=>{
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // setUser(userCredential.user);
        // redirect-location-history-end
      // redirect-location-history-start
      const destination = location?.state?.from || '/';
      navigate(destination);
      setAuthError('');
    
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
}

const signInWithGoogle = (location, navigate) =>{
  setIsLoading(true);
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    //  setUser(result.user);
    const user = result.user;
     //save user to database
     saveUser(user.email, user.displayName, 'PUT');

     const destination = location?.state?.from || '/';
     navigate(destination);
     setAuthError('');
  }).catch((error) => {
    setAuthError(error.message);
  })
  .finally(()=>setIsLoading(false));
}

//observer user state
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        getIdToken(user)
        .then(idToken =>{
          setToken(idToken);
        })
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  },[])

  //ADMIN_EMIL_CHECK
  useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  },[user.email])

  const logOut = () =>{
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(()=> setIsLoading(false));
    
  }
const saveUser = (email, displayName, method) => {
  const user = { email, displayName };
  axios({
    method: method,
    url: "http://localhost:5000/users",
    data: user
  });
}

return{
  user,
  admin,
  token,
  isLoading,
  authError,
  resisterUser,
  loginUser,
  signInWithGoogle,
  logOut
}
 
}

export default useFirebase