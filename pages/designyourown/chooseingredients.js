import {useEffect, useContext} from "react"


//conponents
import ChooseIngredients from "../../components/ChooseIngredients"
import PageContainer from "../../components/PageContainer"

//context
import {oderContext} from "../../context/OderContext";



export default function DesignYourOwn() {

    const {oder} = useContext(oderContext);

    useEffect(() => {
        console.log(oder);
    }, [])

    return (          
           <PageContainer>
               <ChooseIngredients redirectLink = "/designyourown/chooseBottle"/>
           </PageContainer>
    )
}
