import {createContext, useState} from 'react'

export const homeContext = createContext();



export default function HomepageContextProvider({children}) {

    const [currentSlide, setcurrentSlide] = useState(0);
    const content = [{
        header:"Create your own ",
        header2:"fragrance",
        discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        button:"Lorem ipsum",
        img:"/img/make-the-good-better-img.jpg",
        url:"/designyourown"
    },{
        header:"Make the good ",
        header2:"better",
        discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        button:"Lorem ipsum",
        img:"/img/design-your-own.jpg",
        url:"/makethegoodbetter"
    },{
        header:"Let us chose ",
        header2:"for you",
        discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        button:"Lorem ipsum",
        img:"/img/let-us-choose.jpg",
        url:"/letuschoose"
    }]


    return (
        <homeContext.Provider value={{content,currentSlide,setcurrentSlide}}>
            {children}
        </homeContext.Provider>
    )
}
