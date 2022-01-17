import {createContext,useReducer, useState} from 'react'

export const oderStateContext = createContext();
export const oderDispatchContext = createContext();



export default function OderContextProvider({children}) {

    const CreateYO = "Create Your Own"
    const LetUsChoose = "Let Us Choose"
    const GlobalBrand = "Global Brands After Your Design"
    const Female = "Female"
    const Male = "Male"

    function oderReducer(state, action) {
        switch (action.type) {
            case 'SETODERTYPE': {
                return {
                    ...state,
                    type: action.payload,
                };
            }
            case 'SETGENDER_CYO': {
                return {
                    ... state,
                    CYO:{
                        ...state.CYO,
                        gender: action.payload
                    }
                }
            }
            case 'SETCHARACTOR_CYO': {
                return {
                    ... state,
                    CYO:{
                        ...state.CYO,
                        charactor: action.payload
                    }
                }
            }
            case 'SETIMPRESSION_CYO': {
                return {
                    ... state,
                    CYO:{
                        ...state.CYO,
                        impression: action.payload
                    }
                }
            }
            case 'SETINGREDIENTS_CYO': {
                return {
                    ... state,
                    CYO:{
                        ...state.CYO,
                        ingredients: action.payload
                    }
                }
            }
            case 'SETBOTTLE': {
                return {
                    ... state,
                    bottle: {
                        ...state.bottle,
                        bottle: action.payload
                    }
                }
            }
            case 'SETBOTTLEDISIGN': {
                return {
                    ... state,
                    bottle: {
                        ...state.bottle,
                        ...action.payload
                    }
                }
            }
            case 'SETBOXDESIGN': {
                return {
                    ... state,
                    box: {
                        ...state.box,
                        text: action.payload
                    }
                }
            }
            
            default:
            return state;
        }
    }
    const initOderState = {
        type:null,
        CYO:{
                name: "Create Your Own",
                gender: null,
                charactor:null,
                impression:null,
                ingredients:null,
            },
        LUC:{
                name: "Let Us Choose",
                gender: null,
                occasion: null,
                charactor: null,
                impression: null,
            },
        GB:{
                name: "Global Brand",
                brand: null,
                isOriginal: null,
                ingredientsToAdd: null,
            },
        bottle: {
            bottle:null,
            firstText:null,
            secondText:null,
            thirdText:null,
        },
        box: {
            box:null,
            text:null,
        }
    }
    const [oderState, oderDispatch] = useReducer(oderReducer, initOderState);

    return (
        <oderDispatchContext.Provider value={oderDispatch}>
            <oderStateContext.Provider value={oderState}>
                {children}
            </oderStateContext.Provider>
        </oderDispatchContext.Provider>
    )
}
