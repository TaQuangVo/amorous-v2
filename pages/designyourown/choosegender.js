import {useState} from "react"

//conponents
import ChooseGender from "../../components/ChooseGender"
import PageContainer from "../../components/PageContainer"



export default function DesignYourOwn() {

    return (          
           <PageContainer>
               <ChooseGender redirectLink="/designyourown/choosecharactor"/>
           </PageContainer>
    )
}




