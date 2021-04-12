import {createContext, useState} from 'react'

export const languageContext = createContext();



export default function LanguageContextProvider({children}) {

    const [language, setLanguage] = useState(1);//1eng, 2arebic

    return (
        <languageContext.Provider value={{language,setLanguage}}>
            {children}
        </languageContext.Provider>
    )
}
