import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    const [JWT, setJWT] = useState(() => window.sessionStorage.getItem('JWT'))

  return <Context.Provider value={{JWT, setJWT}}>
    {children}
  </Context.Provider>
}

export default Context