import style from "./style.module.css"
import Tag from "../Tag"

export default function IngredientsChosen({chosen,addChosen}) {
    return (
        <div className={style.chosen}>
            {chosen.length < 1 && <p className={style.noChosen}>No ingredients chosen!</p>}
            {chosen.length > 0 && 
                chosen.map((chose, index) => {
                    return <Tag imgUrl={chose.url} tagName={chose.alt} onClick={() => addChosen(chose)} key={index} />
                })
            }
        </div>
    )
}
