import styleCreateYO from "../../styles/CreateYourOwn.module.css"
import {useState} from "react"

//conponents
import ChooseGender from "../../components/ChooseGender"
import PageContainer from "../../components/PageContainer"



export default function DesignYourOwn() {

    const [content, setContent] = useState({
        header:"Create Your Own",
        discription:"Your will go throw a serie of steps to create your fragrance",
        discription2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        button:"Start creating"
    })

    return (          
           <PageContainer>
               <ChooseGender />
           </PageContainer>
    )
}
