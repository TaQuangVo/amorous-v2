import styleTag from "../styles/Tag.module.css"
import Image from "next/image"

export default function Tag({imgUrl, tagName, onClick}) {
    return (
        <div className={styleTag.container}>
            <div className={styleTag.avata}>
            <Image src={imgUrl} layout="fill" objectFit="contain" objectPosition="center center" alt={tagName}/>
            </div>
            <h4 className={styleTag.tagName}>{tagName}</h4>
            <div onClick={(e) => {onClick(e)}} className={styleTag.close}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.7 99.7">
                    <polygon points="99.7 12.02 87.68 0 49.85 37.83 12.02 0 0 12.02 37.83 49.85 0 87.68 12.02 99.7 49.85 61.87 87.68 99.7 99.7 87.68 61.87 49.85 99.7 12.02"/>
                </svg>
            </div>
        </div>
    )
}
