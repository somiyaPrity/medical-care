import { useEffect, useState } from 'react';
import initializeAuth from '../Firebase/firebase.init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';

initializeAuth();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // email and password set
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  //   email and password receive from input field
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    console.log(email);
  };
  const handleName = (e) => {
    const userName = e.target.value;
    setUserName(userName);
    console.log(userName);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    console.log(password);
  };
  //   creat user with email password
  const createNewUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const info = { ...result.user, displayName: userName };
        setUser(info);
        console.log(result.user);
        updateUserName();
        setError('');
        verifyEmail();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //   login with email password
  const loginWithEmailPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // set user name
  const updateUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: userName,
    }).then(() => {});
  };

  //   google sign-in
  const googleSignin = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //   logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  // verify email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    });
  };
  // reset password
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {
      console.log(result);
    });
  };
  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    error,
    handleEmail,
    handleName,
    handlePassword,
    createNewUser,
    loginWithEmailPassword,
    googleSignin,
    resetPassword,
    isLoading,
    logOut,
  };
};

export default useFirebase;
