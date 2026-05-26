import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"; // function that listens for login/logout changes
import { auth } from "../firebaseConfig"; // firebase auth object

const AuthContext = createContext(); // create a global container ( any screen can access user, loading without prop drilling )

export const AuthProvider = ({ children }) => { // creating a wrapper component ( Provider component )
  const [user, setUser] = useState(null); // currently logged in user ( initially null )
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => { // Firebase auth listener. 
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);