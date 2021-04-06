import styleCreateYO from "../styles/CreateYourOwn.module.css"
import {useState} from "react"

//conponents
import ChooseGender from "../components/ChooseGender"



export default function DesignYourOwn() {

    const [content, setContent] = useState({
        header:"Create Your Own",
        discription:"Your will go throw a serie of steps to create your fragrance",
        discription2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        button:"Start creating"
    })

    return (
        <div className={styleCreateYO.container}>
            <div className={styleCreateYO.wraper}>
                <h1>{content.header}</h1>
                <p>{content.discription}</p>
                <p>{content.discription2}</p>
                <button>{content.button}</button>
            </div>
        </div>
    )
}
