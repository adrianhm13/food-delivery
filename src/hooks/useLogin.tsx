import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email: string, password: string) => {
    setError(null);
    setIsPending(true);

    try {
      //Login user
      const response = await signInWithEmailAndPassword(auth, email, password);
      setUser(response.user)
      //Dispatch login action
      dispatch({ type: "LOGIN", payload: response.user });

      //Update states
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        setIsPending(false);
        console.log(error);
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { user, error, login, isPending };
};
