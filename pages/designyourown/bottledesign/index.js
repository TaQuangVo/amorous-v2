import {useEffect, useContext} from "react"


//conponents
import BottleDesign from "../../../components/BottleDesign"
import PageContainer from "../../../components/PageContainer"

//context
import {oderContext} from "../../../context/OderContext";



export default function bottleDesign() {

    const {oder} = useContext(oderContext);

    useEffect(() => {
        console.log(oder);
    }, [])

    return (          
           <PageContainer>
               <BottleDesign />
           </PageContainer>
    )
}
