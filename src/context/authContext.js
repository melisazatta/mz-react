import { createContext, useContext, useState } from "react";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
  
    const login = (email, password) => {
        console.log(email, password)
    }
    const logout = () => {
        console.log('signOut')
    }  

    return (
        <authContext.Provider value={{login, user, logout}}>
            {children}
        </authContext.Provider>
    )
}