import {createContext, useState} from 'react'

export const oderContext = createContext();



export default function OderContextProvider({children}) {

    const CreateYO = "Create Your Own"
    const LetUsChoose = "Let Us Choose"
    const Female = "Female"
    const Male = "Male"

    const [oder, setOder] = useState({
        type:null,
        gender: null,
        charactor:null,
        impression:null,
        ingredients:null,
    });
    const [bottleDesign, setBottleDesign] = useState({
        bottle:null,
        firstText:null,
        secondText:null,
    });
    const [boxDesign, setBoxDesign] = useState({
        box:null,
        text:null,
    });

    return (
        <oderContext.Provider value={{oder,setOder,CreateYO,Female,Male,LetUsChoose,setBottleDesign,bottleDesign,boxDesign,setBoxDesign}}>
            {children}
        </oderContext.Provider>
    )
}
