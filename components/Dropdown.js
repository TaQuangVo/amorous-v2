import {useState, useEffect} from 'react'
import styleDropdown from "../styles/Dropdown.module.css"

export default function Dropdown({
    inputs,
    initIndex,
    onChange,
}) {

    const [currentIndex, setCurrentIndex] = useState(initIndex);
    const [open, setOpen] = useState(false)

    const handleOnClick = (index) => {
        setCurrentIndex(index);
        setOpen(prev => {return !prev})
    }

    useEffect(() => {
        onChange(currentIndex);
    }, [currentIndex])


    return (
        <div className={styleDropdown.container}>
            <div className={styleDropdown.output} >
                <p>{inputs[currentIndex].text}</p>
            </div>
            <ul className={styleDropdown.inputs} 
            onMouseEnter={()=> setOpen(true)} 
            onMouseLeave={() => setOpen(false)}
            style={{height:open ? `${inputs.length * 2.3 + 2.3}rem`:'2.3rem'}}>
                <div></div>
                {inputs.map((input, index) => {
                    return <li onClick={() => handleOnClick(index)} key={index}>{input.text}</li>
                })}
            </ul>
        </div>
    )
}
