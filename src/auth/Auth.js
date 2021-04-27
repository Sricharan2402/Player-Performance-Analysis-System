import React, { useState, useEffect, useContext } from "react";
import { auth, db } from "../firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userType, setUserType] = useState();
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(true);
  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signout = () => {
    return auth.signOut().then(() => {
      setUserDetails();
      setUserType();
    });
  };
  async function getUserInfo() {
    db.collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        setUserType(doc.data().Role);
      });
    setUserDetails({
      Name: "System_admin",
      Age: 0,
      Email: "futficianado.main@gmail.com",
      Gender: "",
      Nickname: "",
      photoURL:
        "https://drive.google.com/uc?id=1zTXjzbWJFn34UoHHB76ynP_rTJSZtY_j",
    });
  }

  useEffect(() => {
    if (userType && userType != "admin")
      db.collection(userType)
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          setUserDetails({
            Name: doc.data().Name,
            Age: doc.data().Age,
            Email: doc.data().Email,
            Gender: doc.data().Gender,
            Nickname: doc.data().Nickname,
            photoURL: doc.data().photoURL,
          });
        });
  }, [userType]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (currentUser) {
      getUserInfo();
    }
  }, [currentUser]);

  const value = {
    currentUser,
    userDetails,
    userType,
    getUserInfo,
    signin,
    signout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
