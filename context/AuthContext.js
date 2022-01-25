import { createContext, useState } from "react";
import { promise } from "../helpers/promise";


import {auth} from "../util/firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"

export const authContext = createContext();

export default function AuthContextProvider({children}) {

    const [user, setUser] = useState(null);

    const register = async (email, pwd) => {
      
        try{
            const userObj = await createUserWithEmailAndPassword(auth, email, pwd)
            setUser(userObj);
            return [userObj, null]
        }catch(err){
            return [null, err]
        }
    }   

    const login = async (email, pwd) => {
        try{
            const userObj = await signInWithEmailAndPassword(auth, email, pwd)
            setUser(userObj);
            return [userObj, null]
        }catch(err){
            return [null, err]
        }
    }

    const logout = async () => {

        try{
            signOut(auth)
            setUser(null);
        }catch(err){
            setUser(null);
            console.log(err);
        }
    }


  return (
      <authContext.Provider value={{user,register,login,logout}}>
          {children}
      </authContext.Provider>
  );
}
