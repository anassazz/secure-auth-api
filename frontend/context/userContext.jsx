import axios from 'axios'
import { createContext, useState,useEffect, use } from 'react'

export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    useEffect(() => {

        if(!user){
            axios.get('/profile')
            .then(({data}) => {
                setUser(data)
            })
          
        }
    }, [])

    return(
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}