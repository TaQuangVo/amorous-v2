import {useState} from "react"

//conponents
import ChooseCharactor from "../../components/ChooseCharactor"
import PageContainer from "../../components/PageContainer"



export default function Charactors() {

    return (          
           <PageContainer>
               <ChooseCharactor redirectLink="/designyourown/chooseimpression"/>
           </PageContainer>
    )
}
