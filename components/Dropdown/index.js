import {useState, useEffect} from 'react'
import style from "./style.module.css"

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
        <div className={style.container} style={{zIndex:open ? `99`:'1'}}>
            <div className={style.dropdownOverlay}
            style={{display:open ? `block`:'none'}}
            onClick={(e) => {setOpen(prev => {return !prev})}}></div>
            <div className={style.output} 
                onClick ={() => setOpen(prev => {return !prev})}>
                <p>{inputs[currentIndex].text}</p>
            </div>
            <ul className={style.inputs} 
            style={{height:open ? `${inputs.length * 2.3 + 2.3}rem`:'2.3rem'}}>
                <div></div>
                {inputs.map((input, index) => {
                    return <li onClick={() => handleOnClick(index)} key={index}>{input.text}</li>
                })}
            </ul>
        </div>
    )
}
