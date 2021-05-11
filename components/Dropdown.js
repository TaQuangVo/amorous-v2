import {useState, useEffect} from 'react'
import styleDropdown from "../styles/Dropdown.module.css"

export default function Dropdown({
    inputs,
    init,
    onChange,
}) {

    const [currentIndex, setCurrentIndex] = useState(inputs.indexOf(init));
    const [open, setOpen] = useState(false)

    const handleOnClick = (index) => {
        setCurrentIndex(index);
        setOpen(prev => {return !prev})
    }

    useEffect(() => {
        onChange(currentIndex);
    }, [currentIndex])


    return (
        <div className={styleDropdown.container} style={{zIndex:open ? `99`:'1'}}>
            <div className={styleDropdown.dropdownOverlay}
            style={{display:open ? `block`:'none'}}
            onClick={(e) => {setOpen(prev => {return !prev})}}></div>
            <div className={styleDropdown.output} 
                onClick ={() => setOpen(prev => {return !prev})}>
                <p>{inputs[currentIndex].text}</p>
            </div>
            <ul className={styleDropdown.inputs} 
            style={{height:open ? `${inputs.length * 2.3 + 2.3}rem`:'2.3rem'}}>
                <div></div>
                {inputs.map((input, index) => {
                    return <li onClick={() => handleOnClick(index)} key={index}>{input.text}</li>
                })}
            </ul>
        </div>
    )
}
