/* firebase */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import '../../firebase';
/* local state */
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
/* import auth context  */
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router';

/* custom hook */

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

/* provider FN */
const AuthContextprovider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();
  /* state update */
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, [auth]);

  /* create user  */
  const signUpWithEmail = async (username, email, pasword) => {
    try {
      setError(false);
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, pasword);
      setUser(auth.currentUser);
      navigate('/my-account');
      toast.success('Successfully registered!');
      setLoading(false);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
      setError(true);
    }
    updateProfile(auth.currentUser, {
      displayName: username,
    });
  };

  /* signIN/UP Google  */
  const signinGoogle = async () => {
    try {
      setError(false);
      setLoading(true);
      await signInWithPopup(auth, googleprovider);
      setUser(auth.currentUser);
      navigate('/my-account');
      toast.success('Successfully registered!');
      setLoading(false);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
      setError(true);
    }
  };

  /* signIN Email */
  const signinFN = async (email, pasword) => {
    try {
      setError(false);
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, pasword);
      setUser(auth.currentUser);
      navigate('/my-account');
      toast.success('Successfully logIn');
      setLoading(false);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError(true);
      toast.error('Something went wrong. Please try again.');
    }
  };

  /* signOut FN */
  const signOutFN = () => {
    signOut(auth);
    navigate('/login');
    toast.success('Successfully logout');
  };

  /* provide */
  const value = {
    error,
    setError,
    loading,
    setLoading,
    user,
    signUpWithEmail,
    signinFN,
    signOut,
    signOutFN,
    signinGoogle,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>{' '}
    </>
  );
};

export default AuthContextprovider;
