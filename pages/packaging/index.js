import styleCreateYO from "../../styles/CreateYourOwn.module.css"
import {useState} from "react"
import { useRouter } from 'next/router'

//components
import PageContainer from "../../components/PageContainer"


export default function DesignYourOwn() {
    const router = useRouter()

    const nextSteps = () => {

        router.push("/packaging/chooseBottle");
    }

    const [content, setContent] = useState({
        header:"Design Your packaging",
        discription:"Your will go throw a serie of steps to design the appearence of your parfume",
        discription2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        button:"Start Designing"
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
