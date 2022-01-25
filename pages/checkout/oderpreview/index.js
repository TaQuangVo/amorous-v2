import styles from "./style.module.css"
import { useContext } from "react";

import PageContainer from "../../../components/PageContainer"
import ShowCYOOderPreview from "../../../components/ShowCYOOderPreview"

import {oderStateContext} from "../../../context/OderContext";


export default function oderpreview() {

    const oderState = useContext(oderStateContext)


    return (
        <PageContainer>
            <div className={styles.container}>
                <div className={styles.body}>
                    <ShowCYOOderPreview oder={oderState} />
                </div>
            </div>
        </PageContainer>
    )
}
