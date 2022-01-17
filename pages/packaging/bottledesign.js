import {useEffect, useContext} from "react"


//conponents
import BottleDesign from "../../components/BottleDesign"
import PageContainer from "../../components/PageContainer"


export default function bottleDesign() {

    return (          
           <PageContainer>
               <BottleDesign redirectLink="/packaging/boxDesign"/>
           </PageContainer>
    )
}
