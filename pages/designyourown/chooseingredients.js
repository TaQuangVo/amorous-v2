import {useEffect, useContext} from "react"


//conponents
import ChooseIngredients from "../../components/ChooseIngredients"
import PageContainer from "../../components/PageContainer"


export default function DesignYourOwn() {


    return (          
           <PageContainer>
               <ChooseIngredients redirectLink = "/packaging"/>
           </PageContainer>
    )
}
