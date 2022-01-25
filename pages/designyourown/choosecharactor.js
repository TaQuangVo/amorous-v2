//conponents
import {useContext}  from "react";
import { useRouter } from 'next/router'

//context
import {oderDispatchContext} from "../../context/OderContext";

import PageContainer from "../../components/PageContainer"
import SlideSelect from "../../components/SlideSelect"

//data
import {charactors} from "../../src/charactors";



export default function DesignYourOwn() {
    
    const router = useRouter()
    const oderDispatch = useContext(oderDispatchContext);

    const content = {
        header:"Create Your Own Fragrance",
        discription:"Choose a charactor",
    }

    const handleOnClick = (currentSlide) => {
        oderDispatch({
            type: "SETCHARACTOR_CYO",
            payload: charactors[currentSlide]
        })
        router.push("/designyourown/chooseimpression");
    }

    return (          
           <PageContainer>
               <SlideSelect  data={charactors} handleOnClick={handleOnClick} content={content}/>
           </PageContainer>
    )
}
