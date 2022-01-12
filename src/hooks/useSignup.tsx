import { useState, useEffect } from "react";
import { auth, db } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useAuthContext } from "./useAuthContext";
import "firebase/compat/auth";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [user, setUser] = useState<object | null>(null);
  const { dispatch } = useAuthContext();

  const signup = async (email: string, password: string, username: string) => {
    setError(null);
    setIsPending(true);
    try {
      //Create username
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!response) {
        throw new Error("It wasn't possible to signup");
      }

      // //Update displayName to the user
      updateUserProfile(response.user, username);

      //Add user to users collection Firebase
      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        displayName: username,
      });

      //Dispatch login action
      dispatch({ type: "LOGIN", payload: response.user });

      //Update states
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
        setUser(response.user);
      }
    } catch (error) {
      setError(error.message);
      if (!isCancelled) {
        setIsPending(false);
        setError(error.message);
      }
    }
  };

  const updateUserProfile = async (user: User, username: string) => {
    await updateProfile(user, {
      displayName: username,
    })
      .then(() => {
        console.log("Profile updated");
      })
      .catch((error) => console.log(error));
  };

  //Cleanup function in case the async function it's active while the component it's unmounted
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { error, signup, isPending, user };
};
