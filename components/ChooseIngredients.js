import {useState, useContext} from "react";
import styleIngrediens from "../styles/ChooseIngredients.module.css"
import { useRouter } from 'next/router'

//components
import IngredientsTemplate from "./IngredientsTemplate"
import IngredientsChosen from "./IngredientsChosen";

import {data} from "../src/ingrediensData.js";

//context
import {oderContext} from "../context/OderContext";

export default function ChooseIngredients({redirectLink}) {

    const [ingredients, setSngredients] = useState(data);
    const [chosen, setChosen] = useState([]);
    const {oder, setOder} = useContext(oderContext);
    const router = useRouter();

    const addIngredients = () => {
        setOder((prev) => {
            return {
                ...prev,
                ingredients:chosen,
            }
        });
        router.push(redirectLink);
    }

    const filterData = (keyWord) => {
        const result = data.filter(ing => {
            const name = ing.alt.toUpperCase();
            const key = keyWord.toUpperCase();
            if( name.includes(key)){
                return true;
            }else {
                return false;
            }
        });

        setSngredients(result);
    }

    const content = {
        header:"Design Your Own",
        discription1:"Choose ingredients",
        discription2:"(Mininal of 1 and maximal of 5 ingredients)",
        search:"Search",
        btn:"Continue"
    }

    const addChosen = (newChosen) => {

        if( chosen.includes(newChosen) ){
            const temp = chosen.filter(chose => {
                return chose != newChosen;
            })
            setChosen(temp); 
        }else{
            setChosen(prev => [
                ...prev,
                newChosen
            ]); 
        }

        
    }

    return (
        <div className={styleIngrediens.chooseIngredientsWraper} >
            <div className={styleIngrediens.header}>
                <h2>{content.header}</h2>
                <p>{content.discription1}<br/>{content.discription2}</p>
                <IngredientsChosen chosen={chosen} addChosen={addChosen}/>
                <div className={styleIngrediens.searchNBtn}>
                    <div className={styleIngrediens.search}>
                        <input onChange={(e)=>{filterData(e.target.value)}} type="text" name="searchInput" placeholder={content.search} autoComplete="off"/>
                        <div className={styleIngrediens.searchIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 10.7">
                                <path  d="M603.79,284.79l-3.33-3.33a4.22,4.22,0,1,0-.8.88l3.29,3.3ZM597,282.12a3,3,0,1,1,3-3A3,3,0,0,1,597,282.12Z" transform="translate(-592.79 -274.94)"/>
                            </svg>
                        </div>
                    </div>
                    <div className={styleIngrediens.continue}>
                        <button onClick={addIngredients}>{content.btn}</button>
                    </div>
                </div>
            </div>
            <div className={styleIngrediens.ingredientsWraper}>
                <div className={styleIngrediens.body}>
                    <div className={styleIngrediens.ingrediens}>
                        {
                            data.map(ingredientdata => {
                                return <IngredientsTemplate
                                    data={ingredientdata} 
                                    chosen={chosen.includes(ingredientdata)} 
                                    display={ingredients.includes(ingredientdata)}
                                    key={ingredientdata.id}
                                    addChosen={addChosen}/>
                            })
                        }
                        { ingredients.length === 0 && <div className={styleIngrediens.noFound}> No ingredient found </div> }
                    </div>                    
                </div>
            </div>

        </div>
    )
}
