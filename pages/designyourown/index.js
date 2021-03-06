import styleCreateYO from "../../styles/CreateYourOwn.module.css"
import {useState, useContext} from "react"
import { useRouter } from 'next/router'

//components
import PageContainer from "../../components/PageContainer"

//context
import {oderDispatchContext} from "../../context/OderContext";


export default function DesignYourOwn() {

    const oderDispatch  = useContext(oderDispatchContext);

    const router = useRouter()

    const nextSteps = () => {
        oderDispatch({
            type:"SETODERTYPE",
            payload: "Create Your Own",
        })
        router.push("/designyourown/choosegender");
    }

    const [content, setContent] = useState({
        header:"Create Your Own",
        discription:"Your will go throw a serie of steps to create your fragrance",
        discription2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        button:"Start creating"
    })

    return (
            <PageContainer>
                <div className={styleCreateYO.wraper}>
                    <h1>{content.header}</h1>
                    <p>{content.discription}</p>
                    <p>{content.discription2}</p>
                    <button onClick={nextSteps}>{content.button}</button>
                </div> 
            </PageContainer>
    )
}
