import { createContext, useEffect, useReducer } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthState = {
  user: object | null;
  authIsReady: boolean;
};
type AuthAction = {
  dispatch: {
    type: string;
    payload: object | null;
  };
};
type AuthContextProviderProps = {
  children: React.ReactNode;
};
type AuthContextType = {
  user: object | null;
  authIsReady: boolean;
  dispatch: React.Dispatch<{ type: string; payload: object | null }>;
};
export const authReducer = (
  state: AuthState,
  action: AuthAction["dispatch"]
) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, authIsReady: true, user: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  //Check Auth and assign the user null or login user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsubscribe();
    });
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
