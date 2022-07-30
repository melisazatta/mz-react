import { useContext, useCallback } from "react";
import Context from "../context/UserContext";
import loginServ from "./loginServ";

export default function useUser () {
    const {JWT, setJWT} = useContext(Context)

    const login = useCallback(({email, password}) => {
        loginServ({email, password})
        .then(JWT => {
            window.sessionStorage.setItem('JWT', JWT)
            console.log(JWT)
            setJWT(JWT)
        })
        .catch(err => {
            window.sessionStorage.removeItem('JWT')
            console.log(err)
        })
    }, [setJWT])

    const logout = useCallback(()=> {
        window.sessionStorage.removeItem('JWT')
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(JWT),
        login,
        logout
    }
}