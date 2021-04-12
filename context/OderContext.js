import {createContext, useState} from 'react'

export const oderContext = createContext();



export default function OderContextProvider({children}) {

    const [type, setType] = useState(null);
    const [oder, setOder] = useState({
        gender: null,
        
    });

    return (
        <oderContext.Provider value={{oder,setOder}}>
            {children}
        </oderContext.Provider>
    )
}
