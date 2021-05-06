import styleChosen from "../styles/IngredientsChosen.module.css"
import Tag from "./Tag"

export default function IngredientsChosen({chosen,addChosen}) {
    return (
        <div className={styleChosen.chosen}>
            {chosen.length < 1 && <p className={styleChosen.noChosen}>No ingredients chosen!</p>}
            {chosen.length > 0 && 
                chosen.map((chose, index) => {
                    return <Tag imgUrl={chose.url} tagName={chose.alt} onClick={() => addChosen(chose)} key={index} />
                })
            }
        </div>
    )
}
