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
        bottleId:null,
        boxId:null,
    });
    const [bottleDesign, setBottleDesign] = useState({
        fontFamilyOne: null,
        fontFamilyTwo: null,
        fontSize:null,
        textOne:null,
        textTwo:null,
        textThree:null,
        imageBlob:null,
    });
    const [boxDesign, setBoxDesign] = useState({
        fontFamily: null,
        fontSize:null,
        textOne:null,
        imageBlob:null,
    });

    return (
        <oderContext.Provider value={{oder,setOder,CreateYO,Female,Male,LetUsChoose}}>
            {children}
        </oderContext.Provider>
    )
}
